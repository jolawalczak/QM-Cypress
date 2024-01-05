export class CareerPage {

    elements = {  
        pageTitle : () => cy.get('h1[class=et_pb_module_header] > span'),
        buttonJobOpenings : () => cy.contains('CHECK OUT JOB OPENINGS IN POLAND')
    }

    verifyPage() {
        this.elements.pageTitle().should('be.visible')
        this.elements.pageTitle().should('contain', 'Career')
    }

}