const { expect, test } = require("@playwright/test");
test("Application launch", async ({ page }) => {
  await page.goto("https://www.google.com");
  const url = page.url();
  console.log("title isurl ", url);

  const title = await page.title();
  console.log("title is ", title);
  await expect(page).toHaveTitle("Google");
});
