import React from "react";
import { NavbarLoggedIn } from "../../components/Navbar/Navbar";
import { ApplicationCard } from "../../components/ApplicationCard/ApplicationCard";
import { UserContext } from "../../Context";
import { Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { getAirtable } from "../../utils/fetch";
import {
	ApplicationSection,
	ApplicationPageHeader,
	ApplicantInfo,
	ApplicantName,
} from "./ProfilePage.style";

const useStyles = makeStyles((theme) => {});

const ProfilePage = () => {
	const classes = useStyles();
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
			<ApplicationPageHeader>
				<ApplicantInfo>
					<ApplicantName>Larry Bird</ApplicantName>
					<Link to="/apply">
						<Button
							className={classes.applyButton}
							variant="contained"
							color="primary">
							Apply for funding
						</Button>
					</Link>
				</ApplicantInfo>
			</ApplicationPageHeader>
			<ApplicationSection>
				<ApplicationCard />
			</ApplicationSection>
		</div>
	);
};

export default ProfilePage;
