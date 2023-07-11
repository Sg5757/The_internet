// @ts-check
const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/add_remove_elements/');
  await page.waitForTimeout(3000);
  await page.locator("//button[text()='Add Element']").dblclick(); //Находим локатор и делаем даблклик по элементу
  await page.waitForTimeout(3000);
  await page.locator("//button[@class='added-manually'][1]").click(); // C помощью среза указываем первый элемент
  await page.waitForTimeout(2000);
  await page.locator("//button[@class='added-manually'][1]").click(); // C помощью среза указываем первый элемент
  await page.waitForTimeout(3000);
  await page.getByText('Add Element').click();
  await page.waitForTimeout(3000);
});