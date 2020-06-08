import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Button, MobileStepper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
	SignUp0,
	SignUp1,
	SignUp2,
} from "../../components/SignUpForm/SignUpForm";
import { postFile } from "../../utils/cloudinary";

const useStyles = makeStyles({
	root: {
		maxWidth: 400,
		flexGrow: 1,
	},
});

const SignUpPage = () => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const [image, setImage] = React.useState({});
	const [form, updateForm] = React.useState({
		first_name: "",
		last_name: "",
		email: "",
		bar_number: "",
		image_url: "",
		password: "",
		repeatPassword: "",
	});

	const handleOnChange = (event) => {
		const { name, value } = event.target;
		updateForm({ ...form, [name]: value });
	};

	const handleUpload = (event) => {
		setImage(event.target.files[0]);
	};

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const uploadToCloud = (image) => {
		const reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onloadend = async () => {
			return await postFile(reader.result).then((data) => {
				updateForm({ ...form, image_url: data.url });
			});
		};
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		uploadToCloud(image);
		//post form to airtable
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
			<form onSubmit={handleSubmit}>
				{activeStep === 0 && (
					<SignUp0 handleOnChange={handleOnChange} form={form} />
				)}
				{activeStep === 1 && (
					<SignUp1 handleOnChange={handleOnChange} form={form} />
				)}
				{activeStep === 2 && (
					<SignUp2 handleUpload={handleUpload} form={form} />
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
						Sign Up
					</Button>
				)}
			</form>
		</>
	);
};

export default SignUpPage;
