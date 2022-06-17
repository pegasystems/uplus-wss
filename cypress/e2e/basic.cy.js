describe("Check that all pages are loading", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Uplus Application");
  });

  it("navigate to retail_bank", () => {
    cy.visit("/retail_bank/");
    cy.contains("h1", "Set goals,");
  });
});
