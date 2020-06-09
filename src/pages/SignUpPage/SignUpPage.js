import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Button, MobileStepper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
	SignUp0,
	SignUp1,
	SignUp2,
} from "../../components/SignUpForm/SignUpForm";
import { postFile } from "../../utils/cloudinary";
import { Form } from "../../StyledComponents/StyledComponents.style";

const useStyles = makeStyles({
	root: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
	},
});

const SignUpPage = () => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const [errorMessage, setErrorMessage] = React.useState(false);
	const [image, setImage] = React.useState({});
	const [form, updateForm] = React.useState({
		first_name: "",
		last_name: "",
		email: "",
		bar_number: "",
		image_url: "",
		password: "",
		repeat_password: "",
	});

	const handleOnChange = (event) => {
		const { name, value } = event.target;
		updateForm({ ...form, [name]: value });
	};

	const handleUpload = (event) => {
		setImage(event.target.files[0]);
	};

	const handleNext = (event) => {
		if (
			activeStep === 0 &&
			form.first_name !== "" &&
			form.last_name !== "" &&
			form.bar_number !== "" &&
			form.email !== "" &&
			form.email.includes("@")
		) {
			setErrorMessage(false);
			setActiveStep((prevActiveStep) => prevActiveStep + 1);
		} else if (
			activeStep === 1 &&
			form.password !== "" &&
			form.repeat_password !== ""
		) {
			setErrorMessage(false);
			setActiveStep((prevActiveStep) => prevActiveStep + 1);
		} else {
			setErrorMessage(true);
		}
	};

	const handleBack = () => {
		setErrorMessage(false);
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
		if (form.image_url === "") {
			setErrorMessage(true);
		} else {
			setErrorMessage(false);
			uploadToCloud(image);
		}
		//post form to airtable
	};

	return (
		<>
			<Navbar />
			<Form onSubmit={handleSubmit}>
				<MobileStepper
					variant="dots"
					steps={3}
					position="static"
					activeStep={activeStep}
					className={classes.root}
				/>
				{activeStep === 0 && (
					<SignUp0
						handleOnChange={handleOnChange}
						form={form}
						errorMessage={errorMessage}
					/>
				)}
				{activeStep === 1 && (
					<SignUp1
						handleOnChange={handleOnChange}
						form={form}
						errorMessage={errorMessage}
					/>
				)}
				{activeStep === 2 && (
					<SignUp2
						handleUpload={handleUpload}
						form={form}
						errorMessage={errorMessage}
					/>
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
			</Form>
		</>
	);
};

export default SignUpPage;
