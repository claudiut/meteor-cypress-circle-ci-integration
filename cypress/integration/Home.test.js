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
      .contains(
        "Just to test that the failure screenshot is stored in the CircleCI artifact"
      )
      .should("be.visible");
  });
});
