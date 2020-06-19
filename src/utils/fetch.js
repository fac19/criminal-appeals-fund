const postAirtable = (method, table, request) => {
	return fetch("/.netlify/functions/post?table=" + table, {
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

const checkSignUp = (method, table, request) => {
	return fetch("/.netlify/functions/checkSignUp?table=" + table, {
		method: method,
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(request),
	}).then((response) => response.json());
};

export {
	postAirtable,
	getAirtable,
	loginAirtable,
	updateAirtable,
	checkSignUp,
};
