Feature: Blog

  Scenario: Look for a post
    Given I type the Platzi page
    When I look for a post
    Then the post should be shown in the results