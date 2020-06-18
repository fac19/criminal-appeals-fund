// User Story 1.
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
	it("should throw the error message if the password doesn't match", () => {
		cy.get("#email").type("itsina96@gmail.com");
		cy.get("#password").type("123");
		cy.get("[data-cy=submit]").click();
		cy.get(".sc-fzpans ksXGA-d").should(
			"have.text",
			"There was a problem logging you in, please try again or sign up"
		);
	});
	it("should be able to render profile page after user successfully logged in", () => {
		cy.get("#email").type("itsina96@gmail.com");
		cy.get("#password").type("123");
		cy.get("[data-cy=submit]").click();
	});
});

// 	it("can find and type in password", () => {
// 		cy.get("#password")
// 			.type("fakepassword")
// 			.should("have.value", "fakepassword");
// 	});

// 	it("will fail when type invalid user credentials", () => {
// 		cy.get("#email").type("fake@email.com");

// 		cy.get("#password").type("fakepassword");

// 		cy.get("input[type=submit]").click();

// 		cy.get("#login-message").should("have.text", "Login failed");
// 	});

// 	it("will fail when type invalid password with valid user", () => {
// 		cy.get("#email").type("fake@email.com");

// 		cy.get("#password").type("abc");

// 		cy.get("input[type=submit]").click();

// 		cy.get("#login-message").should("have.text", "Login failed");
// 	});

// 	it("will succeed when type valid user credentials", () => {
// 		cy.get("#email").type("a@b.com");

// 		cy.get("#password").type("abc");

// 		cy.get("input[type=submit]").click();

// 		cy.get("#login-message").should("not.have.text", "Login failed");

// 		cy.location("pathname").should("include", "/user/profile");
// 	});
// });
