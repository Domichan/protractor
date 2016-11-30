Feature: Book searching

  Scenario: Search for the book
    Given I go to book page
    And There is the following book on list:
      |authName|authSurname|        title      | type  | isbn |
      |  Jane  |   Austen  |Pride and Predjuice|romance|random|
    When I delete this book
    Then I should see searched book on list:
      |authName|authSurname|        title      | type  | isbn |
      |  Jane  |   Austen  |Pride and Predjuice|romance|random|