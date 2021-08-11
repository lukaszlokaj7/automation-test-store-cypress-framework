class Checkout_Po {

    submitCheckoutAsGuest(firstName, lastName, email, address1, city, region, zipCode) {
        cy.get("#guestFrm_firstname").type(firstName)
        cy.get("#guestFrm_lastname").type(lastName)
        cy.get("#guestFrm_email").type(email)
        cy.get("#guestFrm_address_1").type(address1)
        cy.get("#guestFrm_city").type(city)
        cy.get("#guestFrm_zone_id").select(region)
        cy.get("#guestFrm_postcode").type(zipCode)
        cy.contains("Continue").click()

    };

    validateCheckoutAddressAndConfirm(firstName, lastName, address1, city, region, zipCode) {
        cy.get(".confirm_shippment_options > tbody > tr > :nth-child(1)").should('contain', firstName + " " + lastName)
        cy.get(".confirm_shippment_options.table address").should('contain', address1)
        cy.get(".confirm_shippment_options.table address").should('contain', city + ' ' + region + ' ' + zipCode)
        cy.get("#checkout_btn").click()
    }

    getTextAfterCheckout() {
        return cy.get(".maintext")
    }

    getMissingZipCodeMessage() {
        return cy.get(".help-block")
    }

}
export default Checkout_Po;
