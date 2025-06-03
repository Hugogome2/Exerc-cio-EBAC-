class intercept {
    intPost() {
        cy.intercept('POST', '/?wc-ajax=get_refreshed_fragments').as('refreshCarrinho')
        cy.wait('@refreshCarrinho');
    }
}
export default new intercept()