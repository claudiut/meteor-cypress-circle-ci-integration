describe("Timeout", () => {
  before(() => {
    cy.visit("/");

    cy.meteorLogoutAndLogin("user@test.com");
  });

  it("should render user area", () => {
    cy.get(".logged-in-area").should("exist");
  });
});
