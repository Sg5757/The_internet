const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/');
  await page.getByText('Dropdown').click();
  await page.waitForTimeout(2000);
  // await page.locator("//select[@id='dropdown']").click(); // Убрал клик ( оказывается можно и бенз него )
  // await page.waitForTimeout(2000);
  await page.selectOption('#dropdown', { value: "1"}); // ЭВРИКА
  await page.waitForTimeout(2000);
  await page.locator("//select[@id='dropdown']").click();
  await page.waitForTimeout(2000);
  await page.locator('select').selectOption({ label: 'Option 2'}); // РАБОТАЕТ !!!!
  await page.waitForTimeout(2000);
  await page.locator('select').selectOption({ index: 1}) // Выбор по индексу
  await page.waitForTimeout(2000);

});