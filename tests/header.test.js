const puppeteer = require('puppeteer')
const sessionFactory = require('./factories/sessionFactory')
const userFactory = require('./factories/userFactory');
let browser, page;

//executed before each test runs 
beforeEach(async () => {
    browser = await puppeteer.launch({
        headless: false, //do not start in headless mode
    });
    page = await browser.newPage();
    await page.goto('localhost:3000');
});

//executed after each test runs 
afterEach(async () => {
    await browser.close();
});


test('Header has the correct test', async () => {
    const text = await page.$eval('a.brand-logo', el =>
        el.innerHTML
    );
    expect(text).toEqual('Blogster');
});

test('clicking login starts oauth flow', async () => {
    await page.click('.right a');
    const url = await page.url();
    expect(url).toMatch(/accounts\.google\.com/);
});


test('when signed in shows logout button', async () => {
    //const id = '61bdba9aaae23d386c8801b0';
    const user = await userFactory();
    const {session ,sig} = sessionFactory(user);
    
    await page.setCookie({ name:'session',value:session });
    await page.setCookie({ name:'session.sig',value:sig });
    await page.goto('localhost:3000');
    await page.waitFor('a[href="/auth/logout"]');

    const text = await page.$eval('a[href="/auth/logout"]',el => el.innerHTML); 
    expect(text).toEqual('Logout');
});