import Homepage_PO from '../pageObjects/Homepage_PO'
import Loginpage_PO from '../pageObjects/Loginpage_PO'
import Registerpage_PO from '../pageObjects/Registerpage_PO'
import Contact_Us_PO from '../pageObjects/Contact_Us_PO'
import Hair_Care_PO from '../pageObjects/Hair_Care_PO'
/// <reference types="cypress" />

let randomString = Math.random().toString(36).substring(2);
let login = 'Test_' + randomString;
let email = 'Test_' + randomString + '@gmail.com';

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

  it("Valid registration", () => {
    registerpage_PO.accountRegistration(data.firstName, data.lastName, email, data.telephoneNumber, data.faxAddress, data.companyName, data.address, data.city, data.country, data.zipCode, data.region, login, data.password, data.passwordConf)
    registerpage_PO.getValidRegisterMessage().should('contain','Your Account Has Been Created!')
  });

  it("Invalid registration - missing login and email", () => {
    registerpage_PO.accountRegistration(data.firstName, data.lastName, ' ', data.telephoneNumber, data.faxAddress, data.companyName, data.address, data.city, data.country, data.zipCode, data.region, ' ', data.password, data.passwordConf)
    registerpage_PO.getRegisterError().should('contain', 'Login name must be alphanumeric only and between 5 and 64 characters!')
    registerpage_PO.getRegisterError().should('contain', 'Email Address does not appear to be valid!')
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
    loginpage_PO.loginToApplication(login, data.password)
    cy.url().should('contain', '?rt=account/account')
  });

  it("Invalid login test - missing password", () => {
    loginpage_PO.loginToApplication(login, ' ')
    loginpage_PO.getLoginError().should('contain', 'Error: Incorrect login or password provided.')

  });

  it("Invalid login test - missing login", () => {
    loginpage_PO.loginToApplication(' ', data.password)
    loginpage_PO.getLoginError().should('contain', 'Error: Incorrect login or password provided.')

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
    contact_Us_PO.getValidMessage().should('contain', "Your enquiry has been successfully sent to the store owner!")
  });

  it("Invalid contact us form submission - missing email", () => {
    contact_Us_PO.submitForm("Lucas", " ", "Do you provide any discounts?")
    contact_Us_PO.getErrorMessage().should('contain', "Email: is required field! E-Mail Address does not appear to be valid!")
  });
});



describe("Hair care products tests", () => {

  const homepage_PO = new Homepage_PO();
  const hair_Care_PO = new Hair_Care_PO();

  beforeEach(function () {
    cy.clearLocalStorage();
    cy.clearCookies();
    homepage_PO.accessHomepage();
    homepage_PO.clickOn_Hair_Care_Link();
  });

  it("Add specific product to basket", () => {
    hair_Care_PO.addSpecificProductToCart('Eau Parfumee au The Vert Shampoo')
  });

});


