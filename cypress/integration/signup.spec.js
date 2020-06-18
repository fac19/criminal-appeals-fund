//As a user, I want to be able to create an account on the website to obtain funding for applications
describe("Users should be able to create an account", () => {
	it("Displays the signup button on the landing page", () => {
		cy.visit("/");
		cy.contains("Sign Up").click();
		cy.url().should("include", "/signup");
	});

	it('should display /signup after clicking "Sign up', () => {
		cy.visit("/");
		cy.contains("Sign Up").click();
		cy.contains("Sign Up").click();
		cy.url().should("include", "/signup");
	});

	// .invoke('attr', 'placeholder').should('contain', 'username')

	it("Users should be able to enter their personal details", () => {
		cy.visit("/signup");
		cy.get("#firstName").type("John");
		cy.get("#lastName").type("Doe");
		cy.get("#email").type("test@test.com");
		cy.get("#barNumber").type("123456789");
		cy.contains("Next").click();
	});

	it("Users should be able to create a password", () => {
		cy.get("[data-cy=signup-password]").type("123456789");
		cy.get("[data-cy=signup-password-repeat").type("123456789");
		cy.contains("Next").click();
	});

	it("Users can upload proof of identity via the Cloudinary widget", () => {
		cy.get("[data-cy=upload-img]").contains("Upload Image").click();
	});
});
