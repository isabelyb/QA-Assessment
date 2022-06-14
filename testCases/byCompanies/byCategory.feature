Feature: Quantity of companies by category

    Background:
        Given I am logged in
        And I am on the metrics section

    @category
    Scenario: Filtering by category
        Given I am on "Cantidad de Empresas" metrics 
        When I select "Por Categoria"
        Then All Categories should be shown in the graphic