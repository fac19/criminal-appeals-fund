//As a user, I want to be up to date on the stages of my application
describe("Users should be able to have an overview of their applications and the stages they are in", () => {
	it("Displays the Apply for funding button", () => {
		cy.visit("/profile");
		cy.get("[data-cy=funding]").contains("Apply for funding");
		cy.url().should("include", "/profile");
		cy.get("ApplicantName").contains();
	});

	it("Displays the user's name", () => {
		// cy.contains("profile").click();
		cy.url().should("include", "/profile");
		cy.get(["data-cy=applicant-name"]).contains("Hello, ");
	});

	it("Displays application card", () => {});
});
