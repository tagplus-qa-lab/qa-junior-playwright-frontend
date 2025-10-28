import { expect, test } from "@tests/fixtures";

test.describe("Login E2E", () => {
  test("TC-LOGIN-001: Login válido", async ({ loginPage }) => {
    const login = await loginPage("standard_user", "secret_sauce");

    await test.step("1. Validar o login", async () => {
      await expect(login.page).toHaveURL(
        "https://www.saucedemo.com/inventory.html"
      );
    });
  });

  test("TC-LOGIN-002: Login inválido", async ({ loginPage }) => {
    const login = await loginPage("standard_user", "password_wrong");

    await test.step("2. Validar que mensagem de erro é exibida", async () => {
      await expect(login.errorMessage).toBeVisible();
      await expect(login.errorMessage).toHaveText(
        "Epic sadface: Username and password do not match any user in this service"
      );
    });
  });
});
