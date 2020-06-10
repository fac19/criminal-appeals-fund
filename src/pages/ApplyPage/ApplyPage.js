import React from "react";
import { NavbarLoggedIn } from "../../components/Navbar/Navbar";
import { Button, MobileStepper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Apply0, Apply1, Apply2 } from "../../components/Apply/Apply";
// import { postFile } from "../../utils/cloudinary";
import { Form } from "../../StyledComponents/StyledComponents.style";

const useStyles = makeStyles({
	root: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
	},
});

const ApplyPage = () => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const [form, updateForm] = React.useState({ merit_url: "" });

	const handleNext = (event) => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		//post form to airtable
	};

	return (
		<>
			<NavbarLoggedIn />
			<h1>Apply</h1>

			<Form onSubmit={handleSubmit}>
				<MobileStepper
					variant="dots"
					steps={3}
					position="static"
					activeStep={activeStep}
					className={classes.root}
				/>
				{activeStep === 0 && <Apply0></Apply0>}
				{activeStep === 1 && <Apply1></Apply1>}
				{activeStep === 2 && <Apply2></Apply2>}
				{(activeStep === 1 || activeStep === 2) && (
					<Button variant="contained" color="primary" onClick={handleBack}>
						Back
					</Button>
				)}
				{activeStep === 0 && (
					<Button
						variant="contained"
						color="primary"
						onClick={handleBack}
						disabled>
						Back
					</Button>
				)}
				{(activeStep === 0 || activeStep === 1) && (
					<Button variant="contained" color="primary" onClick={handleNext}>
						Next
					</Button>
				)}
				{activeStep === 2 && (
					<Button variant="contained" color="primary" type="submit">
						Sign Up
					</Button>
				)}
			</Form>
		</>
	);
};

export default ApplyPage;
