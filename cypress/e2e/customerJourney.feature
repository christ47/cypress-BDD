
Feature: A Customer Journey
    Scenario: A customer should be able to order an item
        Given I login as a standard user
        When I add a backpack
        When I add a bike light 
        When I view my shopping cart
        When I click checkout
        When I add my checkout information
        When I enter my checkout information
        When I finish my order
        Then I see confirmation of my order



    Scenario: A customer can log in and logout
        Given I login as a standard user
        When I logout
        Then I see the sign in Screen

    Scenario: A customer can remove an item from a basket
        Given I login as a standard user
        When I add a backpack
        When I remove all item
        Then I see an empty basket





