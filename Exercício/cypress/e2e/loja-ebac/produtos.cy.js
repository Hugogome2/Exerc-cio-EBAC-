
///<reference types="cypress" />
import POM_produtos from "../../support/Page-object/produtos-page";


describe('seleção de produtos ', () => {

    beforeEach(() => {
        POM_produtos.visitarURL()
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

/* 
    POM e uma forma de retirar o código do arquivo principal e mandar para outro arquivo onde vai ter toda a logica do teste. 
    - O arquivo produtos.cy.js e onde tem o aquivo de execução do testes
    - O arquivo Page.js e onde vai ter as paginas que contem a logica dos testes como:

        Ex: selecionarProduto () => {cy.get('.product-block').eq(8).click()}

    - Depois e so importar o arquivo Page.js para o arquivo de teste e chamar o método selecionarProduto () e passar os parâmetros se caso houver.   
*/
describe.only('Seleção de produtos com POM', () => {
    beforeEach(() => {
        POM_produtos.visitarURLProduto()
    });
    //Busca produto pela posição = sucesso
    it('Deve selecionar um produto com sucesso', () => {
        POM_produtos.selecionarProdutoLista(8)
        cy.get('.woocommerce-product-details__short-description').should('contain', 'Atlas Fitness Tank')
    });
    //Busca produto pelo nome na aba geral = sucesso
    it('Deve buscar um produto pelo nome com sucesso', () => {
        POM_produtos.buscarProduto('Apollo Running Short')
        cy.get('.woocommerce-product-details__short-description > p').should('contain', 'Apollo Running Short')
    });
    //Busca produto pelo nome no sistema de busca = sucesso
    it('Deve buscar produto aba de busca com sucesso', () => {
        POM_produtos.buscarProduto2('Augusta Pullover Jacket')
        cy.get('.woocommerce-product-details__short-description > p').should('contain', 'Augusta Pullover Jacket');
    });
    //Selecionar produto na aba de produtos, selecionar tamanho, cor e depois add no carrinho
    it.only('Deve selecionar um produto e colocar no carrinho', () => {
        POM_produtos.addProduto(0, "L", "Green", 4)
        cy.get('.woocommerce-message').should('contain', 'Abominable Hoodie')
        POM_produtos.confirmaProduto()
        cy.get('h2').should('contain', 'Total no carrinho')
    });
});
