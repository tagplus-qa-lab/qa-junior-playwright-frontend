import { test as base } from "@playwright/test";
import { LoginPage } from "../src/pages/LoginPage";

type MyFixtures = {
  loginPage: (username: string, password: string) => Promise<LoginPage>;
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
});

export const expect = test.expect;
