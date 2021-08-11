
class Cart_Po {
    goToOrderCheckout() {
        cy.get("#cart_checkout1").click()
        cy.url().should('contain', '?rt=account/login')
    }

    getItemTotalPrice() {
        return cy.get("tr:nth-of-type(2) > td:nth-of-type(6)")
    }

    getItemsQuantity() {
        return cy.get("#cart_quantity70")
    }

    getOrderTotalPrice() {
        return cy.get("tr:nth-of-type(1) > td:nth-of-type(2) > .bold")
    }
}
export default Cart_Po;
