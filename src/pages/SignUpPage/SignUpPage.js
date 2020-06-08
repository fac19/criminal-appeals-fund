import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Button, TextField, MobileStepper } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

const useStyles = makeStyles({
	root: {
		maxWidth: 400,
		flexGrow: 1,
	},
});

const SignUpPage = () => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	return (
		<>
			<Navbar />
			<MobileStepper
				variant="dots"
				steps={3}
				position="static"
				activeStep={activeStep}
				className={classes.root}
			/>
			{/* activeStep==1 ? {SignUpComponent1}
            <Button back handleClick=setActiveStep(activestep-1)/ >
            <Button next / > */}
		</>
	);
};

export default SignUpPage;
