import {When , Then } from "@badeball/cypress-cucumber-preprocessor"

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

When(/^I logout$/, () => {
	cy.get('#react-burger-menu-btn').click()
	cy.get('#logout_sidebar_link').click()
});



When(/^I remove all item$/, () => {
	cy.findByText('Remove').click({multiple: true})
});

Then(/^I see an empty basket$/, function () {
    cy.get('.shopping_cart_badge').should('not.exist')
  });
