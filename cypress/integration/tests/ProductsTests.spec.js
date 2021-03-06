/// <reference types="cypress" />
import loginPage from "../../../page-objects/login-Page";
import inventoryPage from "../../../page-objects/inventory-Page";
import cartPage from "../../../page-objects/cart-page";
import personalInfoPage from "../../../page-objects/personal-Info-Page";

describe("Products Tests", () => {
  beforeEach(() => {
    cy
    .viewport(1280, 720);
    cy
    .log("Opening the website");
    cy
    .visit('/');
    cy
    .url()
    .should("include", "saucedemo");
    loginPage.
    login("standard_user", "secret_sauce");

  });

  it("should add Back Pack to cart and check the price", () => {
    inventoryPage.addBackPackToCart();
    inventoryPage.goToCart();
    cy
    .contains("Sauce Labs Backpack")
    .should("be.visible")
    .and("have.length", 1);
    cy
    .get(".inventory_item_price")
    .should(
      "have.text", "$29.99");

  });

  it("should add Bike Light to cart and check the price", () => {
    inventoryPage.addBikeLightToCart();
    inventoryPage.goToCart();
    cy
    .contains("Sauce Labs Bike Light")
    .should("be.visible")
    .and("have.length", 1);
    cy
    .get(".inventory_item_price")
    .should(
      "have.text", "$9.99");

  });

  it("should add Bolt T-Shirt to cart and check the price", () => {
    inventoryPage.addBoltTshirtToCart();
    inventoryPage.goToCart();
    cy
    .contains("Sauce Labs Bolt T-Shirt")
    .should("be.visible")
    .and("have.length", 1);
    cy
    .get(".inventory_item_price")
    .should(
      "have.text", "$15.99");

  });

  it("should add Fleece Jacket to cart and check the price", () => {
    inventoryPage.addFleeceJacketToCart();
    inventoryPage.goToCart();
    cy
    .contains("Sauce Labs Fleece Jacket")
    .should("be.visible")
    .and("have.length", 1);
    cy
    .get(".inventory_item_price")
    .should(
      "have.text", "$49.99");

  });

  it("should add Onesie to cart and check the price", () => {
    inventoryPage.addOnesieToCart();
    inventoryPage.goToCart();
    cy
    .contains("Sauce Labs Onesie")
    .should("be.visible")
    .and("have.length", 1);
    cy
    .get(".inventory_item_price")
    .should(
      "have.text", "$7.99");

  });

  it(" should add The Test All Thigns T-Shirt and check the price", () => {
    inventoryPage.addAllTheThingShirtToCart();
    inventoryPage.goToCart();
    cy
    .contains("Test.allTheThings() T-Shirt (Red)")
    .should("be.visible")
    .and("have.length", 1);
    cy
    .get(".inventory_item_price")
    .should(
      "have.text", "$15.99");

  });

  it("should be able to remove an item from the cart", () => {
    inventoryPage.addBackPackToCart();
    inventoryPage.goToCart();
    cartPage.removeCartItem();
    cy
    .contains("Sauce Labs Backpack")
    .should(
      "not.exist");

  });

  it("should be able to checkout", () => {
    inventoryPage.addBackPackToCart();
    inventoryPage.goToCart();
    cartPage.clickCheckoutButton();
    personalInfoPage.fillOutPersonalInfo("David", "Nikolov", "2400");
    cy
    .contains("Sauce Labs Backpack")
    .should("be.visible")
    .and("have.length", 1);
    cy
    .get(".item_pricebar")
    .should("have.text", "$29.99");
    personalInfoPage.clickFinishButton();
    cy
    .get(".complete-header")
    .should(
      "be.visible");

  });
  
  it('should not be able to checkout with only firstname added',() => {
    inventoryPage.addBackPackToCart();
    inventoryPage.goToCart();
    cartPage.clickCheckoutButton();
    personalInfoPage.enterFirstName('David');
    personalInfoPage.clickContinue();
    loginPage.elements.errorMessage()
     .should('have.text', 'Error: Last Name is required')
     .and(
      'have.css',
      'color',
      'rgb(255, 255, 255)');

  });
  
  it('should not be able to checkout with only lastname added',() => {
    inventoryPage.addBackPackToCart();
    inventoryPage.goToCart();
    cartPage.clickCheckoutButton();
    personalInfoPage.enterLastName('Nikolov');
    personalInfoPage.clickContinue();
    loginPage.elements.errorMessage()
     .should('have.text','Error: First Name is required')
     .and(
      'have.css',
      'color',
      'rgb(255, 255, 255)');
    
     });
  
     it('should not be able to checkout without postalcode',() => {
      inventoryPage.addBackPackToCart();
      inventoryPage.goToCart();
      cartPage.clickCheckoutButton();
      personalInfoPage.enterFirstName('David');
      personalInfoPage.enterLastName('Nikolov');
      personalInfoPage.clickContinue();
      loginPage.elements.errorMessage()
       .should('have.text' , 'Error: Postal Code is required')
       .and(
        'have.css',
        'color',
        'rgb(255, 255, 255)');
       
     });
  
});
