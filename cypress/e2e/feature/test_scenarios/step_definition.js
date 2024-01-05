import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { HomePage } from "../../../pages/HomePage.js"
import { CareerPage } from "../../../pages/CareerPage.js"
import { JobOffersPL } from "../../../pages/JobOffersPL.js"

const homePage = new HomePage()
const careerPage = new CareerPage()
const jobOffersPL = new JobOffersPL()

Given('I go to the webpage {string}', function (webpage) {
    homePage.navigate(webpage)
});

When('I go to the {string} card', function (cardName) {
    homePage.navigateCard(cardName)
});

Then('Verify the page CAREER by the title', function () {
    careerPage.verifyPage()
});

When('I click on the button \'CHECK OUT JOB OPENINGS IN POLAND\'', function () {
    careerPage.elements.buttonJobOpenings().invoke('removeAttr', 'target').click() //nieotwieranie w nowej karcie
})

Then('Verify the page Oferty Pracy by the title', function () {
    jobOffersPL.verifyPage()
});

Then('I search job offer {string}', function (value) {
    jobOffersPL.search(value)
});

Then('There should be at least {int} job offer', function (number) {
    jobOffersPL.checkJobOffersNumber(number)
})

