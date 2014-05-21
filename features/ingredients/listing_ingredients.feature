Feature: Listing Ingredients
  In order to manage my menu and accounting
  As a user of Pizza Shop
  I need to be able to list ingredients

  Scenario: All ingredients should be listed by default
    When I go to the Ingredients page
    Then I should see the following ingredients:
      | Thin Crust        |
      | Hand Tossed Crust |
      | Pepperoni         |
      | Jalapenos         |
      | Chicken Wings     |
      | Breadsticks       |

  # Scenario: Selecting an ingredient type from the ingredient type filter should hide ingredients of other types