export class LoginPage {
 
    url = '?route=account/login';
    locatorEmail = '#input-email';
    locatorPassword = '#input-password';
    locatorLogin = 'form > .btn';

    
    typeEmail = 'myname1010@gmail.com';
    typePassword = '889977';
    warning = " Warning: E-Mail Address is already registered!";

    navigate(){
        cy.visit(this.url);
    }

    enterEmail(typeEmail: string) {
        cy.get(this.locatorEmail).type(typeEmail);
    }

    enterPassword(typePassword: string) {
        cy.get(this.locatorPassword).type(typePassword);
    }

    clickLogin() {
        cy.get(this.locatorLogin).click();

    }

    isProtocolChecked() {
        cy.location('protocol').should('eq', 'https:');
    }
}
