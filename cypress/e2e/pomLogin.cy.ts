import { LoginPage } from "../pages/loginPage";

const loginPage = new LoginPage()

beforeEach(() => {
loginPage.navigate();
});

it('account registration', () => {   
loginPage.enterEmail(loginPage.typeEmail);
loginPage.enterPassword(loginPage.typePassword);
loginPage.clickLogin();
loginPage.isProtocolChecked();
})