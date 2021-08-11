class Contact_Us_Po {

    submitForm(first_name, email, question) {
        cy.get("#ContactUsFrm_first_name").type(first_name);
        cy.get("#ContactUsFrm_email").type(email);
        cy.get("#ContactUsFrm_enquiry").type(question);
        cy.get("button[title='Submit']").click();
    }

    getValidMessage() {
        return cy.get(".mb40 > :nth-child(3)")
    }

    getErrorMessage() {
        return cy.get(".element_error")
    }
}
export default Contact_Us_Po;
