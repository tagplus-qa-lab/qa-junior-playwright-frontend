import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { Cart } from "../../utils/selectors";
import { getRandomIndexes } from "../../utils/auxiliaryFunctions";

export class CartPage extends BasePage {
  readonly listItem: Locator;

  constructor(page: Page) {
    super(page);
    this.listItem = page.locator(Cart.inventoryItem);
  }

  async gotoCartPage() {
    await this.goto("/cart.html");
  }

  async checkCartItems(quantity?: number) {
    const itemsCount = await this.listItem.count();

    if (quantity && itemsCount !== quantity) {
      return false;
    }

    if (itemsCount === 0) {
      return false;
    }

    return true;
  }

  async removeCartItem() {
    const itemsCountInitial = await this.listItem.count();

    const [randomIndex] = getRandomIndexes(itemsCountInitial, 1);

    const itemToRemove = this.listItem.nth(randomIndex);
    const removeButton = itemToRemove.locator('button:has-text("Remove")');

    await removeButton.click();

    const itemsCountFinal = await this.listItem.count();

    if (!(itemsCountInitial >= itemsCountFinal)) {
      throw new Error(
        `Erro ao remover item do carrinho: antes ${itemsCountInitial}, depois ${itemsCountFinal}`
      );
    }
  }
}
