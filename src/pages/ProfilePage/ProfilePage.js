import React from "react";
import { NavbarLoggedIn } from "../../components/Navbar/Navbar";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const ProfilePage = () => {
	return (
		<div>
			<NavbarLoggedIn />
			<h1>Applicant's profile page</h1>
			<h2>Larry Bird</h2>
			<Button>
				<Link to="/apply">Apply for funding</Link>
			</Button>
		</div>
	);
};

export default ProfilePage;
