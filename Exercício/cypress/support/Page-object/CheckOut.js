class CheckOut {
    checkOut(endereço, cidade) {
        cy.get('#billing_address_1').type(endereço)
        cy.get('#billing_city').type(cidade)
        cy.get('#billing_postcode').type('39000-123')
        cy.get('#billing_phone').type('(38)9999999999')
        cy.get('#terms').click()
        cy.get('#place_order').click()
    }
} export default new CheckOut()