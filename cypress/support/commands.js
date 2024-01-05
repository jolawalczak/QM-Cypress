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
//
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

// <reference types="cypress-xpath" />

Cypress.Commands.add("navigatePage", (url) => {
    cy.visit(url)
    cy.get('.et_pb_menu__logo > a').invoke('attr', 'href').should('contain', url)
});

Cypress.Commands.add("navigateCard", (cardName) => {
    cy.contains(cardName).click()
    cy.get('h1[class=et_pb_module_header] > span').should("be.visible")
});

Cypress.Commands.add("search", (value) => {
    cy.get('[placeholder=\'Search\']').type(value)
    cy.get('.awsm-job-icon-search').click()
    cy.wait(1000)
});

  