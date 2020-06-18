// User Story 4. I want to be up to date on the stages of my application

describe("User should be able to apply for funding", () => {
	it("User logs in and redirect to apply page from profile when Apply for funding button is clicked", () => {
		cy.visit("/login");
		cy.get("#email").type("itsina96@gmail.com");
		cy.get("#password").type("1234");
		cy.get("[data-cy=submit]").click();
		cy.url().should("include", "/profile");
		cy.get("[data-cy=funding]").click();
		cy.url().should("include", "/apply");
	});

	it("should throw an error message when user tries to hit Next button without checking the checkbox", () => {
		cy.contains("Next").click();
		cy.contains("Next").click();
		cy.get("[data-cy=apply-error]").should(
			"have.text",
			"Please confirm you have understood the funding guidelines"
		);
	});

	it("should throw an error message when user tries to hit Next button without fill out the form", () => {
		cy.contains("Next").click();
		cy.get("[data-cy=label-i-understand]").click();
		cy.contains("Next").click();
		cy.contains("Next").click();
		cy.get("[data-cy=apply-error]").should(
			"have.text",
			"Please make sure the required fields are complete"
		);
	});

	it("User is able to fill out the form and goes to next stages succesfully", () => {
		cy.get("#caseName").type("Gregor vs Ina");
		cy.get("#caseStage").type("Initial Case Investigation and Assessment");
		cy.get("#courtName").type("Court of Appeal");
		cy.get("#counselName").type("FAC");
		cy.get("#solicitorName").type("Gregor");
		cy.contains("Next").click();
		cy.get("[data-cy=apply-merits]").type("I dunno");
		cy.get("[data-cy=apply-impact]").type("Huge impact");
		cy.contains("Next").click();
	});

	it("User is unable to process further if they did not upload any documents", () => {
		cy.get("[data-cy=apply-button]").click();
		cy.get("[data-cy=apply-error]").should(
			"have.text",
			"Please upload documents"
		);
	});
});
