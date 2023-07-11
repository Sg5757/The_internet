const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/');
  await page.getByText('Dynamic Loading').click();
  await page.waitForTimeout(1000);
  await page.getByText('Example 1: Element on page that is hidden').click(); //Кликаем по тексту
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Start'}).click();  //Кликаем по кнопке
  await page.waitForTimeout(1000);
  await page.getByText('Hello World!').waitFor(); //Ожидаем элемент
  console.log('yeah baby')
});