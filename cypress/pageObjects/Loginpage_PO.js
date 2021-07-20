class Loginpage_Po {

    clickOn_Register_Link() {
        cy.contains('Continue').click()
    }

    loginToApplication(login, password){
        cy.get('#loginFrm_loginname').type(login)
        cy.get('#loginFrm_password').type(password)
        cy.get("[title='Login']").click()
    }
}
export default Loginpage_Po;