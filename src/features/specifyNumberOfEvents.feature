Feature: SPECIFY NUMBER OF EVENTS
    Scenario: When user hasn’t specified a number, 32 is the default number
        Given app is loaded
        When the user has not specified number of events to be shown
        Then the user should see 32 events displayed
    Scenario: User can change the number of events they want to see
        Given app is loaded
        When the user can specify the number of events to see
        Then the user should see the number of events specified
