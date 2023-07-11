const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/');
  await page.getByText('JavaScript Alerts').click();
  await page.waitForTimeout(2000);
  await page.getByText('Click for JS Alert').click();
  await page.type(alert).
//   await page.locator('button[onclick *= jsAlert]').click(); //Тэг - button, атрибут - onclick, значение которое СОДЕРЖИТ(*=) jsAlert крутой метод со звездочкой
  await page.waitForTimeout(2000);
//   await page.keyboard.press('Enter');
  await page.waitForTimeout(2000);

});