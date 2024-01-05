@api
Feature: API Tests

    Scenario: Basic Request
    Given I go to the webpage 'https://httpbin.org/' by API

    Scenario: Basic Request Failed
    Given I go to the webpage 'https://httpbin.org/non-existing-url' by API

    Scenario: HTTP POST Request
    Given I send POST request to API 'https://httpbin.org/'

    Scenario: HTTP GET Request
    Given I send GET request to API 'https://httpbin.org/'

    Scenario: HTTP GET Request
    Given I send GET request to API 'https://httpbin.org/'
    Then I verify response code 200
    And I verify response time 1000
    