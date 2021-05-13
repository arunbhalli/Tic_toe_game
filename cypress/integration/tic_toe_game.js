describe("user can see his/her choice", () => {
  beforeEach(() => {
    cy.visit('/')
  });
  it ("for selecting tick", () => {
    cy.get("[data-cy=tick").should("contain","Rock");
  })
  it ("for selecting toe", () => {
    cy.get("[data-cy=paper]").should("contain","Paper")
  })
});