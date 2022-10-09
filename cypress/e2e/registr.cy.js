describe('Register Account', () => {
  it('clicking "type" navigates to a new url', () => {
cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');    
cy.get('#input-firstname').type('Mila');
cy.get('#input-lastname').type('Kamila');
cy.get('#input-email').type('myname1010@gmail.com');
cy.get('#input-telephone').type('12345543');
cy.get('#input-password').type('889977');
cy.get('#input-confirm').type('889977');
cy.get('.custom-radio:nth-child(1) > .custom-control-label').click();
cy.get('.custom-control:nth-child(2) > .custom-control-label').click();
cy.get('.custom-checkbox > .custom-control-label').click();
cy.get('.btn:nth-child(2)').click();
cy.url().should('contains', 'https://ecommerce-playground.lambdatest.io/index.php');
cy.get('#account-register > .alert').contains(" Warning: E-Mail Address is already registered!")
})
})
