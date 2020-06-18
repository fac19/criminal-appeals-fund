// User Story 1. User should be able to log in to their account
describe("User should be able to log in to their account", () => {
	it("should display Criminal Appeals Fund website", () => {
		cy.viewport("macbook-15");
		cy.visit("/");
		cy.title().should("include", "Criminal Appeals Fund");
	});

	it("should render the correct url when user clicked login link", () => {
		cy.visit("/");
		cy.contains("Login").click();
		cy.url().should("include", "/login");
	});

	it("should throw an error message if the password doesn't match", () => {
		cy.get("#email").type("itsina96@gmail.com");
		cy.get("#password").type("123");
		cy.get("[data-cy=submit]").click();
		cy.get("[data-cy=login-form-error]").should(
			"have.text",
			"There was a problem logging you in, please try again or sign up"
		);
	});

	it("should be able to render profile page after user successfully logged in", () => {
		cy.visit("/login");
		cy.get("#email").type("itsina96@gmail.com");
		cy.get("#password").type("1234");
		cy.get("[data-cy=submit]").click();
		cy.url().should("include", "/profile");
	});
});
