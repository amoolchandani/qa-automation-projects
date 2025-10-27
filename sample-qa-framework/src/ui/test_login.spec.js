// src/tests/ui/test_login.spec.js
import { test, expect } from '@playwright/test';

test.describe('UI Login Flow', () => {
  test('should login successfully and open dashboard', async ({ page }) => {
    console.log('Launching login test...');

    await page.goto('https://example.com/login');

    await page.fill('input[name="username"]', 'test_user');
    await page.fill('input[name="password"]', 'test_pass');
    await page.click('button[type="submit"]');

    await expect(page.locator('h1')).toContainText('Dashboard');

    console.log('Login test passed successfully.');
  });
});
