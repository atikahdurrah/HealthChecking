const {test,expect} = require('@playwright/test')
const urls = require('../../../urls'); // Adjust path as per your project structure

test('Goto Tectra', async ({page}) => {
    await page.goto(urls.TectraPROD);
    await page.waitForLoadState();

     //Click on "New Request"
    await page.click('text=New Request')
})