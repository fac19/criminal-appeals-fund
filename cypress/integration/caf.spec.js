describe("caf.spec", () => {
	it("should display prepare me website", () => {
		cy.viewport("macbook-15");
		cy.visit("/");
		cy.title().should("include", "Criminal Appeals Fund");
	});
});
