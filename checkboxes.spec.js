const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/');
  await page.getByText('Checkboxes').click(); //Находим локатор по тексту и кликаем
  await page.waitForTimeout(1000);
  await expect(page.getByText('Checkboxes')).toBeVisible(); //Проверяем, что есть такой текст на странице
  await page.waitForTimeout(1000);
  await page.getByRole('checkbox').first().click(); //Кликаем по первому чекбоксу
  await page.waitForTimeout(1000);
  await page.getByRole('checkbox').last().click();
  await page.waitForTimeout(1000);
  await expect(page.getByText('Elemental Selenium')).toBeVisible();
  await console.log(page.getByText('Elemental Selenium')); //Вывел в консоль, пока так =)
});