const Airtable = require("airtable");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.handler = async (request, context) => {
	const { AIRTABLE_KEY } = process.env;
	const { AIRTABLE_BASE } = process.env;
	const { JWT_SECRET } = process.env;
	const table = request.queryStringParameters.table; //e.g. "Applications%20for%20funding"
	// what we sent from front end
	const requestMethod = request.httpMethod;
	const base = new Airtable({
		apiKey: AIRTABLE_KEY, // secret on Netlify
	}).base(`${AIRTABLE_BASE}`); // database

	let data = [];
	if (requestMethod === "POST") {
		const requestBody = JSON.parse(request.body);
		if (requestBody.password) {
			await bcrypt
				.genSalt(10)
				.then((salt) => bcrypt.hash(requestBody.password, salt))
				.then((hash) => (requestBody.password = hash));
		}
		await base(table)
			.create(requestBody)
			.then((record) => {
				if (table === "applicants") {
					const token = jwt.sign(
						{
							id: record.fields.id,
							first_name: record.fields.first_name,
							isVerified: record.fields.isVerified,
						},
						JWT_SECRET,
						{
							expiresIn: "24h",
						}
					);
					data.push({ token });
				} else {
					data.push({ name: record.fields.case_name });
				}
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
		const userToken = request.queryStringParameters.token;
		const tokenData = jwt.verify(userToken, JWT_SECRET);
		let view = "";
		let userId = "";
		if (table === "applications") {
			view = "All Cases";
			userId = "user_id";
		} else {
			view = "Grid view";
			userId = "id";
		}
		await base(table)
			.select({
				maxRecords: 100,
				view: `${view}`,
				filterByFormula: `${userId} = "${tokenData.id}"`,
			})
			.firstPage()
			.then((records) => {
				if (table === "applications") {
					records.forEach((record) => {
						data.push(record.fields);
					});
				} else {
					const userData = records[0].fields;
					data.push({
						first_name: userData.first_name,
						last_name: userData.last_name,
						isVerified: userData.isVerified,
						id: userData.id,
					});
				}
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
