import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},
	backButton: {
		marginRight: theme.spacing(1),
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},

	li: {
		listStyleType: "none",
	},
}));

const ApplicationCard = () => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const steps = ["Stage 1", "Stage 2", "Stage 3", "Stage 4"];

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	return (
		<div className={classes.root}>
			<Stepper activeStep={activeStep} alternativeLabel>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			<ul className={classes.li}>
				<li>Stage 1: Your application satisfies the criteria</li>
				<li>Stage 2: Your application has been selected for funding</li>
				<li>
					Stage 3: You will need to generate an invoice to receive your funding
				</li>
				<li>Stage 4: Your application is awaiting funding</li>
			</ul>
			<Button
				disabled={activeStep === 0}
				onClick={handleBack}
				className={classes.backButton}>
				Back
			</Button>
			<Button
				disabled={activeStep === 4}
				variant="contained"
				color="primary"
				onClick={handleNext}>
				{activeStep === steps.length - 1 ? "Finish" : "Next"}
			</Button>
			{activeStep === 2 && (
				<Button variant="contained" color="secondary">
					Generate Invoice
				</Button>
			)}
			{activeStep === 4 && <h3>Funded</h3>}
		</div>
	);
};

export { ApplicationCard };
