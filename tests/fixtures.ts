import { test as base } from "@playwright/test";
import { LoginPage } from "../src/pages/LoginPage";
import { InventoryPage } from "../src/pages/InventoryPage";

type MyFixtures = {
  loginPage: (username: string, password: string) => Promise<LoginPage>;
  inventoryPage: InventoryPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(async (username: string, password: string) => {
      const loginPage = new LoginPage(page);
      await loginPage.gotoLoginPage();
      await loginPage.login(username, password);
      return loginPage;
    });
  },

  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage);
  },
});

export const expect = test.expect;
