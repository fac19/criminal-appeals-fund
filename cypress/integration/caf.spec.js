describe("caf.spec", () => {
	it("should display Criminal Appeals Fund website", () => {
		cy.viewport("macbook-15");
		cy.visit("/");
		cy.title().should("include", "Criminal Appeals Fund");
	});

	it("should render the correct url for log in", () => {
		cy.visit("/");
		cy.contains("Login").click();
		cy.url().should("include", "/login");
	});
});

// make a test for each user story - user should be able to log in to their account

// context("Login", () => {
// 	beforeEach(() => {
// 		cy.visit("/");
// 		cy.contains("LOGIN").click();
// 		cy.visit("localhost:8080/login");
// 	});

// 	it("can find and type in email", () => {
// 		cy.get("#email")
// 			.type("fake@email.com")
// 			.should("have.value", "fake@email.com");
// 	});

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
