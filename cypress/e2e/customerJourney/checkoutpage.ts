import { When , Then } from "@badeball/cypress-cucumber-preprocessor"
import "@testing-library/cypress/add-commands";

Then(/^I see confirmation of my order$/, () => {
    cy.findByText(/Thank you for your order!/).should('be.visible')
    cy.findByText(/Your order has been dispatched, and will arrive just as fast as the pony can get there!/).should('be.visible')
});

When(/^I add my checkout information$/, () => {
	cy.get('#first-name').type('Maxwell')
    cy.get('#last-name').type('Brown')
    cy.get('#postal-code').type('SE1 0JD')
});

When(/^I enter my checkout information$/, () => {
	cy.get('#continue').click()
});

When(/^I finish my order$/, () => {
	cy.get('#finish').click()
});
