import { LoginPage } from "../pages/loginPage";

const loginPage = new LoginPage()

it('account registration', () => {
loginPage.navigate();    
loginPage.enterEmail(loginPage.typeEmail);
loginPage.enterPassword(loginPage.typePassword);
loginPage.clickLogin();
loginPage.isProtocolChecked();
})