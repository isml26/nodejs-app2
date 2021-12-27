const puppeteer = require('puppeteer')

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

test('clicking login starts oauth flow',async()=>{
    await page.click('.right a');
    const url = await page.url();
    expect(url).toMatch(/accounts\.google\.com/);
})