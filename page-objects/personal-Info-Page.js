class personalInfo {
  enterFirstName(firstName) {
    cy.get("[data-test=firstName]").type(firstName);
  }
  enterLastName(lastName) {
    cy.get("[data-test=lastName]").type(lastName);
  }
  enterZipCode(zipCode) {
    cy.get("[data-test=postalCode]").type(zipCode);
  }
  clickContinue() {
    cy.get("[data-test=continue]").click();
  }
  clickFinishButton() {
    cy.get("[data-test=finish]").click();
  }
  fillOutPersonalInfo(firstName, lastName, zipCode) {
    this.enterFirstName(firstName);
    this.enterLastName(lastName);
    this.enterZipCode(zipCode);
    this.clickContinue();
  }
}
module.exports = new personalInfo();
