class inventoryPage {
  verifyTitleExist() {
    cy.contains("Products").should("exist");
  }
  goToCart() {
    cy.get(".shopping_cart_link").click();
  }
  addBackPackToCart() {
    cy.get("#add-to-cart-sauce-labs-backpack").click();
  }
  addBikeLightToCart() {
    cy.get("[data-test=add-to-cart-sauce-labs-bike-light]").click();
  }
  addBoltTshirtToCart() {
    cy.get("[data-test=add-to-cart-sauce-labs-bolt-t-shirt]").click();
  }
  addFleeceJacketToCart() {
    cy.get("[data-test=add-to-cart-sauce-labs-fleece-jacket]").click();
  }
  addOnesieToCart() {
    cy.get("[data-test=add-to-cart-sauce-labs-onesie]").click();
  }
  addAllTheThingShirtToCart() {
    cy.get(
      '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'
    ).click();
  }
}
module.exports = new inventoryPage();
