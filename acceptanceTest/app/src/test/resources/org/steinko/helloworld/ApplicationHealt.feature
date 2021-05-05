Feature: Application Health
  Scenario: Check Application Health
    Given Application is started
    When Checking Application Health
    Then status "UP" is displayed
   