Feature: Quantity of companies by department

    Background:
        Given I am logged in
        And I am on the metrics section

    @department
    Scenario: Filtering by department
        Given I am on "Cantidad de Empresas" metrics 
        When I select "Por departamento"
        Then All departments should be shown in the graphic