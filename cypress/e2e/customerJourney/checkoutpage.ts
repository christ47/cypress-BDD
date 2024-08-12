import { When , Then } from "@badeball/cypress-cucumber-preprocessor"
import "@testing-library/cypress/add-commands";


Then(/^I see confirmation of my order$/, () => {
    cy.assertOrderConfirmation()
});

When(/^I add my checkout information$/, () => {
    
    cy.fixture('user').then((user)=>{
        cy.get('#first-name').type(user.firstName)
        cy.get('#last-name').type(user.lastName)
        cy.get('#postal-code').type(user.postCode)
    })
});

When(/^I enter my checkout information$/, () => {
	cy.get('#continue').click()
});

When(/^I finish my order$/, () => {
	cy.get('#finish').click()
});
