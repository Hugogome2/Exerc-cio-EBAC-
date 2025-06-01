/// <reference types="cypress" />
import { fa, faker, fakerDA } from "@faker-js/faker";
import POM from "../../support/Page-object/produtos-page";
context('Exercício - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC -> Feito 
        Para fazer um pedido de 4 produtos, fazendo a escolha dos produtos e adicionando ao carrinho - > feito 
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        POM.visitarURL()
        POM.Acesso()
        POM.visitarURLProduto()
    });

    it('Deve fazer um pedido na loja EBAC Shop de ponta a ponta', () => {
        cy.fixture('produtos').then((produtos) => {
            produtos.forEach((produtos) => {
                POM.escolha_De_vários_Produtos(produtos);
            });
        })
        cy.clearAllLocalStorage()
        POM.addProduto_Busca('Balboa Persistence Tee', 'M', 'Gray', 1)
        POM.addProduto_Busca('Cronus Yoga Pant', '36', 'Black', 1)
        POM.confirmaProduto()
        cy.get('.checkout-button').click()
        POM.cleanAll()
        POM.checkOut(faker.location.streetAddress(), faker.location.city())
    });


})