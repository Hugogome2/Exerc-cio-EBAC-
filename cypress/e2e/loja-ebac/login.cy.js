/// import cypress from "cypress"

describe("Feature login", () => {
    it('most login successfully', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
        cy.get('#username').type('Teste400@teste.com.br');
        cy.get('#password').type('Senha12345*');
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, teste400 (não é teste400? Sair)')
    })
})

