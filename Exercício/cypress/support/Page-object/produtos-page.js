class POM_produtos {
    visitarURL() {
        cy.visit('minha conta');
    }

    Acesso() {
        cy.fixture('dadosPerfil').then((login) => {
            cy.Login(login.Nome, login.senha)
        })
    }
    //Busca na pagina minha conta
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
        cy.get('.product-block', { timeout: 10000 }).eq(psc).click()
        cy.get('.button-variable-item-' + tamanho, { timeout: 10000 }).click()
        cy.get('.button-variable-item-' + cor, { timeout: 10000 }).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }
    //Validar produto no carrinho 
    confirmaProduto() {
        cy.get('.woocommerce-message > .button', { timeout: 7000 }).click()
    }
    //visitar aba de produtos
    visitarURLProduto() {
        cy.visit('Produto');
    }

    escolha_De_vários_Produtos(produtos) {
        const { psc, tamanho, cor, quantidade } = produtos;

        cy.get('.product-block').eq(psc).click()
        cy.get('.button-variable-item-' + tamanho, { timeout: 10000 }).click()
        cy.get('.button-variable-item-' + cor, { timeout: 10000 }).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button', { timeout: 10000 }).click()
        cy.visit('Produto');
    }

    addProduto_Busca(nomeProduto, tamanho, cor, quantidade) {
        cy.get('[name="s"]').eq(1).type(nomeProduto);
        cy.get('[type="submit"]').eq(1).click();
        cy.get('.button-variable-item-' + tamanho, { timeout: 10000 }).click()
        cy.get('.button-variable-item-' + cor, { timeout: 10000 }).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }

    cleanAll() {
        cy.get('#billing_address_1').clear()
        cy.get('#billing_city').clear()
        cy.get('#billing_postcode').clear()
        cy.get('#billing_phone').clear()
    }


}

export default new POM_produtos() //comando pra deixar arquivo acessível para ser importado no projeto.