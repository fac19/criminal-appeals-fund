const Airtable = require("airtable");

exports.handler = async (request, context) => {
	const { AIRTABLE_KEY } = process.env;
	const { AIRTABLE_BASE } = process.env;
	const table = request.queryStringParameters.table; //e.g. "Applications%20for%20funding"
	// what we sent from front end
	const id = request.queryStringParameters.applicationId;
	const status = request.queryStringParameters.status;
	const statusToUpdate =
		status === "Criteria met"
			? "recsRFqoiqbRXqS6Y"
			: status === "Success"
			? "reclNR9Tz81enCVKh"
			: "recFO2XAO0lavb6Bl";
	// update 3 Upload docs and 5 Invoice
	const base = new Airtable({
		apiKey: AIRTABLE_KEY, // secret on Netlify
	}).base(`${AIRTABLE_BASE}`); // database
	await base(table)
		.update([
			{
				id: id,
				fields: {
					status_id: [statusToUpdate],
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
