Feature: Pizza Shop Homescreen
  In order to use the Pizza Shop application
  As a user
  I need access to the home screen

  Scenario: The title of the document should be Pizza Shop
    Given I go to the Pizza Shop homepage
    Then the title should be "Pizza Shop"

  Scenario: The navigation links should be in the nav bar
    Given I go to the Pizza Shop homepage
    Then I should see the following links in the navigation bar:
      | Home        |
      | Ingredients |
      | Menu Items  |
      | Deals       |