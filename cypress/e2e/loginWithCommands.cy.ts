let url_account: string = 'https://ecommerce-playground.lambdatest.io/index.php?route=account/account'

const locatEmail = '#input-email';
const locatPassword = '#input-password';
const email = 'myname1010@gmail.com';
const password = '889977';

describe('Login page with commands', () => {

    it('Success login without Custom Command', () => {
        cy.visit(`?route=account/login`);
        cy.get(locatEmail).type(email);
        cy.get(locatPassword).type(password);
        cy.get('form > .btn').click();
        cy.url().should('eq', url_account)
    })
    
    it('Success login with Custom Command', () => {
        cy.login(email, password)
        cy.url().should('eq', url_account)
    })

})