Feature: Pizza Shop Homescreen
  In order to use the Pizza Shop application
  As a user
  I need access to the home screen

  Scenario: The title of the document should be Pizza Shop
    Given I go to the Pizza Shop homepage
    Then the title should be "Pizza Shop"