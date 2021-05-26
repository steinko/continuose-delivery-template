Feature: Verify system up and running
  In order to ensure that the system is up an running
  As a user of the system
  I need to display hello world

  Scenario: Verify that the system is up and running
    When the URL "http://35.228.16.102/helloworld"  has been entered
    Then "Hello World" is displayed
    And the respons code should be 200