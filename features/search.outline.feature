Feature: Search

  Background: 
    Given I am on the Landing Page

  Scenario Outline: Look for a topic
    Given I am on the search field
    When I look for "<topic>" topic
    Then the topic should be shown in the results

    Examples:
        | topic      |
        | golang     |
        | typescript |
        | dsfdsfd    |
        | testing    |
