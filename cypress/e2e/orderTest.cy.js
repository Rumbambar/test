it('order test', () => {
    cy.visit('/');
    cy.get('.tile__inner').eq(1).click();
    cy.get('.buy-button__label.ng-star-inserted').click();
    cy.get('.button.button_size_medium.button_color_gray.cart-footer__continue.ng-star-inserted').click();
    cy.get('#fat-menu').click();
    cy.get('[href^="https://rozetka.com.ua/ua/sport-i-uvlecheniya/c4627893/"]').eq(0).click();
    cy.get('[title="Велосипеди"]').click();
    cy.get('[data-goods-id="245334043"]').click();
    cy.get('.mode-slim.toOrder.ng-star-inserted').click();
    cy.get('.modal__content').contains('Паста для ремонту фар K2 LAMP DOCTOR 0.06 кг (L3050)');
    cy.get('.modal__content').contains(' Велосипед CORRADO Piemont DB 26" 21" 2019 Біло-синій (0307-С-21)');
    cy.get('.cart.cart-se.ng-star-inserted').contains('11 813');
    cy.get('#cartProductActions0').click();
    cy.get('[href^="#icon-trash"]').click();
})