Feature: Go to a empty cart
    As a customer
    I go to the ebay homepage 
    go to my cart page (empty state)

    Background:
        Given User opens the site

    Scenario: Entering "<Search text>" to the search text field
        Then User expected the carousel to show up on home page
        When Click cart button on top nav
        Then User expected to be on shopping cart page
        And User expected to see two CTA button
        And User expected the empty state message on cart page


        