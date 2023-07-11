const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/');
  await page.getByText('Forgot Password').click();
  await page.waitForTimeout(1000);
  await page.locator("#email").fill("mo@email.com");
  await page.waitForTimeout(1000);
  await page.locator("css= button.radius").click(); //button - тэг, radius - класс
  await page.waitForTimeout(1000);

});