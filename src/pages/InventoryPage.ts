import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { getRandomIndexes } from "../../utils/auxiliaryFunctions";
import { Cart } from "../../utils/selectors";

export class InventoryPage extends BasePage {
  readonly cartBadge: Locator;

  constructor(page: Page) {
    super(page);
    this.cartBadge = page.locator(Cart.shoppingCartBadge);
  }

  async addRandomProducts(buttonAddText: string, quantity = 3) {
    const addToCartButtons = this.page.locator(
      `button:has-text("${buttonAddText}")`
    );
    const count = await addToCartButtons.count();

    const clickCount = Math.min(quantity, count);

    const randomIndexes = getRandomIndexes(count, clickCount);

    for (const index of randomIndexes) {
      await addToCartButtons.nth(index).click();
    }
  }

  async checkCartQuantity(quantity: string) {
    await expect(this.cartBadge).toHaveText(quantity);
  }
}
