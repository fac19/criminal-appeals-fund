import React from "react";
import { NavbarLoggedIn } from "../../components/Navbar/Navbar";
import { Button, MobileStepper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Apply0, Apply1, Apply2 } from "../../components/Apply/Apply";
// import { postFile } from "../../utils/cloudinary";
import { Form } from "../../StyledComponents/StyledComponents.style";
import { postFile } from "../../utils/cloudinary";

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
	const [form, updateForm] = React.useState({ application_url: "" });
	const [checked, setChecked] = React.useState(false);
	const [errorMessage, setErrorMessage] = React.useState("");
	const [image, setImage] = React.useState(null);

	const handleNext = (event) => {
		if (activeStep === 1 && checked === false) {
			setErrorMessage(
				"Please confirm you have understood the funding guidelines"
			);
		} else {
			setErrorMessage("");
			setActiveStep((prevActiveStep) => prevActiveStep + 1);
		}
	};

	const handleBack = () => {
		setErrorMessage("");
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleUpload = (event) => {
		setImage(event.target.files[0]);
	};

	const uploadToCloud = (image) => {
		const reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onloadend = async () => {
			return await postFile(reader.result).then((data) => {
				updateForm({ ...form, application_url: data.url });
			});
		};
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (image) {
			uploadToCloud(image);
		} else {
			setErrorMessage("Please upload your application document");
		}
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
				{activeStep === 1 && (
					<Apply1
						checked={checked}
						setChecked={setChecked}
						errorMessage={errorMessage}></Apply1>
				)}
				{activeStep === 2 && (
					<Apply2
						handleUpload={handleUpload}
						errorMessage={errorMessage}></Apply2>
				)}
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
						Apply
					</Button>
				)}
			</Form>
		</>
	);
};

export default ApplyPage;
