Feature: Verify backend is running
  In order to ensure that the backend is running
  As a developer
  I need to know that the backends helloworld API is returning hello world

  Scenario: Verify that the system is up and running
    When the URL "http://35.228.16.102/helloworld"  has been entered
    Then "Hello World" is displayed
    And the respons code should be 200