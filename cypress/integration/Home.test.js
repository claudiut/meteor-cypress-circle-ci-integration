describe("Home page", () => {
  it("should render", () => {
    cy
      .visit("/")
      .contains("Welcome to Meteor!")
      .should("be.visible");
  });

  it("should fail", () => {
    cy
      .visit("/")
      .contains("Just for testing")
      .should("be.visible");
  });
});
