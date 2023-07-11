const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/');
  await page.getByText('Entry Ad').click();
  await page.locator("//p[text()='Close']").click(); //Легко, так как был локатор
  await page.waitForTimeout(1000);
});