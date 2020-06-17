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

	let data = [],
		success = false;
	await base(table)
		.select({ filterByFormula: `{email}="${requestBody.email}"` })
		.firstPage()
		.then(async (records) => {
			const airtableUser = records[0];
			success = await bcrypt.compare(
				requestBody.password,
				airtableUser.fields.password
			);
			if (success) {
				const token = jwt.sign(
					{
						id: airtableUser.fields.id,
						first_name: airtableUser.fields.first_name,
						isVerified: airtableUser.fields.isVerified,
					},
					JWT_SECRET,
					{
						expiresIn: "24h",
					}
				);
				data.push({ token });
			}
		})
		.catch((err) => {
			console.log(err.status); // only visible in netlify functions log when running in prod
		});
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
			statusCode: 200,
			body: JSON.stringify({
				message: "You have been logged in successfully",
				response: data,
			}),
		};
	}
};
