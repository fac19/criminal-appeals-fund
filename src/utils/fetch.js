import { responsiveFontSizes } from "@material-ui/core";

const postAirtable = (method, table, request) => {
	return fetch("/.netlify/functions/airtable?table=" + table, {
		method: method,
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(request),
	}).then((response) => response.json());
};

const getAirtable = (method, table, token) => {
	return fetch(
		"/.netlify/functions/airtable?table=" + table + "&token=" + token,
		{
			method: method,
			headers: {
				"Content-Type": "application/json",
			},
		}
	).then((response) => response.json());
};

const loginAirtable = (method, table, request) => {
	return fetch("/.netlify/functions/login?table=" + table, {
		method: method,
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(request),
	}).then((response) => response.json());
};

// need to add options to update 3 Upload documents and 5 Invoice
const updateAirtable = (method, table, applicationId, status) => {
	return fetch(
		"/.netlify/functions/update?table=" +
			table +
			"&applicationId=" +
			applicationId +
			"&status=" +
			status,
		{
			method: method,
			headers: {
				"Content-Type": "application/json",
			},
		}
	).then((response) => response.json());
};

export { postAirtable, getAirtable, loginAirtable, updateAirtable };
