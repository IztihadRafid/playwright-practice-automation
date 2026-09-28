const { expect, test } = require("@playwright/test");
test("Valid Login", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  // await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Username").pressSequentially("Admin");
  await page.locator('input[name="password"]').pressSequentially("admin123");
  await page.locator('button[type="submit"]').click();
  await expect(page).toHaveURL(/dashboard/);

  await page.getByAltText("profile picture").click();
  await page.getByText("Logout").click();
  await page.waitForTimeout(5000);
  await expect(page).toHaveURL(/login/);
});
