import React from "react";
import { NavbarLoggedIn } from "../../components/Navbar/Navbar";
import { ApplicationCard } from "../../components/ApplicationCard/ApplicationCard";
import { UserContext } from "../../Context";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { getAirtable } from "../../utils/fetch";

const ProfilePage = () => {
	const [user, setUser] = React.useContext(UserContext);
	const dummyUser = { id: ["recazQW1JnmB6CxAy"] };

	React.useEffect(() => {
		if (user) {
			getAirtable("GET", "applications", dummyUser.id);
		}
	}, [user, dummyUser]);
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
