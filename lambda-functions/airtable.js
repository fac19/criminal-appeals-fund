const Airtable = require("airtable");
const bcrypt = require("bcryptjs");

exports.handler = async (request, context) => {
	const { AIRTABLE_KEY } = process.env;
	const table = request.queryStringParameters.table; //e.g. "Applications%20for%20funding"
	const requestBody = JSON.parse(request.body); // what we sent from front end
	const requestMethod = request.httpMethod;
	const userId = request.queryStringParameters.user;
	console.log("hello", userId);
	const base = new Airtable({
		apiKey: AIRTABLE_KEY, // secret on Netlify
	}).base("app7xH8ItDsTvcPhg"); // database

	if (requestBody.password) {
		await bcrypt
			.genSalt(10)
			.then((salt) => bcrypt.hash(requestBody.password, salt))
			.then((hash) => (requestBody.password = hash));
	}

	let data = [];
	if (requestMethod === "POST") {
		await base(table)
			.create(requestBody)
			.then((record) => {
				table === "applicants"
					? data.push({
							id: record.fields.id,
							first_name: record.fields.first_name,
							isVerified: record.fields.isVerified,
					  })
					: data.push({ name: record.fields.case_name });
			})
			.catch(console.error);
		return {
			statusCode: 201,
			body: JSON.stringify({
				message:
					"The response data has been successfully added to " +
					table +
					" table.",
				response: data,
			}),
		};
	} else if (requestMethod === "GET") {
		await base(table)
			.select({
				maxRecords: 100,
				view: "Grid view",
			})
			.firstPage()
			.then((records) => {
				records.forEach((record) => {
					data.push(record.fields);
				});
			})
			.catch((err) => {
				console.log(err.status); // only visible in netlify functions log when running in prod
			});
		return {
			statusCode: 200,
			body: JSON.stringify({
				message:
					"The response data has been successfully retrieved to " +
					table +
					" table.",
				response: data,
			}),
		};
	}
};
