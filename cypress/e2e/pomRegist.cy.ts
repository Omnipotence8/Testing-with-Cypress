import { RegisterPage } from "../pages/registerPage";

const registerPage = new RegisterPage()

it('account registration', () => {
registerPage.navigate();    
registerPage.enterFirstName(registerPage.typeFirstName);
registerPage.enterLastName(registerPage.typeLastName);
registerPage.enterEmail(registerPage.typeEmail);
registerPage.enterTelephone(registerPage.typeTelephone);
registerPage.enterPassword(registerPage.typePassword);
registerPage.enterConfirmPassword(registerPage.typePassword);
registerPage.isSubscribeCheckedY();
registerPage.isSubscribeCheckedN();
registerPage.clickPrivacy();
registerPage.clickContinueToRegister();
registerPage.isTextDangerChecked();
registerPage.isProtocolChecked();
})