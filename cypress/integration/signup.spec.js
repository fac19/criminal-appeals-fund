//User story 2. I want to be able to create an account on the website to obtain funding for applications

describe("User should be able to create an account", () => {
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

	it("User cannot be able to sign up with an exsisting email address", () => {
		cy.get("#firstName").type("John");
		cy.get("#lastName").type("Doe");
		cy.get("#email").type("itsina96@gmail.com");
		cy.get("#barNumber").type("123456789");
		cy.contains("Next").click();
		cy.get("[data-cy=signup-error]").should(
			"have.text",
			"Email address already exists!"
		);
	});

	it("should throw an error message if the email address is missing @", () => {
		cy.visit("/signup");
		cy.get("#firstName").type("John");
		cy.get("#lastName").type("Doe");
		cy.get("#email").type("itsina96gmail.com");
		cy.get("#barNumber").type("123456789");
		cy.contains("Next").click();
		cy.get("#email-helper-text").should(
			"have.text",
			"This field must be a valid email address"
		);
	});

	it("User should be able to enter their personal details", () => {
		cy.visit("/signup");
		cy.get("#firstName").type("John");
		cy.get("#lastName").type("Doe");
		cy.get("#email").type("test@test.com");
		cy.get("#barNumber").type("123456789");
		cy.contains("Next").click();
	});

	it("User should be able to create a password", () => {
		cy.get("[data-cy=signup-password]").type("123456789");
		cy.get("[data-cy=signup-password-repeat").type("123456789");
		cy.contains("Next").click();
	});

	it("User can upload proof of identity via the Cloudinary widget", () => {
		cy.get("[data-cy=upload-img]").click();
		// cy.get("input[type='file']").click();
	});
});
