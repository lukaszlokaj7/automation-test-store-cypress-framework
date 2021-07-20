class Loginpage_Po {

    accountRegistration(firstName, lastName, emailAdress, telephoneNumber, faxAddress, companyName, address, city, country, zipCode, region, login, password, passwordConf ){
        cy.get('#AccountFrm_firstname').type(firstName)
        cy.get('#AccountFrm_lastname').type(lastName)
        cy.get('#AccountFrm_email').type(emailAdress)
        cy.get('#AccountFrm_telephone').type(telephoneNumber)
        cy.get('#AccountFrm_fax').type(faxAddress)
        cy.get('#AccountFrm_company').type(companyName)
        cy.get('#AccountFrm_address_1').type(address)
        cy.get('#AccountFrm_city').type(city)
        cy.get("#AccountFrm_country_id").select(country)
        cy.get('#AccountFrm_postcode').type(zipCode)
        cy.get('#AccountFrm_zone_id').select(region)
        cy.get('#AccountFrm_loginname').type(login)
        cy.get('#AccountFrm_password').type(password)
        cy.get('#AccountFrm_confirm').type(passwordConf)
        cy.get('#AccountFrm_newsletter0').click()
        cy.get('#AccountFrm_agree').click()
        cy.contains('Continue').click()
    }

}
export default Loginpage_Po;