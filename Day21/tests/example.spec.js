// @ts-check
//THIS IS  FOR PRACTICE WE NEED TO USE OUR WEBSITE JIOMART 
import { test, expect } from '@playwright/test';
import { log } from 'node:console';

test.describe('jio mart test', () => {
  test.use({ storageState: 'auth.json' });
  test.skip('search for fruits', async ({ page }) => {
    await page.goto('https://www.jiomart.com/sections/low-price-mumbai');

    // Click on the search input and type "fruits"
    const input = page.locator('//*[@id="app"]/div/div[3]/header/div[1]/div/div[2]/div[1]/div/div[2]/input');
    await input.click();
    await input.fill('fruits');
    await input.press('Enter');
    await expect(page.getByText('fruits').first()).toBeVisible();
  });

  test('profile', async ({ page }) => {
    await page.goto('https://www.jiomart.com/profile');

    const profileName = page.getByTestId("JDSText-text").nth(0);
    console.log(await profileName.textContent());
    expect(profileName).toHaveText("Keerthana");
  });
});