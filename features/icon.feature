Feature: Click home icon on page
    As a customer
    I go to the ebay homepage 
    click to view daily deal page on the top nav

    Background:
        Given User opens the site
    
    Scenario: Click the daily deal link on top nav
        Then User expected the carousel to show up on home page
        When Click the daily deal link
        Then User expected to see "/deals" on the current url pathname
        When Click the home icon
        Then User expected the carousel to show up on home page

        