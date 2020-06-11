import React from "react";
import fetchAirtable from "../utils/fetch";

const FakePage = () => {
	const handleClick = () => {
		const fakeMethod = "POST";
		const fakeTable = "Applicants";
		const fakeRequest = {
			bar_number: "670010619",
			email: "chapman.rachel@example.com",
			date_submitted: Date(),
			first_name: "Rachel",
			last_name: "Chapman",
			isVerified: "no",
			image_url:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Sarah_Bolger_%2848484781976%29_%28cropped%29.jpg/800px-Sarah_Bolger_%2848484781976%29_%28cropped%29.jpg",
		};
		fetchAirtable(fakeMethod, fakeTable, fakeRequest).then(console.log);
	};

	return (
		<>
			<h1>Fake test</h1>
			<button onClick={handleClick}>FETCH</button>
		</>
	);
};

export default FakePage;
