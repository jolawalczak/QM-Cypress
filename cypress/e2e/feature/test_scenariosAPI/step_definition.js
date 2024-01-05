import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { APIRequests } from "../../../api/APIRequests";

const apiRequests = new APIRequests()

Given('I go to the webpage {string} by API', function (url) {
    apiRequests.basicRequest(url)
});

Given('I send POST request to API {string}', function (url) {
    apiRequests.postRequest(url)
});

Given('I send GET request to API {string}', function (url) {
    apiRequests.getRequest(url)
});

Then('I verify response code {int}', function (value) {
    apiRequests.verifyResponseCode(value)
});

Then('I verify response time {int}', function (value) {
    apiRequests.verifyResponseTime(value)
});