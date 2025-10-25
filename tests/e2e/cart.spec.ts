import { test } from "../fixtures";

test.describe("Carrinho E2E", () => {
  test("TC-CART-001: Carrinho Válido", async ({
    loginPage,
    inventoryPage,
    cartPage,
  }) => {
    await loginPage("standard_user", "secret_sauce");
    await cartPage.gotoCartPage();

    await test.step("1. Verificar se tem itens no carrinho. Se não houver, irá adicionar", async () => {
      const haveItems = await cartPage.checkCartItems();

      if (!haveItems) {
        await inventoryPage.gotoInventoryPage();

        await inventoryPage.addRandomProducts("Add to cart", 3);

        await cartPage.gotoCartPage();
      }
    });

    await test.step("2. Deletar 1 item do carrinho", async () => {
      await cartPage.removeCartItem();
    });
  });

  test("TC-CART-002: Compra Válida", async ({
    loginPage,
    inventoryPage,
    cartPage,
  }) => {
    await loginPage("standard_user", "secret_sauce");
    await cartPage.gotoCartPage();

    await test.step("1. Verificar se tem itens no carrinho. Se não houver, irá adicionar", async () => {
      const haveItems = await cartPage.checkCartItems();

      if (!haveItems) {
        await inventoryPage.gotoInventoryPage();

        await inventoryPage.addRandomProducts("Add to cart", 3);

        await cartPage.gotoCartPage();
      }
    });

    await test.step("2. Finalizar uma Compra", async () => {
      await cartPage.makePurchase(
        "João",
        "Souze",
        "88312-000",
        "Thank you for your order!"
      );
    });
  });
});
