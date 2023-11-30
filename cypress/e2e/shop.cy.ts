describe("Signup Component", () => {
  beforeEach(() => {
    cy.visit("/signup");
  });

  it("should display the signup form", () => {
    cy.get("form").should("exist");
  });
  
  it("should validate and submit the signup form", () => {

    cy.get("[data-cy=name-input]").type("John Doe");
    cy.get("[data-cy=email-input]").type("john.doe@example.com");
    cy.get("[data-cy=nickname-input]").type("john_doe");
    cy.get("[data-cy=birthday-input]").type("1990-01-01");
    cy.get("[data-cy=phoneNumber-input]").type("1234567890");
    cy.get("[data-cy=password-input]").type("TestPassword123");

    cy.get("form").submit();

  });
});
