Feature: Landing Page

  Scenario: Look for Search field in the Platzi Landing Page
    Given I type the Platzi url
    When I am on the landing page
    Then the Search field should be shown
