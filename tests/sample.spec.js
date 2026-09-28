const { expect, test } = require("@playwright/test");
test("1st test", async ({ page }) => {
  //1st test
  expect("arf").toBe("arf");
});
test.skip("2nd test", async ({ page }) => {
  //2nd test
  expect(2).toBe(2.0);
});
test.skip("3rd test", async ({ page }) => {
  //3rd test
  expect(3).toBe(4);
});
// test.only("4th test", async ({ page }) => {
//   //4th test
//   expect("rafid").toContain("raf");
// });
test.skip("5th test", async ({ page }) => {
  //5th test
  expect(true).toBeTruthy();
});
test.skip("6th test", async ({ page }) => {
  //6th test
  expect(false).toBeFalsy();
});
