describe('Register Account', () => {
  it('account registration', () => {
cy.visit(Cypress.env('url'));    
cy.get(Cypress.env('locatorFirstName')).type(Cypress.env('typeFirstName'));
cy.get(Cypress.env('locatorLastName')).type(Cypress.env('typeLastName'));
cy.get(Cypress.env('locatorEmail')).type(Cypress.env('typeEmail'));
cy.get(Cypress.env('locatorTelephone')).type(Cypress.env('typeTelephone'));
cy.get(Cypress.env('locatorPassword')).type(Cypress.env('typePassword'));
cy.get(Cypress.env('locatorConfirm')).type(Cypress.env('typePassword'));
cy.get(Cypress.env('locatorYes')).click();
cy.get(Cypress.env('locatorNo')).click();
cy.get(Cypress.env('locatorPrivacy')).click();
cy.get(Cypress.env('locatorContinue')).click();
cy.get(Cypress.env('locatorAlert')).contains(Cypress.env('warning'))
cy.location('protocol').should('eq', 'https:')
})
})