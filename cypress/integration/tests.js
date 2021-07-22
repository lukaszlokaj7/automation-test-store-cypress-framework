import Homepage_PO from '../pageObjects/Homepage_PO'
import Loginpage_PO from '../pageObjects/Loginpage_PO'
import Registerpage_PO from '../pageObjects/Registerpage_PO'
import Contact_Us_PO from '../pageObjects/Contact_Us_PO'
/// <reference types="cypress" />



describe("Registration Tests", () => {
  const homepage_PO = new Homepage_PO();
  const loginpage_PO = new Loginpage_PO();
  const registerpage_PO = new Registerpage_PO();

  before(function () {
    cy.fixture("example").then(function (data) {
      //this.data = data;
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    cy.clearLocalStorage();
    cy.clearCookies();
    homepage_PO.accessHomepage();
    homepage_PO.clickOn_Login_Link();
    loginpage_PO.clickOn_Register_Link();
  });

  it.skip("Valid registration", () => {
    registerpage_PO.accountRegistration(data.firstName, data.lastName, data.emailAdress, data.telephoneNumber, data.faxAddress, data.companyName, data.address, data.city, data.country, data.zipCode, data.region, data.login, data.password, data.passwordConf)
    cy.get('.maintext').should('contain', 'Your Account Has Been Created!')
  });

  it.skip("Invalid registration - missing login and email", () => {
    registerpage_PO.accountRegistration(data.firstName, data.lastName, ' ', data.telephoneNumber, data.faxAddress, data.companyName, data.address, data.city, data.country, data.zipCode, data.region, ' ', data.password, data.passwordConf)
    cy.get('.alert').should('contain', 'Login name must be alphanumeric only and between 5 and 64 characters!')
    cy.get('.alert').should('contain', 'Email Address does not appear to be valid!')
  });
});

describe("Login tests", () => {

  const homepage_PO = new Homepage_PO();
  const loginpage_PO = new Loginpage_PO();

  before(function () {
    cy.fixture("example").then(function (data) {
      //this.data = data;
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    cy.clearLocalStorage();
    cy.clearCookies();
    homepage_PO.accessHomepage();
    homepage_PO.clickOn_Login_Link();
  });

  it("Valid login test", () => {
    loginpage_PO.loginToApplication(data.login, data.password)
    cy.url().should('contain', '?rt=account/account')
  });

  it("Invalid login test - missing password", () => {
    loginpage_PO.loginToApplication(data.login, ' ')
    cy.get('.alert').should('contain', 'Error: Incorrect login or password provided.')

  });

  it("Invalid login test - missing login", () => {
    loginpage_PO.loginToApplication(' ', data.password)
    cy.get('.alert').should('contain', 'Error: Incorrect login or password provided.')

  });
});


describe("Contact Us tests", () => {

  const homepage_PO = new Homepage_PO();
  const contact_Us_PO = new Contact_Us_PO();

  beforeEach(function () {
    cy.clearLocalStorage();
    cy.clearCookies();
    homepage_PO.accessHomepage();
    homepage_PO.clickOn_Contact_Us_Link();
  });

  it("Valid contact us form submission", () => {
    contact_Us_PO.submitForm("Lucas", "lucas@gmail.com", "Do you provide any discounts?")
    cy.get(".mb40 > :nth-child(3)").should('contain', "Your enquiry has been successfully sent to the store owner!")
  });

  it("Invalid contact us form submission - missing email", () => {
    contact_Us_PO.submitForm("Lucas", " ", "Do you provide any discounts?")
    cy.get(".element_error").should('contain', "Email: is required field! E-Mail Address does not appear to be valid!")
  });
});

