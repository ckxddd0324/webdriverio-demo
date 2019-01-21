Feature: Visit daily deal page
    As a customer
    I go to the ebay homepage 
    click to view daily deal page on the top nav

    Background:
        Given User opens the site

    Scenario: Click the daily deal link on top nav
        Then User expected the carousel to show up on home page
        When Click the daily deal link
        Then User expected to see "/deals" on the current url pathname
        And User expected to see all the types of category
        When Mouse hovers to "Featured" category
        Then User expected to see the hover menu expand 
