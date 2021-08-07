class loginPage {
  elements = {
    username: () => cy.get("[data-test=username]"),
    password: () => cy.get("[data-test=password]"),
    loginButton: () => cy.get("[data-test=login-button]"), //add a logout button and make a logout test
    errorMessage: () => cy.get('h3[data-test = "error"]'),
    burgerMenu: () => cy.get("#react-burger-menu-btn"),
    logoutButton: () => cy.get("#logout_sidebar_link"),
  };
  enterUserName(username) {
    this.elements.username().type(username);
  }
  enterPassword(password) {
    this.elements.password().type(password);
  }

  clickLoginButton() {
    this.elements.loginButton().click();
  }
  clickLogoutButton() {
    this.elements.burgerMenu().click();
    this.elements.logoutButton().click();
  }
  login(username, password) {
    this.elements.username().type(username);
    this.elements.password().type(password);
    this.elements.loginButton().click();
  }
}

module.exports = new loginPage();
