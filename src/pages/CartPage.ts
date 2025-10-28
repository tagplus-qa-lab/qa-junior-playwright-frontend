import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { Cart, Purchase } from "@utils/selectors";
import { getRandomIndexes } from "@utils/auxiliaryFunctions";

export class CartPage extends BasePage {
  readonly listItem: Locator;
  readonly buttonCheckout: Locator;
  readonly inputName: Locator;
  readonly inputLastName: Locator;
  readonly inputZip: Locator;
  readonly buttonContinue: Locator;
  readonly buttonFinish: Locator;

  constructor(page: Page) {
    super(page);
    this.listItem = page.locator(Cart.inventoryItem);
    this.buttonCheckout = page.locator(Cart.checkout);
    this.inputName = page.locator(Purchase.firstName);
    this.inputLastName = page.locator(Purchase.lastName);
    this.inputZip = page.locator(Purchase.postalCode)
    this.buttonContinue = page.locator(Purchase.continue);
    this.buttonFinish = page.locator(Purchase.finish);
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

  async makePurchase(name: string, lastName: string, zip: string, phraseFinal: string) {
    await this.buttonCheckout.click();

    await this.inputName.fill(name);
    await this.inputLastName.fill(lastName);
    await this.inputZip.fill(zip);

    await this.buttonContinue.click();
    await this.buttonFinish.click();

    await expect(this.page.locator(`text=${phraseFinal}`)).toBeVisible();
  }
}
