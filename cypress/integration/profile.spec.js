//As a user, I want to be up to date on the stages of my application
describe("Users should be able to have an overview of their applications and the stages they are in", () => {
	it("Displays the user's name", () => {
		cy.visit("/profile");
		cy.contains("Sign Up").click();
		cy.url().should("include", "/signup");
	});
});
