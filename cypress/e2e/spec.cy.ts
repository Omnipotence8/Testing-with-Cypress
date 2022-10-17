///<reference types="cypress"/>

describe("home page", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io")
  })
})
describe('Containe', () => {
  it('finds the content "type"', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type')
  })
})
describe('Click', () => {
  it('clicks the link "type"', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()
  })
})
describe('Includes', () => {
  it('clicking "type" navigates to a new url', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions')
  })
})
describe('Expect true', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})
describe('Expect false', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(false)
  })
})