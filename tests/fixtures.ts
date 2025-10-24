import { test as base } from "@playwright/test";
import { LoginPage } from "../src/pages/LoginPage";

type MyFixtures = {
  navigateLoginPage: LoginPage;
  loggedPage: LoginPage;
};

export const test = base.extend<MyFixtures>({
  navigateLoginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage(); 
    await use(loginPage);
  },

  loggedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login("standard_user", "secret_sauce");
    await use(loginPage);
  },
});

export const expect = test.expect;
