import { HomePage } from "../pages/HomePage";
import { CareerPage } from "../pages/CareerPage";
import { JobOffersPL } from "../pages/JobOffersPL";

const HomePage = new HomePage();
const CareerPage = new CareerPage();
const JobOffersPL = new JobOffersPL();

describe('Smoke Tests', () => {
  
  beforeEach ( () => {
    HomePage.navigate()
  })

  it('Successfully find job offer', () => {
    cy.visit('https://qualityminds.com/')
    cy.get('.et_pb_menu__logo > a').invoke('attr', 'href').should('contain', 'https://qualityminds.com/')
    cy.contains('CAREER').click()
    cy.get('h1[class=et_pb_module_header] > span').should("be.visible")
    cy.contains('CHECK OUT JOB OPENINGS IN POLAND').invoke('removeAttr', 'target').click() //nieotwieranie w nowej karcie
    cy.get('h1[class=et_pb_module_header] > span').should('have.text', "Oferty Pracy")
    cy.get('[placeholder=\'Search\']').type(value)
    cy.get('.awsm-job-icon-search').click()
    cy.wait(1000)
    cy.get('.awsm-job-listing-item.awsm-grid-item').should('have.length.above', 0)
    cy.get('.awsm-job-listing-item.awsm-grid-item').its('length').then((len) => {
      cy.log('The number of found job offers is ' + len)
    })
  })

  it('Successfully find job offer with Commands', () => {
    cy.navigatePage('https://qualityminds.com/')
    cy.navigateCard('CAREER')
    cy.contains('CHECK OUT JOB OPENINGS IN POLAND').invoke('removeAttr', 'target').click() //nieotwieranie w nowej karcie
    cy.get('h1[class=et_pb_module_header] > span').should('have.text', "Oferty Pracy")
    cy.search('Tester')
    cy.get('.awsm-job-listing-item.awsm-grid-item').should('have.length.above', 0)
    cy.get('.awsm-job-listing-item.awsm-grid-item').its('length').then((len) => {
      cy.log('The number of found job offers is ' + len)
    })
  })

  it('Successfully find job offer with POM', () => {
    HomePage.navigate('https://qualityminds.com/')
    HomePage.navigateCard('CAREER')
    CareerPage.verifyPage()
    CareerPage.elements.buttonJobOpenings().invoke('removeAttr', 'target').click() //nieotwieranie w nowej karcie
    JobOffersPL.verifyPage()
    JobOffersPL.search('Tester')
    JobOffersPL.checkJobOffersNumber(1)
  })


  describe('httpbin tests', () => {
    const request = {
      url: 'https://httpbin.org/',
      method: 'GET'
    }
  
    it('Test API', () => {
      cy.request(request).then(response => {
        const status = response.status
        assert.equal(200, status)
      })
    })
  })
  


})