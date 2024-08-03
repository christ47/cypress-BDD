import { When , Then } from "@badeball/cypress-cucumber-preprocessor"
import "@testing-library/cypress/add-commands";


Then(/^I see confirmation of my order$/, () => {
    cy.findByText(/Thank you for your order!/).should('be.visible')
    cy.findByText(/Your order has been dispatched, and will arrive just as fast as the pony can get there!/).should('be.visible')
});

When(/^I add my checkout information$/, () => {
    
    cy.fixture('user').then((user)=>{
        cy.get('#first-name').type(user.firstName)
        cy.get('#last-name').type(user.lastName)
        cy.get('#postal-code').type(user.postCode)
    })
    cy.screenshot()

});

When(/^I enter my checkout information$/, () => {
	cy.get('#continue').click()
});

When(/^I finish my order$/, () => {
	cy.get('#finish').click()
});
