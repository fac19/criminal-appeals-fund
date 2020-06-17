const Airtable = require("airtable");

exports.handler = async (request, context) => {
	const { AIRTABLE_KEY } = process.env;
	const { AIRTABLE_BASE } = process.env;
	const table = request.queryStringParameters.table; //e.g. "Applications%20for%20funding"
	// what we sent from front end
	const id = request.queryStringParameters.applicationId;
	const withdraw = "recFO2XAO0lavb6Bl";

	const base = new Airtable({
		apiKey: AIRTABLE_KEY, // secret on Netlify
	}).base(`${AIRTABLE_BASE}`); // database

	await base(table)
		.update([
			{
				id: id,
				fields: {
					status_id: [withdraw],
				},
			},
		])
		.catch((err) => {
			console.log(err.status); // only visible in netlify functions log when running in prod
		});
	return {
		statusCode: 200,
		body: JSON.stringify({
			message: "This application has been successfully withdrawn",
			// response: data,
		}),
	};
};
