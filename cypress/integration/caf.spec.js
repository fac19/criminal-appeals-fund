describe("caf.spec", () => {
	it("should display prepare me website", () => {
		cy.viewport("iphone-6");
		cy.visit("/");
		cy.title().should("include", "Criminal Appeals Fund");
	});
});
