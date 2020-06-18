const Airtable = require("airtable");
const jwt = require("jsonwebtoken");

exports.handler = async (request, context) => {
	const { AIRTABLE_KEY } = process.env;
	const { AIRTABLE_BASE } = process.env;
	const { JWT_SECRET } = process.env;
	const table = request.queryStringParameters.table;
	const base = new Airtable({
		apiKey: AIRTABLE_KEY,
	}).base(`${AIRTABLE_BASE}`);

	let data = [];
	const userToken = request.queryStringParameters.token;
	const tokenData = jwt.verify(userToken, JWT_SECRET);
	let view = "";
	let userId = "";
	if (table === "applications") {
		view = "full_view";
		userId = "user_id";
	} else {
		view = "full_view";
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
					email: userData.email,
					isVerified: userData.isVerified,
					id: userData.id,
				});
			}
		})
		.catch((err) => {
			console.log(err.status);
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
};
