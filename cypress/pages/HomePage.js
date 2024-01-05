export class HomePage {

    elements = { 
        logo : () => cy.get('.et_pb_menu__logo > a'),      
    }

    navigate(url) {
        cy.visit(url)
        this.elements.logo().invoke('attr', 'href').should('contain', url)
    }

    navigateCard(cardName) {
        cy.contains(cardName).click()
    }

}