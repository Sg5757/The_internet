const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

test('upload Files', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/');
  await page.getByText('File Upload').click();
  await page.waitForTimeout(1000);
  await page.setInputFiles('input[type="file"]', 'Image.png');
  await page.waitForTimeout(1000);
  await page.click("#file-submit"); //Шикарный метод взаимодействия с "id" элементом 
  await page.waitForTimeout(1000);
//   await page.keyboard.down('Win+ArrowLeft'); // Надо выяснить как назвается Win в фреймворке
  await page.keyboard.press('Meta+A');
  await page.waitForTimeout(1000);
  await page.goBack(); //Прикольный метод возвращения на предыдущую страницу
  await page.waitForTimeout(1000);
});
