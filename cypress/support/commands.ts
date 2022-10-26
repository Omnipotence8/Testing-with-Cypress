// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('login', (email, password) =>{
    cy.visit(`?route=account/login`);
    cy.get('#input-email').type(email);
    cy.get('#input-password').type(password);
    cy.get('form > .btn').click();
})
// My example for API:
// const URL_API = 'https://theodolite-staging.com.ua'
// Cypress.Commands.add('login', () => {
//     const types = {
//         user: {
//             username: 'mila@gmail.com',
//             password: 'example911',
//         }
//     }
//     const user = types.user
//     cy.request({
//         url: `${URL_API}/api/auth/sing-in`,
//         method: 'POST',
//         failOnStatusCode: false,
//         body: {
//             username: user.username,
//             password: user.password
//         }
//     })
//         .then(({ body }) => {
//             cy.setCookie('access_token_key', body.access_token)
//         })
// })

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })