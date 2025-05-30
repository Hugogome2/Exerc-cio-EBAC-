class POM_produtos {


    visitarURL() {
        cy.visit('produtos');
    }
    //Busca na pagina geral de produto
    buscarProduto(nomeProduto) {
        cy.get('.products > .row').contains(nomeProduto).click()
    }
    //Faz a busca pelo sistema de busca do site 
    buscarProduto2(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto);
        cy.get('[type="submit"]').eq(1).click();
    }

    selecionarProdutoLista(psc) {
        cy.get('.product-block').eq(psc).click()
    }

    addProduto(psc, tamanho, cor, quantidade) {
        cy.get('.product-block').eq(psc).click()
        cy.wait(7000)
        cy.get('.button-variable-item-' + tamanho).click()
        cy.wait(7000)
        cy.get('.button-variable-item-' + cor).click()
        cy.wait(5000)
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }

    confirmaProduto() {
        cy.get('.woocommerce-message > .button').click()
    }
}

export default new POM_produtos() //comando pra deixar arquivo acessível para ser importado no projeto.