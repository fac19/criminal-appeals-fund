// import { apiUrl } from "../../cypress";

// describe("API testing with Cypress", () => {
// 	beforeEach(() => {
// 		cy.request(apiUrl);
// 	});

// 	it("Validate the header", () => {
// 		cy.get("recQJCWRxSU4oqQBi")
// 			.its("headers")
// 			.its("content-type")
// 			.should("include", "application/json");
// 	});
// });

// require("jest-fetch-mock").enableMocks();

// describe("Testing requests to airtable API", () => {
// 	beforeEach(() => {
// 		fetch.resetMocks();
// 	});

// 	it("Mocks a GET request to the applicants database", () => {
// 		getAirtable("GET", "applicants", "recQJCWRxSU4oqQBi").then((res) => {
// 			expect(res.data.email).toBe("j@hs.com");
// 		});
// 		expect(fetch.mock.calls.length).toEqual(1);
// 		expect(fetch.mock.calls[0][0]).toBe(
// 			"/.netlify/functions/airtable?table=applicants&token=recQJCWRxSU4oqQBi"
// 		);
// 	});

// it("Mocks a POST request to the applications database", () => {
// 	postAirtable("POST", "applications", "recQJCWRxSU4oqQBi").then((res) => {
// 		expect(res.data).toBe(5);
// 	});
// 	expect(fetch.mocks.calls.length).toEqual(5);
// 	expect(fetch.mock.calls[0][0]).toBe(
// 		"/.netlify/functions/airtable?table=applications&token=recQJCWRxSU4oqQBi"
// 	);
// });
// });
