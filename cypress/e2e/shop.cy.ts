describe("Signup Component", () => {
  beforeEach(() => {
    cy.visit("/signup");
  });

  it("should display the signup form", () => {
    cy.get("form").should("exist");
  });

  it("should validate and submit the signup form", () => {

    cy.get("[data-cy=name-input]").type("2039");
    cy.get("[data-cy=email-input]").type("dudu.com");
    cy.get("[data-cy=nickname-input]").type("dudu_lee");
    cy.get("[data-cy=birthday-input]").type("19900101");
    cy.get("[data-cy=phoneNumber-input]").type("010-4567-9890");
    cy.get("[data-cy=password-input]").type("onlyenglish");

    cy.get("form").submit();

  });
});
