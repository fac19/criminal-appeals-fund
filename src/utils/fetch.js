const postAirtable = (method, table, request) => {
	return fetch("/.netlify/functions/airtable?table=" + table, {
		method: method,
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(request),
	}).then((response) => response.json());
};

const getAirtable = (method, table, id) => {
	return fetch("/.netlify/functions/airtable?table=" + table + "&user=" + id, {
		method: method,
		headers: {
			"Content-Type": "application/json",
		},
	}).then((response) => response.json());
};

export { postAirtable, getAirtable };
