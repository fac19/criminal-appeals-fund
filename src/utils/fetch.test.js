import {
	postAirtable,
	getAirtable,
	loginAirtable,
	updateAirtable,
} from "./fetch";

require("jest-fetch-mock").enableMocks();

describe("Testing requests to airtable API", () => {
	beforeEach(() => {
		fetch.resetMocks();
	});

	it("Mocks a GET request to the database", () => {
		// may need to be amended back to 5
		// fetch.MockResponseOnce(JSON.stringify({ data: 5 }));

		getAirtable("GET", "applicants", "recQJCWRxSU4oqQBi").then((res) => {
			expect(res.data).toBe(17);
		});
		expect(fetch.mock.calls.length).toEqual(1);
		expect(fetch.mock.calls[0][0]).toBe(
			"/.netlify/functions/airtable?table=applicants&token=recQJCWRxSU4oqQBi"
		);
	});

	it("Mocks a ");
});
