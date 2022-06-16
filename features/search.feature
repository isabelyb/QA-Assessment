Feature: Search

  Scenario: Look for a course
    Given I type the Platzi urll
    When I look for a course
    Then the course should be shown in the results