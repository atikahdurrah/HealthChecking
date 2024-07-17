const {test,expect} = require('@playwright/test')
const urls = require('../../../urls'); // Adjust path as per your project structure

test('My Tasks request checking', async ({page}) => {
    //goto URL
    await page.goto(urls.TectraPROD);

    //goto - 'My Tasks'
    await page.getByRole('tab', { name: 'My Tasks' }).locator('path').click();
    await expect(page).toHaveURL(/.*default/);

    //goto - 'My Tasks search'
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').fill('TecTra2024061900001998');

    //click on 'Search'
    await page.getByRole('img', { name: 'search requests' }).click();
    await expect(page).toHaveURL(/.*default/);

    //click on 'TecTra2024061900001998'
    await page.getByText('TecTra2024061900001998').click();
    await expect(page).toHaveURL(/.*default/);
})


