import { expect, test } from "../fixtures";

test.describe("Login E2E", () => {
  test("TC-INVENTORY-001: Adição de Produtos no Carrinho Válida", async ({
    loginPage,
    inventoryPage,
  }) => {
    await loginPage("standard_user", "secret_sauce");

    await test.step("1. Adicionar produtos ao carrinho", async () => {
      await inventoryPage.addRandomProducts("Add to cart", 3);
    });

    await test.step("2. Verificar número no carrinho", async () => {
      await inventoryPage.checkCartQuantity("3");
    });
  });
});
