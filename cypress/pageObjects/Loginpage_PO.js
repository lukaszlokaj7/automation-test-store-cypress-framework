class Loginpage_Po {

    clickOn_Register_Link() {
        cy.contains('Continue').click()
        cy.url().should('contain', '?rt=account/create')
    }

    loginToApplication(login, password) {
        cy.get('#loginFrm_loginname').type(login)
        cy.get('#loginFrm_password').type(password)
        cy.get("[title='Login']").click()
    }

    getLoginError() {
        return cy.get('.alert')
    }

    goToCheckoutAsQuestUser() {
        cy.get("#accountFrm_accountguest").click()
        cy.get("button[title='Continue']").click()
        cy.url().should('contain', '?rt=checkout/guest_step_1')
    }
}
export default Loginpage_Po;