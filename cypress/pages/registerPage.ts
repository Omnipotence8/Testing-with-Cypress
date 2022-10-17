
export class RegisterPage {
 
    url = '?route=account/register';
    locatorFirstName = '#input-firstname';
    locatorLastName = '#input-lastname';
    locatorEmail = '#input-email';
    locatorTelephone = '#input-telephone';
    locatorPassword = '#input-password';
    locatorConfirm = '#input-confirm';
    locatorYes = '.custom-radio:nth-child(1) > .custom-control-label';
    locatorNo = '.custom-control:nth-child(2) > .custom-control-label';
    locatorPrivacy = '.custom-checkbox > .custom-control-label';
    locatorContinue = '.btn:nth-child(2)';
    locatorAlert = '#account-register > .alert';

    typeFirstName = 'Mila';
    typeLastName = 'Kamila';
    typeEmail = 'myname1010@gmail.com';
    typeTelephone = '12345543';
    typePassword = '889977';
    warning = " Warning: E-Mail Address is already registered!";

    navigate(){
        cy.visit(this.url);
    }

    enterFirstName(typeFirstName: string) {
        cy.get(this.locatorFirstName).type(typeFirstName);
    }

    enterLastName(typeLastName: string) {
        cy.get(this.locatorLastName).type(typeLastName);
    }
    enterEmail(typeEmail: string) {
        cy.get(this.locatorEmail).type(typeEmail);
    }

    enterTelephone(typeTelephone: string) {
        cy.get(this.locatorTelephone).type(typeTelephone);
    }

    enterPassword(typePassword: string) {
        cy.get(this.locatorPassword).type(typePassword);
    }

    enterConfirmPassword(typePassword: string) {
        cy.get(this.locatorConfirm).type(typePassword);
    }

    isSubscribeCheckedY() {
        cy.get(this.locatorYes).click();
    }

    isSubscribeCheckedN() {
        cy.get(this.locatorNo).click();
    }

    clickPrivacy() {
        cy.get(this.locatorPrivacy).click();
    }

    clickContinueToRegister() {
        cy.get(this.locatorContinue).click();

    }

    isTextDangerChecked() {
        cy.get(this.locatorAlert).contains(this.warning);

    }

    isProtocolChecked() {
        cy.location('protocol').should('eq', 'https:');
    }
}
