import {Given, When , Then } from "@badeball/cypress-cucumber-preprocessor"
Given("I login as a standard user", ()=>{
    cy.visit("/")
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
})