 @smoke 
 
Feature: Example feature    

    Scenario: Hover
    Given I am on Onliner homepage
    When I hover over to 'Дома и Квартиры' menu
    Then the dropdown list expands

    Scenario: Radiobutton
    Given I am on Skyscanner homepage
    When I click 'One way' radiobutton
    Then the radiobutton is selected
    
    Scenario: Checkbox
    Given I am on Skyscanner homepage
    When I click to 'Non-stop flights only' checkbox
    Then checkbox is checked
         
    Scenario: Dropdown list
    Given I am on Ozon homepage
    When I click to 'Везде' in a search bar
    Then the categories dropdown list expands 