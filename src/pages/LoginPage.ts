import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  readonly username: Locator;
  readonly password: Locator;
  readonly buttonLogin: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.username = page.locator('[data-test="username"]');
    this.password = page.locator('[data-test="password"]');
    this.buttonLogin = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async gotoLoginPage() {
    await this.goto('/'); 
  }

  async login(email: string, pass: string) {
    await this.username.fill(email);
    await this.password.fill(pass);
    await this.buttonLogin.click();
  }
}
