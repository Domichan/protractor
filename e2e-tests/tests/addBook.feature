Feature: Book adding

  Scenario: Add new book
    Given I go to book page
    When I add new book
      | authName |authSurname|        title       |type | ISBN |
      |Lucy Mount|Montgomery |Anne of Green Gables|comic|random|
    And I should see new book data
      | authName |authSurname|        title       |type | ISBN |
      |Lucy Mount|Montgomery |Anne of Green Gables|comic|random|
    And I should see new book in table
      | authName |authSurname|        title       |type | ISBN |
      |Lucy Mount|Montgomery |Anne of Green Gables|comic|random|