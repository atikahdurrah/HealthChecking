const { test, expect } = require('@playwright/test')
//const urls = require('../../../urls'); // Adjust path as per your project structure

test('Goto Document', async ({ page }) => {
    //await page.goto(urls.TectraSTAG);

    //Click on "New Request"
    await page.getByText('Document Numbers').click();
    await page.getByLabel('Document Numbers').getByRole('textbox').click();
    await page.getByLabel('Document Numbers').getByRole('textbox').fill('199');
    await page.getByRole('cell', { name: 'C Library software and' }).click();
})