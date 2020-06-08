async function postFile(file) {
	const fetchObject = {
		method: "POST",
		headers: { "content-type": "application/json" },
		body: JSON.stringify({
			file: file,
			upload_preset: "upload",
		}),
	};
	const cloudURL = "https://api.cloudinary.com/v1_1/dgc9b8ti3/auto/upload";
	const response = await fetch(cloudURL, fetchObject);
	return await response.json();
}

export { postFile };
