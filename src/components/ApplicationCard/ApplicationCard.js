import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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

const ApplicationCard = ({ case_nam, status_name }) => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const steps = ["Stage 1", "Stage 2", "Stage 3", "Stage 4"];

	// get status from application and setActiveStep based on that

	// const handleNext = () => {
	// 	setActiveStep((prevActiveStep) => prevActiveStep + 1);
	// };

	// const handleBack = () => {
	// 	setActiveStep((prevActiveStep) => prevActiveStep - 1);
	// };

	// console.log(status_name);
	React.useEffect(() => {
		const statusUpdater = () => {
			switch (status_name[0]) {
				case "Upload":
					setActiveStep(0);
					break;
				case "Criteria met":
					setActiveStep(1);
					break;
				case "Success":
					setActiveStep(2);
					break;
				case "Invoice":
					setActiveStep(3);
					break;
				default:
					setActiveStep(0);
			}
		};
		statusUpdater();
		// const statusUpdater = () => {
		// 	if (status_name[0] === "Upload") {
		// 		// console.log("HEY" + status_name);
		// 		setActiveStep(1);
		// 	}
		// };
		// statusUpdater();
	}, []);

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
				<h1>{case_nam}</h1>
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
				<Button
					className={classes.statusButton}
					variant="contained"
					color="primary">
					Generate Invoice
				</Button>
				{/* )} */}
				{activeStep === 4 && <h3>Funded</h3>}
			</ApplicationInfo>
		</ApplicationCardContainer>
	);
};

export { ApplicationCard };
