class cartPage {
  clickCheckoutButton() {
    cy.get("[data-test=checkout]").click();
  }
  clickContinueShopping() {
    cy.get("[data-test=continue-shopping]").click();
  }
  removeCartItem() {
    cy.get("[data-test=remove-sauce-labs-backpack]").click();
  }
}
module.exports = new cartPage();
