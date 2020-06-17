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
import { Link } from "react-router-dom";

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
}));

const ApplicationCard = ({ case_name, status_name }) => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const [userAction, setUserAction] = React.useState(false);
	const [isSuccessful, setIsSuccesful] = React.useState(false);
	const steps = ["Stage 1", "Stage 2", "Stage 3", "Stage 4"];

	React.useEffect(() => {
		const statusUpdater = () => {
			// console.log("console: " + status_name);
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
					setIsSuccesful(true);
					break;
				case "Unsuccessful close":
					setActiveStep(-1);
					setUserAction(false);
					setIsSuccesful(false);
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

	// const muiTheme = createMuiTheme({
	// 	overrides: {
	// 		MuiStepIcon: {
	// 			root: {
	// 				color: "#238823", // or 'rgba(0, 0, 0, 1)'
	// 				"&$active": {
	// 					color: "#238823",
	// 				},
	// 				"&$completed": {
	// 					color: "#238823",
	// 				},
	// 			},
	// 		},
	// 	},
	// });

	return (
		<ApplicationCardContainer>
			{/* {isSuccessful === true ? (
				<MuiThemeProvider theme={muiTheme}> */}
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
			{/* </MuiThemeProvider> */}

			<ApplicationInfo>
				<h1>{case_name}</h1>
				{/* <h4>{statusUpdater}</h4> */}
				<ApplicationStageList>
					<li>Stage 1: Application submitted</li>
					<li>Stage 2: Application satisfies the criteria</li>
					<li>Stage 3: Final approval</li>
					<li>Stage 4: Funding processed</li>
				</ApplicationStageList>

				{activeStep === 0 && (
					<>
						<h3>Application under review</h3>
						<Button
							className={classes.statusButton}
							variant="contained"
							color="secondary">
							Withdraw Case
						</Button>
					</>
				)}

				{activeStep === 1 && userAction && (
					<>
						<Link to="/addinfo">
							<Button
								className={classes.statusButton}
								variant="contained"
								color="primary">
								Upload supporting documents
							</Button>
						</Link>
						<Button
							className={classes.statusButton}
							variant="contained"
							color="secondary">
							Withdraw Case
						</Button>
					</>
				)}
				{activeStep === 1 && !userAction && (
					<>
						<h3>Documents under review</h3>
						<Button
							className={classes.statusButton}
							variant="contained"
							color="secondary">
							Withdraw Case
						</Button>
					</>
				)}
				{activeStep === 2 && userAction && (
					<>
						<Button
							className={classes.statusButton}
							variant="contained"
							color="primary">
							Upload Invoice
						</Button>
						<Button
							className={classes.statusButton}
							variant="contained"
							color="secondary">
							Withdraw Case
						</Button>
					</>
				)}
				{activeStep === 2 && !userAction && (
					<>
						<h3>Awaiting funding</h3>
						<Button
							className={classes.statusButton}
							variant="contained"
							color="secondary">
							Withdraw Case
						</Button>
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
