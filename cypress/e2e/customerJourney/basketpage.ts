import {Given, When , Then } from "@badeball/cypress-cucumber-preprocessor"

When(/^I add a backpack$/, () => {
	cy.get('[name="add-to-cart-sauce-labs-backpack"]').click()
});

When(/^I add a bike light$/, () => {
	cy.get('[name="add-to-cart-sauce-labs-bike-light"]').click()
});

When(/^I view my shopping cart$/, () => {
	cy.get('#shopping_cart_container').click()
});

When(/^I click checkout$/, () => {
	cy.get('#checkout').click()
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


