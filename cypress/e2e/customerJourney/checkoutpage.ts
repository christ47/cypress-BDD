import {Given, When , Then } from "@badeball/cypress-cucumber-preprocessor"
import "@testing-library/cypress/add-commands";


Then(/^I see confirmation of my order$/, () => {
	// cy.assertOrderConfirmation()
    cy.findByText(/Thank you for your order!/).should('be.visible')
    cy.findByText(/Your order has been dispatched, and will arrive just as fast as the pony can get there!/).should('be.visible')


});