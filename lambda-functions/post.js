const Airtable = require("airtable");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.handler = async (request, context) => {
	const { AIRTABLE_KEY } = process.env;
	const { AIRTABLE_BASE } = process.env;
	const { JWT_SECRET } = process.env;
	const table = request.queryStringParameters.table; //e.g. "Applications%20for%20funding"
	const requestBody = JSON.parse(request.body); // what we sent from front end const requestMethod = request.httpMethod;
	const base = new Airtable({
		apiKey: AIRTABLE_KEY, // secret on Netlify
	}).base(`${AIRTABLE_BASE}`); // database

	let data = [];
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
						email: record.fields.email,
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
	if (data.length === 0) {
		return {
			statusCode: 401,
			body: JSON.stringify({
				message:
					"There was a problem logging you in, please try again or sign up",
			}),
		};
	} else {
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
	}
};
