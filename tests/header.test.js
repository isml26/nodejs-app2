const sessionFactory = require('./factories/sessionFactory')
const userFactory = require('./factories/userFactory');
const Page = require('./helpers/page');
let page;

//executed before each test runs 
beforeEach(async () => {
    page = await Page.build();
    await page.goto('localhost:3000');
});

//executed after each test runs 
afterEach(async () => {
    await page.close();
});


test('Header has the correct test', async () => {
    const text = await page.getContentsOf('a.brand-logo');
    expect(text).toEqual('Blogster');
});

test('clicking login starts oauth flow', async () => {
    await page.click('.right a');
    const url = await page.url();
    expect(url).toMatch(/accounts\.google\.com/);
});

test('when signed in shows logout button', async () => {
    await page.login();

    const text = await page.getContentsOf('a[href="/auth/logout"]');
    expect(text).toEqual('Logout');
});

