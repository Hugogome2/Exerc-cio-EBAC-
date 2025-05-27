
///<reference types="cypress" />

describe('seleção de produtos ', () => {

    beforeEach(() => {
        cy.visit('/produtos/');
    });

    it('Selecionar qualquer produto', () => {
        cy.get('.product-block')
    });

    it('Selecionar o produto na posição 0', () => {
        cy.get('.product-block').eq(0).click()
    });

    it('Selecionar o produto na posição 8', () => {
        cy.get('.product-block').eq(8).click()
    });

});