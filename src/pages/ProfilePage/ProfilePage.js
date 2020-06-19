import React from "react";
import {
	NavbarLoggedIn,
	NavbarUnverified,
} from "../../components/Navbar/Navbar";
import { ApplicationCard } from "../../components/ApplicationCard/ApplicationCard";
import { Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { getAirtable, updateAirtable } from "../../utils/fetch";
import {
	ApplicationSection,
	ApplicationPageHeader,
	ApplicantName,
	ApplicationStageList,
	ApplicantDiv,
	ApplicantSubtitle,
} from "./ProfilePage.style";

const useStyles = makeStyles((theme) => ({
	applyButton: {
		minHeight: "3rem",
		marginRight: "2rem",
		textTransform: "none",
		fontSize: "1.1rem",
		fontFamily: "IBM Plex Serif, serif",
	},
	link: {
		textDecoration: "none",
	},
}));

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
			{user.isVerified ? <NavbarLoggedIn /> : <NavbarUnverified />}
			<ApplicationPageHeader data-cy="applicant-infos">
				<ApplicantName data-cy="applicant-name">
					{user.length !== 0
						? `Hello, ${user.first_name} ${user.last_name}`
						: ""}
				</ApplicantName>

				{user.length !== 0 ? (
					user.isVerified ? (
						<ApplicantDiv>
							<ApplicationStageList>
								<li>Stage 1: Application submitted</li>
								<li>Stage 2: Application satisfies the criteria</li>
								<li>Stage 3: Final approval</li>
								<li>Stage 4: Funding processed</li>
							</ApplicationStageList>
							<Link className={classes.link} to="/apply">
								<Button
									className={classes.applyButton}
									variant="contained"
									color="primary"
									data-cy="funding">
									Apply for funding
								</Button>
							</Link>
						</ApplicantDiv>
					) : (
						<ApplicantSubtitle>
							Your account is currently unverified, please check back in 24hrs!
						</ApplicantSubtitle>
					)
				) : (
					""
				)}
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
