const { test, expect } = require('@playwright/test')
const urls = require('../../../urls'); // Adjust path as per your project structure

test('Goto Tectra', async ({ page }) => {
    await page.goto(urls.TectraPROD);
    await page.waitForLoadState();

    //Click on "New Request"
    await page.getByRole('button', { name: 'New Request' }).click();
    await page.locator('#txtTecTra_Reference').fill('ADTectraTest');
    await page.waitForLoadState();
    await page.locator('#txtProjectName').fill('ADTectraTest');
    await page.getByRole('listbox').getByRole('textbox').click();
    await page.waitForLoadState();
    await page.getByRole('listbox').click();
    await page.waitForLoadState();
    await page.getByRole('listbox').getByRole('textbox').fill('laaser');
    await page.getByRole('option', { name: 'Laaser Christian (IT RDI IM' }).click();
    await page.waitForLoadState();
    await page.getByLabel('select').first().click();
    await page.waitForLoadState();
    //await page.getByLabel('Next').click();
    //await page.waitForLoadState();
    await page.getByTitle('Saturday, August 10,').click();
    await page.waitForLoadState();
    await page.getByPlaceholder('Click to select...').click();
    await page.getByRole('cell', { name: 'PMD - Power Management Devices' }).click();
    await page.waitForLoadState();

    /*Document Tab
    await page.getByText('Document Numbers').click();
    await expect(page).toHaveURL(/.*default/);
    await page.getByLabel('Document Numbers').getByRole('textbox').click();
    await page.waitForLoadState();
    await page.getByLabel('Document Numbers').getByRole('textbox').fill('199');
    await page.getByRole('cell', { name: 'C Library software and' }).click();
    await page.getByLabel('Document Numbers').click();
    await page.locator('#actionMenuWrapper').getByTitle('Save').locator('path').click();
    await page.waitForLoadState();
    await page.getByText('Details', { exact: true }).click();
    //await page.getByLabel('Document Numbers').getByText('Document Number', { exact: true }).click();
    //await page.getByLabel('Document Number : IP000000199').getByTitle('Close').click();
    await page.waitForLoadState();*/

    //Details Tab
    await page.getByText('Details', { exact: true }).click()
    await page.waitForLoadState();
    await expect(page).toHaveURL(/.*default/);
    await page.getByLabel('No').first().check();
    await page.getByLabel('No').nth(1).check();
    await page.getByRole('listbox').click();
    await page.getByRole('option', { name: '1. Microcontroller,' }).click();

    //Partner Tab
    await page.getByText('Partner', { exact: true }).click();
    await page.getByPlaceholder('Click to select and add').first().click();
    await page.getByPlaceholder('Click to select and add').first().fill('224');
    await page.getByRole('cell', { name: '1000' }).first().click();

    //await page.waitForTimeout(30000);
})