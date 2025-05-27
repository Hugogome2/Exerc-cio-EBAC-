/// <reference types="cypress" />

describe("Feature login", () => {
    //Foi utilizado uma função no arquivo cypress.config.js = baseUrl para nao precisar repetir a URL do site que esta sendo usado para teste, usar somete o caminho a ser testo.
    beforeEach(() => {
        cy.visit('/minha-conta/');
    });

    it('must login successfully', () => {
        cy.get('#username').type('Teste400@teste.com.br');
        cy.get('#password').type('Senha12345*');
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, teste400 (não é teste400? Sair)')
    })
    it('should show error message when entering incorrect user', () => {
        cy.get('#username').type('Teste400@test.com.br');
        cy.get('#password').type('Senha12345*');
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });

    it('should show error message when entering incorrect password', () => {
        cy.get('#username').type('Teste400@teste.com.br');
        cy.get('#password').type('Senha1234*');
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });

})

