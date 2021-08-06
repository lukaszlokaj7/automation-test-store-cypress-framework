
class Cart_Po {
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
