describe('Assertions for Register Account', () => {
    beforeEach(() => {
        cy.visit(`?route=account/register`);;
    });
    it('Implicit Assertions', () => {
        cy.get('.float-right > .btn')
            .should('contain', 'Continue')
            .should('have.value', 'Continue')
            .should('be.visible')
            .should('be.enabled')
        cy.location('protocol').should('eq', 'https:')
    })

    it('Implicit Assertions1', () => {
        cy.get('.float-right > .btn')
            .should('contain', 'Continue')
            .and('have.value', 'Continue')
            .and('be.visible')
            .and('be.enabled')
        cy.get('#column-right')
        .find('div a:last')
        .should('have.class','list-group-item')
        .should('have.text', ' Newsletter')
        .find('i').should('have.class','fa-envelope')
           
    })

    it('Explicit Assertions', () => {
        cy.get('.page-title').should($heading =>{
        expect($heading.text()).to.equal("Register Account")
        expect(true).to.be.true
    })
    })

})