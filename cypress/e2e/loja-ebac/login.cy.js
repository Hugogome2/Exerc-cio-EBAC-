///import cypress from "cypress"

describe("Feature login", () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
    });

    it('most login successfully', () => {
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

