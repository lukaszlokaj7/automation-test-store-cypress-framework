class Homepage_Po {
    
    accessHomepage() {
        cy.visit("https://www.automationteststore.com/")
    };

    clickOn_Login_Link() {
        cy.contains('Login or register').click()
    };
}
export default Homepage_Po;
