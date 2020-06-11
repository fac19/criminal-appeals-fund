const fetch = (method, table, request) => {
	const fakeMethod = "POST";
	const fakeTable = "Applicants";
	const fakeRequest = {
		"Bar number": "670010619",
		Email: "chapman.rachel@example.com",
		"Date Submitted": "6/16/2017",
		Name: "Rachel Chapman",
		"Verification photo":
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Sarah_Bolger_%2848484781976%29_%28cropped%29.jpg/800px-Sarah_Bolger_%2848484781976%29_%28cropped%29.jpg",
	};
	const response = fetch(
		`../../.netlify/build-lambda/airtable.js?table=${fakeTable}`,
		{
			method: fakeMethod,
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(fakeRequest),
		}
	);
	return response.json();
};

export default fetch;
