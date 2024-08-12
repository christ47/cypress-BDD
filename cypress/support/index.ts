import '@testing-library/cypress'
// <reference types="@testing-library/cypress" />

const assertOrderConfirmation = ()=>{
    cy.findByText(/Thank you for your order!/).should('be.visible')
    cy.findByText(/Your order has been dispatched, and will arrive just as fast as the pony can get there!/).should('be.visible')
}

Cypress.Commands.add('assertOrderConfirmation', assertOrderConfirmation)

declare global {
    namespace Cypress {
        interface Chainable {
        assertOrderConfirmation(): void;
    }
  }
}

export {};