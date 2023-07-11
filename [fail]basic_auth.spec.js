const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('https://dev.toqsan.com/');
  await page.getByText('Basic Auth').click();
  await page.waitForTimeout(2000);
});