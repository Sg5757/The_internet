const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/');
  await page.getByText('Drag and Drop').click();
  await page.waitForTimeout(1000);
  await page.locator("#column-a").dragTo(page.locator("#column-b")); //По ID перевел
  await page.waitForTimeout(2000);
});


