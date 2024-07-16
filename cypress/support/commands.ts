import '@testing-library/cypress/add-commands'
// <reference types="@testing-library/cypress" />

Cypress.Commands.add('assertOrderConfirmation', ()=>{
    cy.findByText(/Thank you for your order!/).should('be.visible')
    cy.findByText(/Your order has been dispatched, and will arrive just as fast as the pony can get there!/).should('be.visible')
})


// declare namespace Cypress{
//     interface Chainable{
//         assertOrderConfirmation():Chainable<void>
//     }
// }