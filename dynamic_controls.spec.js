const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/');
  await page.getByText('Dynamic Controls').click();
  await page.waitForTimeout(1000);
  await page.getByRole('checkbox', { label: "blah" }).click(); // Ищем чекбокс по типу, а там был атрибут лабел = blah /взял его 
  await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "Remove" }).click();
  await page.getByText("It's gone!").waitFor();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Enable'}).click();
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="loading"]').waitFor();
  await page.locator("#message").waitFor();
  await page.waitForTimeout(1000);

});