class Homepage_Po {
    
    accessHomepage() {
        cy.visit("https://www.automationteststore.com/")
    };

    clickOn_Login_Link() {
        cy.contains('Login or register').click()
    };

    clickOn_Contact_Us_Link() {
        cy.get("a[href$='contact']").click()
    };
}
export default Homepage_Po;
