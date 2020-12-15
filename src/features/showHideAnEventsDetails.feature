
Feature: SHOW/HIDE AN EVENT'S DETAILS
    Scenario: An event element is collapsed by default
        Given user has not selected to show the details
        When the user is able to see a listed event
        Then the details are all hidden.
    Scenario: User can expand an event to see its details
        Given the user wants to see the details of an event
        When the user clicks on the event details
        Then the user will see the details of the event
    Scenario: User can collapse an event to hide its details
        Given the user can see the events
        And the user can read the event details
        When the user clicks event
        Then the details are hidden from the user
