/// <reference types="cypress" />
import loginPage, { login } from "../../../page-objects/login-Page";
import inventoryPage from "../../../page-objects/inventory-Page";

describe("Login Tests Sauce Demo Labs", () => {
  beforeEach(() => {
    cy
<<<<<<< HEAD
    .viewport(1280, 720);
    cy
    .log("Opening the website");
    cy
    .visit('/');
    cy
    .url()
    .should(
      "include", "saucedemo");
=======
      .viewport(1280, 720);
    cy
      .log("Opening the website");
    cy
      .visit('/');
    cy.url()
    .should("include", "saucedemo");
>>>>>>> d0e9b0fcc168a269b267cd565104db610255a24e

  });

  it("should be able to login with valid credentials ", () => {
    loginPage.login(
      "standard_user", "secret_sauce");
    inventoryPage.verifyTitleExist();

  });

  it("should not be able to login with invalid credentials", () => {
    loginPage.login(
      "wrongUsername ", "wrongPassword");
    loginPage.elements
      .errorMessage()
      .should(
        "have.text",
        "Epic sadface: Username and password do not match any user in this service"
      );

  });

  it("should logout", () => {
    loginPage.login(
      "standard_user", "secret_sauce");
    loginPage.clickLogoutButton();
    cy
<<<<<<< HEAD
    .get(".login_logo")
    .should(
      "be.visible");
=======
      .get(".login_logo")
    .should("be.visible");
>>>>>>> d0e9b0fcc168a269b267cd565104db610255a24e

  });

  it("should not be able to login with locked_out_user", () => {
    loginPage.login(
      "locked_out_user", "secret_sauce");
    loginPage.elements
      .errorMessage()
      .should(
        "have.text",
        "Epic sadface: Sorry, this user has been locked out."
      );

  });

  it("should login with performance glitch user", () => {
    loginPage.login(
      "performance_glitch_user", "secret_sauce");
    inventoryPage.verifyTitleExist();

  });

  it("should have the correct image color", () => {
<<<<<<< HEAD
    loginPage. login(
      "problem_user", "secret_sauce");
    cy
=======
    loginPage.
    login("problem_user", "secret_sauce");
   cy
>>>>>>> d0e9b0fcc168a269b267cd565104db610255a24e
    .get("#item_4_img_link > .inventory_item_img")
    .should(
      "have.css",
      "color",
      "rgb(0, 0, 238)"
    );

  });

  it("The product image should have the correct width", () => {
    loginPage.login(
      "standard_user", "secret_sauce");
    cy
    .get("#item_4_img_link > .inventory_item_img")
    .should("have.css", "width")
    .and("eq", "186.75px");

  });

  it("The product image should have the correct height", () => {
<<<<<<< HEAD
    loginPage.login(
      "standard_user", "secret_sauce");
    cy
    .get("#item_4_img_link > .inventory_item_img")
    .should("have.css", "height")
    .and("eq", "237.4375px");
=======
    loginPage.
    login("standard_user", "secret_sauce");
    cy
      .get("#item_4_img_link > .inventory_item_img")
      .should("have.css", "height")
      .and("eq", "237.4375px");
>>>>>>> d0e9b0fcc168a269b267cd565104db610255a24e

  });
});
