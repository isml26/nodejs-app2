const puppeteer = require('puppeteer');
const sessionFactory = require('../factories/sessionFactory')
const userFactory = require('../factories/userFactory');

class CustomPage {
    constructor(page){
        this.page = page;
    }
    // generate new puppeteer page and create custom page ,combine together with proxy object
    static async build(){
        const browser = await puppeteer.launch({
            headless:false
        });
        const page = await browser.newPage();
        const customPage = new CustomPage(page);
        return new Proxy(customPage,{
            get:function(target,property){
                return customPage[property] || browser[property] || page[property];
            }
        });
    }
    async login(userProps){
        const user = await userFactory(userProps);
        const {session ,sig} = sessionFactory(user);

        await this.page.setCookie({ name:'session',value:session });
        await this.page.setCookie({ name:'session.sig',value:sig });
        await this.page.goto('localhost:3000/blogs');
        await this.page.waitFor('a[href="/auth/logout"]');
    }
    async getContentsOf(selector){
        return this.page.$eval(selector,el=>el.innerHTML);
    }
    get(path){
        return this.page.evaluate(async(_path)=>{
            return fetch(_path,{
                method:'GET',
                credentials:'same-origin',
                headers:{
                    'Content-Type':'application/json'
                }
            }).then(res=>res.json());
        },path);
    }

    post(path,data){
        return this.page.evaluate(async(_path,_data)=>{
            return fetch(_path,{
                method:'POST',
                credentials:'same-origin',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(_data)
            }).then(res=>res.json());
        },path,data); 
    }
    execRequests(actions){
        // make sure all of them to be resolved before trying to make assertions any of them
        return Promise.all(actions.map(({method, path, data})=>{
            return this[method](path,data);
        }));
    }
}

module.exports = CustomPage;
