const Airtable = require("airtable");

// Airtable.configure({
// 	endpointUrl: "https://api.airtable.com",
// 	apiKey: process.env.AIRTABLE_KEY,
// });
exports.handler = async (request, context) => {
	const { AIRTABLE_KEY } = process.env;
	const table = request.queryStringParameters.table; //e.g. "Applications%20for%20funding"
	const requestBody = JSON.parse(request.body); // what we sent from front end
	const base = new Airtable({
		endpointUrl: "https://api.airtable.com",
		apiKey: AIRTABLE_KEY, // secret on Netlify
	}).base("app7xH8ItDsTvcPhg"); // database

	console.log("in", requestBody);

	let data = [];
	await base(table)
		.create(requestBody)
		.then((record) => {
			console.log(record);
			table === "applicants"
				? data.push({ id: record.fields.id, name: record.fields.first_name })
				: data.push({ name: record.fields.case_name });
		})
		.catch(console.error);

	return {
		statusCode: 201,
		body: JSON.stringify({
			message:
				"The response data has been successfully added to " + table + " table.",
			response: data,
		}),
	};
};
