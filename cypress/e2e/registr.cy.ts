const url = `?route=account/register`;
const locatorFirstName = '#input-firstname';
const locatorLastName = '#input-lastname';
const locatorEmail = '#input-email';
const locatorTelephone = '#input-telephone';
const locatorPassword = '#input-password';
const locatorConfirm = '#input-confirm';
const locatorYes = '.custom-radio:nth-child(1) > .custom-control-label';
const locatorNo = '.custom-control:nth-child(2) > .custom-control-label';
const locatorPrivacy = '.custom-checkbox > .custom-control-label';
const locatorContinue = '.btn:nth-child(2)';
const locatorAlert = '#account-register > .alert';

const typeFirstName = 'Mila';
const typeLastName = 'Kamila';
const typeEmail = 'myname1010@gmail.com';
const typeTelephone = '12345543';
const typePassword = '889977';
const warning = " Warning: E-Mail Address is already registered!";

describe('Register Account', () => {
  it('account registration', () => {
cy.visit(url);    
cy.get(locatorFirstName).type(typeFirstName);
cy.get(locatorLastName).type(typeLastName);
cy.get(locatorEmail).type(typeEmail);
cy.get(locatorTelephone).type(typeTelephone);
cy.get(locatorPassword).type(typePassword);
cy.get(locatorConfirm).type(typePassword);
cy.get(locatorYes).click();
cy.get(locatorNo).click();
cy.get(locatorPrivacy).click();
cy.get(locatorContinue).click();
cy.get(locatorAlert).contains(warning)
cy.location('protocol').should('eq', 'https:')
})
})