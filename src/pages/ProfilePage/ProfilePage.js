import React from "react";
import { NavbarLoggedIn } from "../../components/Navbar/Navbar";
import { ApplicationCard } from "../../components/ApplicationCard/ApplicationCard";
import { UserContext } from "../../Context";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const ProfilePage = () => {
	const [user, setUser] = React.useContext(UserContext);
	return (
		<div>
			<NavbarLoggedIn />
			<h1>Applicant's profile page</h1>
			<h2>Larry Bird</h2>
			<Button>
				<Link to="/apply">Apply for funding</Link>
			</Button>
			<ApplicationCard />
		</div>
	);
};

export default ProfilePage;
