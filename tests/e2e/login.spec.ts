import { expect, test } from "../fixtures";

test.describe("Login E2E", () => {
  test("TC-LOGIN-001: Usuário logado com sucesso", async ({ loggedPage }) => {
    await test.step("1. Validar que login feito", async () => {
      await expect(loggedPage.page).toHaveURL(
        "https://www.saucedemo.com/inventory.html"
      );
    });
  });
});
