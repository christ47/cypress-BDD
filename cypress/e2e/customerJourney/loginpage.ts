import {Given, When , Then } from "@badeball/cypress-cucumber-preprocessor"
Given("I login as a standard user", ()=>{
    cy.visit("/")
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
})




Then(/^I see the sign in Screen$/, () => {
    cy.get('#user-name').should('be.visible')
    cy.get('#password').should('be.visible')
    cy.get('#login-button').should('be.visible')
});
