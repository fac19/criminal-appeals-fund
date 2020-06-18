const Airtable = require("airtable");

exports.handler = async (request, context) => {
	const { AIRTABLE_KEY } = process.env;
	const { AIRTABLE_BASE } = process.env;
	const table = request.queryStringParameters.table;
	const requestBody = JSON.parse(request.body);
	const base = new Airtable({
		apiKey: AIRTABLE_KEY,
	}).base(`${AIRTABLE_BASE}`);

	return await base(table)
		.select({
			view: "full_view",
			filterByFormula: `{email} = "${requestBody}"`,
		})
		.firstPage()
		.then((records) => {
			if (records.length !== 0) {
				return {
					statusCode: 200,
					body: JSON.stringify({
						message: "This email is already associated with an account",
					}),
				};
			} else {
				return {
					statusCode: 200,
					body: JSON.stringify({
						message: "This email is unique, carry on",
					}),
				};
			}
		})
		.catch((err) => {
			console.log(err.status);
		});
};
