beforeEach(() => {
  cy.visit('/');
  cy.get('[placeholder="Я шукаю..."]').type('iphone');
  cy.get('.button.button_color_green').click();
})

it("Price filter test1", () => {
  cy.get('[formcontrolname="min"]').clear().type('25000');
  cy.get('[formcontrolname="max"]').clear().type('30000');
  cy.get('.button.button_color_gray').click()
  cy.get('.select-css.ng-valid').select('Від дешевих до дорогих');
  

})

it("Price filter test2", () => {
  cy.get('[formcontrolname="min"]').clear().type('34999');
  cy.get('[formcontrolname="max"]').clear().type('40000');
  cy.get('.button.button_color_gray').click()
  cy.get('.select-css.ng-valid').select('Від дешевих до дорогих');
})

it("Price filter test3", () => {
  cy.get('[formcontrolname="min"]').clear().type('21333');
  cy.get('[formcontrolname="max"]').clear().type('27050');
  cy.get('.button.button_color_gray').click()
  cy.get('.select-css.ng-valid').select('Від дешевих до дорогих');
})
