import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { LoginSelectors } from "@utils/selectors";
export class LoginPage extends BasePage {
  readonly username: Locator;
  readonly password: Locator;
  readonly buttonLogin: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.username = page.locator(LoginSelectors.usernameInput);
    this.password = page.locator(LoginSelectors.passwordInput);
    this.buttonLogin = page.locator(LoginSelectors.loginButton);
    this.errorMessage = page.locator(LoginSelectors.errorMessage);
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
