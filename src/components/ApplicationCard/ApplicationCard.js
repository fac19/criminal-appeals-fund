import React from "react";
import {
	makeStyles,
	// MuiThemeProvider,
	// createMuiTheme,
} from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import {
	ApplicationCardContainer,
	ApplicationStageList,
	ApplicationInfo,
} from "./ApplicationCard.style";

const useStyles = makeStyles((theme) => ({
	stepper: {
		borderRadius: "1.5rem",
		paddingLeft: "0",
		paddingRight: "0",
		paddingBottom: "0.5rem",
	},
	backButton: {
		marginRight: theme.spacing(1),
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
	statusButton: {
		width: "11rem",
		height: "3rem",
		margin: "2rem",
	},
	// withdrawn : {
	// 	backgroundColor: 'lightgrey',
	// 	opacity: '0.7',
	// },
	// successful : {
	// 	backgroundColor: '#4BB543',
	// 	opacity: '0.7',
	// },
	// unsuccessful : {
	// 	backgroundColor: '#ff726f',
	// 	opacity: '0.7',
	// }
}));

const ApplicationCard = ({
	handleWithdraw,
	id,
	case_name,
	status_name,
	userEmail,
}) => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const [userAction, setUserAction] = React.useState(false);
	const steps = ["Stage 1", "Stage 2", "Stage 3", "Stage 4"];
	const history = useHistory();

	const handleClick = (event) => {
		event.preventDefault();
		localStorage.setItem("case", case_name);
		localStorage.setItem("appId", id);
		localStorage.setItem("status", status_name);
		localStorage.setItem("email", userEmail);
		history.push("/addinfo");
	};

	React.useEffect(() => {
		const statusUpdater = () => {
			switch (status_name[0]) {
				case "Application submitted":
					setActiveStep(0);
					setUserAction(false);
					break;
				case "Criteria met":
					setActiveStep(1);
					setUserAction(true);
					break;
				case "Upload documents":
					setActiveStep(1);
					setUserAction(false);
					break;
				case "Success":
					setActiveStep(2);
					setUserAction(true);
					break;
				case "Invoice":
					setActiveStep(2);
					setUserAction(false);
					break;
				case "Successful close":
					setActiveStep(3);
					setUserAction(false);
					break;
				case "Unsuccessful close":
					setActiveStep(-1);
					setUserAction(false);
					break;
				case "Withdrawn":
					setActiveStep(-2);
					setUserAction(false);
					break;
				default:
					setActiveStep(-1);
			}
		};
		statusUpdater();
	}, [status_name]);

	return (
		<ApplicationCardContainer>
			<Stepper
				className={classes.stepper}
				activeStep={activeStep}
				alternativeLabel>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>

			<ApplicationInfo>
				<h1>{case_name}</h1>
				<ApplicationStageList>
					<li>Stage 1: Application submitted</li>
					<li>Stage 2: Application satisfies the criteria</li>
					<li>Stage 3: Final approval</li>
					<li>Stage 4: Funding processed</li>
				</ApplicationStageList>

				{activeStep === 0 && (
					<>
						<h3>Application under review</h3>
						<button
							onClick={handleWithdraw}
							className={classes.statusButton}
							id={id}>
							Withdraw Case
						</button>
					</>
				)}

				{activeStep === 1 && userAction && (
					<>
						<Button
							className={classes.statusButton}
							variant="contained"
							color="primary"
							id={id}
							onClick={handleClick}>
							Upload supporting documents
						</Button>
						<button
							onClick={handleWithdraw}
							className={classes.statusButton}
							id={id}>
							Withdraw Case
						</button>
					</>
				)}
				{activeStep === 1 && !userAction && (
					<>
						<h3>Documents under review</h3>
						<button
							onClick={handleWithdraw}
							className={classes.statusButton}
							id={id}>
							Withdraw Case
						</button>
					</>
				)}
				{activeStep === 2 && userAction && (
					<>
						<Button
							className={classes.statusButton}
							variant="contained"
							color="primary"
							onClick={handleClick}>
							Upload Invoice
						</Button>
						<button
							onClick={handleWithdraw}
							className={classes.statusButton}
							id={id}>
							Withdraw Case
						</button>
					</>
				)}
				{activeStep === 2 && !userAction && (
					<>
						<h3>Awaiting funding</h3>
						<button
							onClick={handleWithdraw}
							className={classes.statusButton}
							id={id}>
							Withdraw Case
						</button>
					</>
				)}
				{activeStep === 3 && (
					<>
						<h3>Successful</h3>
						<div></div>
					</>
				)}
				{activeStep === -1 && (
					<>
						<h3>Application unsuccessful</h3>
						<div></div>
					</>
				)}
				{activeStep === -2 && (
					<>
						<h3>Application withdrawn</h3>
						<div></div>
					</>
				)}
			</ApplicationInfo>
		</ApplicationCardContainer>
	);
};

export { ApplicationCard };
