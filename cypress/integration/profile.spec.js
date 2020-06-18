// User Story 3. I want to be up to date on the stages of my application

describe("User should be able to have an overview of their applications and the stages they are in", () => {
	it("firstly user logs in successfully", () => {
		cy.visit("/login");
		cy.get("#email").type("itsina96@gmail.com");
		cy.get("#password").type("1234");
		cy.get("[data-cy=submit]").click();
		cy.url().should("include", "/profile");
		cy.get("[data-cy=nav-logged-in]").contains("Sign Out");
		cy.get("[data-cy=nav-logged-in]").get("Login").should("not.exist");
		cy.get("[data-cy=nav-logged-in]").get("Sign Up").should("not.exist");
	});

	it("Displays the Apply for funding button and steps on info box", () => {
		cy.get("[data-cy=applicant-name]").contains("Hello, Ina Yoon");
		cy.get("[data-cy=funding]").contains("Apply for funding");
		cy.get("[data-cy=applicant-infos]").contains(
			"Stage 1: Application submitted"
		);
	});

	it("Displays application card with the correct information", () => {
		cy.get("article").contains("Ina vs Gregor");
		cy.get("article").contains("Stage 1");
	});

	it("Only displays 'Document under review' message and withdraw button when it's stage 2", () => {
		cy.get("article").contains("Documents under review");
		cy.get("article").contains("Withdraw Case");
		cy.get("[data-cy=upload-invoice]").should("not.exist");
	});
});
