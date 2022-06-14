Feature: Quantity of companies

    Background:
        Given I am logged in
        And I am on the metrics section

    Scenario Outline: Filtering by "<scenario>"
    Given I am on "Cantidad de Empresas" metrics
    When I select "<filter>"
    Then All results should be shown in the graphic

    Examples:
        | scenario   | filter           |
        | sector     | Por Sector       |
        | department | Por departamento |
        | category   | Por categoria    |