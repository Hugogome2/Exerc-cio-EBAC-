///<reference types="cypress"/>

import { faker, fakerAF_ZA } from "@faker-js/faker";

describe('Feature: Completar dados da conta', () => {

    beforeEach(() => {
        cy.visit('/minha-conta/edit-account/');
        cy.fixture('dadosPerfil').then((login) => {
            cy.Login(login.Nome, login.senha)
        })
    });
    it('must change of account details', () => {
        cy.detalhesConta(faker.person.firstName(), faker.person.lastName(), 'TesteMaster')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
});

