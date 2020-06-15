const Airtable = require("airtable");
const bcrypt = require("bcryptjs");

exports.handler = async (request, context) => {
	const { AIRTABLE_KEY } = process.env;
	const table = request.queryStringParameters.table; //e.g. "Applications%20for%20funding"
	const requestBody = JSON.parse(request.body); // what we sent from front end const requestMethod = request.httpMethod;
	const base = new Airtable({
		apiKey: AIRTABLE_KEY, // secret on Netlify
	}).base("app7xH8ItDsTvcPhg"); // database

	let data = [];
	return await base(table)
		.select({ filterByFormula: `{email}="${requestBody.email}"` })
		.firstPage()
		.then((records) => {
			return records.forEach((record) => {
				// console.log("record", record);
				console.log(
					"compare",
					bcrypt.compare(requestBody.password, record.fields.password)
				);
				data.push({
					id: record.fields.id,
					fist_name: record.fields.first_name,
					isVerified: record.fields.isVerified,
				});
				return bcrypt.compare(requestBody.password, record.fields.password);
			});
		})
		.then((success) => {
			return success
				? {
						statusCode: 200,
						body: JSON.stringify({
							message:
								"The response data has been successfully retrieved to " +
								table +
								" table.",
							response: data,
						}),
				  }
				: {
						statusCode: 401,
						body: JSON.stringify({
							message:
								"There was a problem logging you in, please try again or sign up",
						}),
				  };
		})
		.catch((err) => {
			console.log(err.status); // only visible in netlify functions log when running in prod
		});
};
