//As a user, I want to be able to create an account on the website to obtain funding for applications
describe("Users should be able to create an account", () => {
	it("Displays the signup button on the landing page", () => {
		cy.visit("/");
		cy.contains("Sign up").click();
		cy.url().should("include", "/signup");
	});

	it('should display /signup after clicking "Sign up', () => {
		cy.visit("/");
		cy.contains("Sign up").click();
		cy.contains("Sign up").click();
		cy.url().should("include", "/signup");
	});

	it("Users should be able to enter their personal details", () => {
		cy.visit("/signup");
		cy.get("TextField").contains("First name").type("John");
		cy.get("TextField").contains("Second name").type("Doe");
		cy.get("TextField").contains("Bar number").type("123456789");
		cy.contains("Next").click();
	});
});
