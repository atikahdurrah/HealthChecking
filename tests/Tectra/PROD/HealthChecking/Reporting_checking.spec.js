const {test,expect} = require('@playwright/test')
const urls = require('../../../urls'); // Adjust path as per your project structure

test('Reporting checking', async ({page}) => {
    //goto URL
    await page.goto(urls.TectraPROD);

    //goto - 'Reporting'
    await page.getByRole('tab', { name: 'Reporting' }).locator('path').click();
    await expect(page).toHaveURL(/.*default/);

    //goto - 'Custom filtering creation date'
    await page.getByText('Custom filtering creation date').click();
    await expect(page).toHaveURL(/.*default/);

    //Click on 'Display' button
    await page.click('text=Display')
})


