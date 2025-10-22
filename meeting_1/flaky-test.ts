import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  let randomValue = Math.random();
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  expect(randomValue).toBeGreaterThan(0.75)
});