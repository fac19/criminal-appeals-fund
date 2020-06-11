import React from "react";
import fetch from "../utils/fetch";

const FakePage = () => {
	const handleClick = () => {
		fetch().then(console.log);
	};

	return (
		<>
			<h1>Fake test</h1>
			<button onClick={handleClick}>FETCH</button>
		</>
	);
};

export default FakePage;
