describe("Home page", () => {
  it("should render", () => {
    cy
      .visit("/")
      .contains("Welcome to Meteor!")
      .should("be.visible");
  });
});
