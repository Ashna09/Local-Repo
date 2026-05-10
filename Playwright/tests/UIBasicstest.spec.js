const {test} = require('@playwright/test');

//browser must be declared in {}, because its a global fixture (variable)

test('Context browser playwright test', async ({browser}) => {

    const context = await browser.newContext();
     const page = await context.newPage();
    await  page.goto("https://www.userlytics.com/");

});

// In playwright you can skip line 7 and 8 if you declare page as global fixture
// Test to declare page as global fixture

test('Page as a global fixture', async ({page}) =>{

    await page.goto("https://ux.questionpro.com/en/login");

});