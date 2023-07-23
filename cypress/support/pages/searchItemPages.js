class searchItemPage {
    visit() {
        cy.visit('/');
    }
    
    enterTheProductInTheInputField() {
        return cy.get('[placeholder="Я шукаю..."]').type('Ремінець BeCover');
    }

    submitButtonField() {
        return cy.get('.button.button_color_green');
    }

    checkThePageForWordContent() {
        return cy.get('.goods-tile.ng-star-inserted').contains('Ремінець');
    }
}
export default new searchItemPage();