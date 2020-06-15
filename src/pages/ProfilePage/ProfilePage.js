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
	// const [user, setUser] = React.useContext(UserContext);
	const [applicationsObject, setApplicationsObject] = React.useState({});
	const dummyUser = { id: ["recazQW1JnmB6CxAy"] };

	// const makeApplicationCard = (applicationsObject) => {
	// 	return applicationsObject.map((case) => {
	//       return <ApplicationCard case={case} />;
	// 	});
	// };

	const makeApplicationCard = (applicationsObject) => {
		return applicationsObject.map((application) => {
			return <ApplicationCard {...application} />;
		});
	};

	React.useEffect(() => {
		getAirtable("GET", "applications", dummyUser.id).then((data) => {
			setApplicationsObject(data.response);
		});
	}, []);

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
				{makeApplicationCard(applicationsObject)}
			</ApplicationSection>
		</div>
	);
};

export default ProfilePage;
