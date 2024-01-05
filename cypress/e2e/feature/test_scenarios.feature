Feature: Smoke Tests

    Behaviour Driven Development lesson

    Scenario: Successfully find job offer
    Given I go to the webpage 'https://qualityminds.com/'
    When I go to the 'CAREER' card
    Then Verify the page CAREER by the title
    When I click on the button 'CHECK OUT JOB OPENINGS IN POLAND'
    Then Verify the page Oferty Pracy by the title
    When I search job offer 'Tester'
    Then There should be at least 1 job offer