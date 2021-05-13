describe("user can see his/her choice", () => {
  beforeEach(() => {
    cy.visit('/')
  });
  it ("for selecting tick", () => {
    cy.get("[data-cy=tick").should("contain","Tick");
  })
  it ("for selecting toe", () => {
    cy.get("[data-cy=toe]").should("contain","Toe")
  })
  it ("for selecting tac", () => {
    cy.get("[data-cy=tac]").should("contain","Tac")
  })
});