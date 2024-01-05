export class JobOffersPL {

    elements = { 
        pageTitle : () => cy.get('h1[class=et_pb_module_header] > span'),
        searchField : () => cy.get('[placeholder=\'Search\']'),
        loupeButton : () => cy.get('.awsm-job-icon-search'),
        jobOffers : () => cy.get('.awsm-job-listing-item.awsm-grid-item'),

    }

    verifyPage() {
        this.elements.pageTitle().should('be.visible')
        this.elements.pageTitle().should('contain', 'Oferty Pracy')
    }

    search(value) {
        this.elements.searchField().should('be.visible').type(value)
        this.elements.loupeButton().click()
        cy.wait(1000)
    }

    checkJobOffersNumber(number) {
        this.elements.jobOffers().should('have.length.above', number-1)
        this.elements.jobOffers().its('length').then((len) => {
            cy.log('The number of found job offers is ' + len)
          })
    }


}