

class Homepage_Po {

    accessHomepage() {
        cy.visit("https://www.automationteststore.com/")
    };

    clickOn_Login_Link() {
        cy.contains('Login or register').click()
        cy.url().should('contain', '?rt=account/login')
    };

    clickOn_Contact_Us_Link() {
        cy.get("a[href$='contact']").click()
        cy.url().should('contain', '?rt=content/contact')
    };

    clickOn_Hair_Care_Link() {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        cy.url().should('contain', '?rt=product/category&path=52')
    };

    clickOn_Cart(){
        cy.get(".cart_total").click()
    };

    getCartTotalValue() {
        return cy.get(".cart_total")
    };


}
export default Homepage_Po;
