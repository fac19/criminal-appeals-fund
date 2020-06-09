import React from "react";
import { NavbarLoggedIn } from "../../components/Navbar/Navbar";
import { Button } from "@material-ui/core";

const ProfilePage = () => {
	return (
		<div>
			<NavbarLoggedIn />
			<h1>Applicant's profile page</h1>
			<h2>Larry Bird</h2>
			<Button href="/apply">Apply for funding</Button>
		</div>
	);
};

export default ProfilePage;
