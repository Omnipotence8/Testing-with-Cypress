///<reference types="cypress"/>

describe('Positive REST API TEST', function(){
    it('API Ability Headers Validation', function(){
        cy.request('https://pokeapi.co/api/v2/ability/battle-armor').as('ability')
        cy.get('@ability').its('headers').its('cache-control')
        .should("include", 'public, max-age=86400, s-maxage=86400')
    })

    it('API Pokemon Headers Validation', function(){
        cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
        .should("include", 'application/json; charset=utf-8')
    })

    it('API Pokemon Status Validation', function(){
        cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon')
        cy.get('@pokemon').its('status')
        .should("equal", 200)
    })

    it('API Pokemon Response Validation', function(){
        cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon')
        cy.get('@pokemon').its('body')
        .should("include", {name:"pikachu"})
    })
})

describe('Negative REST API TEST', function(){
    it('API Pokemon Status Validation', function(){
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/1000',
            failOnStatusCode: false,
        }).as('pokemon')
        cy.get('@pokemon').its('status')
        .should("equal", 404)
    })

    
})