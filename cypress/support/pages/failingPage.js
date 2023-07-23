class failingPage {
    visit() {
        cy.visit('/');
    }

    getButtonCatalog() {
        return cy.get('#fat-menu');
    }

    selectСategoryNotebookAndComputers() {
        return cy.get('[href^="https://rozetka.com.ua/ua/computers-notebooks/c80253/"]').eq(0);
    }

    selectCategoryNotebook() {
        return cy.get('[title="Ноутбуки"]').eq(0);
    }

    selectProcessorFilter() {
        return cy.get('[data-id="Intel Core i7"]');
    }

    expectTheNumberOfGoods() {
        return cy.get('.catalog-selection__label.ng-star-inserted').should('have.text', ' Обрано 9283 товарів ');
    }
  
}
export default new failingPage();