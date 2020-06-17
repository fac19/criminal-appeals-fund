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
	const [isSuccessful, setIsSuccesful] = React.useState(false);
	const steps = ["Stage 1", "Stage 2", "Stage 3", "Stage 4"];

	React.useEffect(() => {
		const statusUpdater = () => {
			// console.log("console: " + status_name);
			switch (status_name[0]) {
				case "Criteria met":
					setActiveStep(0);
					break;
				case "Success":
					setActiveStep(1);
					break;
				case "Invoice":
					setActiveStep(2);
					break;
				case "Successful close":
					setActiveStep(-1);
					setIsSuccesful(false);
					break;
				case "Unsuccessful close":
					setActiveStep(-1);
					setIsSuccesful(false);
					break;
				default:
					setActiveStep(0);
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
					<li>Stage 1: Your application satisfies the criteria</li>
					<li>Stage 2: Your application has been selected for funding</li>
					<li>
						Stage 3: You will need to generate an invoice to receive your
						funding
					</li>
					<li>Stage 4: Your application is awaiting funding</li>
				</ApplicationStageList>
				{/* {activeStep !== 0 && (
					<Button
						disabled={activeStep === 0}
						onClick={handleBack}
						className={classes.backButton}>
						Back
					</Button>
				)}
				<Button
					disabled={activeStep === 4}
					variant="contained"
					color="primary"
					onClick={handleNext}>
					{activeStep === steps.length - 1 ? "Finish" : "Next"}
				</Button> */}
				{/* {activeStep === 2 && ( */}
				{activeStep === 2 && (
					<>
						<Button
							className={classes.statusButton}
							variant="contained"
							color="primary">
							Generate Invoice
						</Button>
						<Button
							className={classes.statusButton}
							variant="contained"
							color="secondary">
							Withdraw Case
						</Button>
					</>
				)}
				{activeStep === 0 && (
					<>
						<h3>Criteria met</h3>
						<Button
							className={classes.statusButton}
							variant="contained"
							color="secondary">
							Withdraw Case
						</Button>
					</>
				)}

				{activeStep === 1 && (
					<>
						<h3>Selected for funding</h3>
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
						<Button
							className={classes.statusButton}
							variant="contained"
							color="secondary">
							Withdraw Case
						</Button>
					</>
				)}
				{activeStep === -1 && (
					<Button
						className={classes.statusButton}
						variant="contained"
						color="secondary">
						Withdraw Case
					</Button>
				)}
			</ApplicationInfo>
		</ApplicationCardContainer>
	);
};

export { ApplicationCard };
