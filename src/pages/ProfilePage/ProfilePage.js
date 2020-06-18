import React from "react";
import { NavbarLoggedIn } from "../../components/Navbar/Navbar";
import { ApplicationCard } from "../../components/ApplicationCard/ApplicationCard";
import { Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { getAirtable, updateAirtable } from "../../utils/fetch";
import {
	ApplicationSection,
	ApplicationPageHeader,
	ApplicantInfo,
	ApplicantName,
} from "./ProfilePage.style";

const useStyles = makeStyles((theme) => {});

const ProfilePage = () => {
	const classes = useStyles();
	const token = localStorage.getItem("user");
	localStorage.removeItem("case");
	localStorage.removeItem("status");
	localStorage.removeItem("appId");
	localStorage.removeItem("email");
	const [user, setUser] = React.useState([]);
	const [withdraw, setWithdraw] = React.useState(false);
	const [applicationsObject, setApplicationsObject] = React.useState([]);
	const [applicationMessage, setApplicationMessage] = React.useState(
		"Loading..."
	);

	const handleWithdraw = (event) => {
		const applicationId = event.target.id;
		updateAirtable("PUT", "applications", applicationId, "Withdrawn").then(
			() => {
				setWithdraw(!withdraw);
			}
		);
	};

	const makeApplicationCard = (applicationsObject) => {
		return applicationsObject.map((application) => {
			return (
				<ApplicationCard
					handleWithdraw={handleWithdraw}
					key={application.id}
					userEmail={user.email}
					{...application}
				/>
			);
		});
	};

	React.useEffect(() => {
		getAirtable("GET", "applications", token).then((data) => {
			if (data.response.length === 0) {
				setApplicationMessage(
					"You currently have no applications under review"
				);
			} else {
				setApplicationsObject(data.response);
			}
		});
	}, [token, withdraw]);

	React.useEffect(() => {
		getAirtable("GET", "applicants", token).then((data) => {
			setUser(data.response[0]);
		});
	}, [token]);

	return (
		<div>
			<NavbarLoggedIn />
			<ApplicationPageHeader>
				<ApplicantInfo>
					<ApplicantName data-cy="applicant-name">
						{user.length !== 0
							? `Hello, ${user.first_name} ${user.last_name}`
							: ""}
					</ApplicantName>
					{user.length !== 0 ? (
						user.isVerified ? (
							<Link to="/apply">
								<Button
									className={classes.applyButton}
									variant="contained"
									data-cy="funding"
									color="primary">
									Apply for funding
								</Button>
							</Link>
						) : (
							<h3>
								Your account is currently unverified, please check back in
								24hrs!
							</h3>
						)
					) : (
						""
					)}
				</ApplicantInfo>
			</ApplicationPageHeader>
			<ApplicationSection>
				{applicationsObject.length !== 0 ? (
					makeApplicationCard(applicationsObject)
				) : (
					<h2>{applicationMessage}</h2>
				)}
			</ApplicationSection>
		</div>
	);
};

export default ProfilePage;
