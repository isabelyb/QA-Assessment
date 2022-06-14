Feature: Quantity of companies by sector

    Background:
        Given I am logged in
        And I am on the metrics section

    @sector
    Scenario: Filtering by sector
        Given I am on "Cantidad de Empresas" metrics 
        When I select "Por sector"
        Then All sectors should be shown in the graphic