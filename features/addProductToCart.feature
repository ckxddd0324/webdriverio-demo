Feature: Add product to cart
    As a customer
    I go to the ebay homepage 
    Enter text to the seach text field and search for an item
    Then add a random item to the my cart

    Background:
        Given User opens the site

    Scenario Outline: Entering "<Search text>" to the search text field
        Then User expected the carousel to show up on home page
        When Enter the search text "<Search text>" to the search input field
        Then User expected the search text "<Search text>" show on the search text field
        When Click the submit search button
        Then User expected the search text "<Search text>" show on the search text field
        #check if the search string persists in the search text field
        And User expected to see all 4 sale types
        And User expected to see "All Listings" sale type is selected
        When Update the view if the view is not list-view
        And Click the 1st item from the result page
        Then User expected item detail page
        When Add item to the cart
        Then User expected success added item modal
        When Click go to cart button
        Then User expected to be on shopping cart page
        And User expected there is an item added to the cart

    Examples: 
        | Search text   | 
        | LEGO Star Wars Set Death Star Troopers 75034 |

        