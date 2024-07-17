const {test,expect} = require('@playwright/test')
const urls = require('./urls'); // Adjust path as per your project structure

/*(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page = await context.newPage();
    
    // Navigate to the URLs using the centralized definitions
    await page.goto(urls.home);
    await page.goto(urls.login);

    await browser.close();
})();*/

test('Goto page', async ({page}) => {
    await page.goto(urls.PRAWSTAG);

     //Click on "New Request"
    await page.click('text=Manual PR')
})
  
    