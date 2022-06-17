Feature: Blog

  Background: 
    Given I am on the Landing Page

  Scenario Outline: Look for a post
    Given I am on the blog page
    When I look for "<post>" post
    Then the post should be shown in the results

      Examples:
          | post     |
          | testing  |
          | Rust     |
          | Giraffes |
          | embedded |
