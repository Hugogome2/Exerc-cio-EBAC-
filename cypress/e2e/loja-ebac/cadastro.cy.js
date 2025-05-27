
/// <reference types="cypress" />

import { faker } from "@faker-js/faker"
describe('Feature: cadastro', () => {
    //Foi utilizado uma função no arquivo cypress.config.js = baseUrl para nao precisar repetir a URL do site que esta sendo usado para teste, usar somete o caminho a ser testo.
    beforeEach(() => {
        cy.visit('/minha-conta/');
    });
    it('must complete cadastre with success', () => {
        cy.get('#reg_email').type(faker.internet.email());
        cy.get('#reg_password').type(faker.internet.password());
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });


    it.only('must complete cadastre with success with custom command', () => {
        cy.preCadastro(faker.internet.email(), faker.internet.password(), faker.person.firstName(), faker.person.lastName())
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

});