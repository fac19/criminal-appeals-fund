import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Button, MobileStepper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import {
	SignUp0,
	SignUp1,
	SignUp2,
} from "../../components/SignUpForm/SignUpForm";
import {
	Form,
	ErrorText,
	ButtonList,
} from "../../StyledComponents/StyledComponents.style";
import { postAirtable, checkSignUp } from "../../utils/fetch";
import { openUploadWidget } from "../../utils/cloudinary";

const useStyles = makeStyles({
	root: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
	},
	signUpButton: {
		width: "40%",
		textTransform: "none",
		fontFamily: "IBM Plex Serif, serif",
		fontSize: "1.1rem",
	},
	hiddenButton: {
		visibility: "hidden",
	},
});

const SignUpPage = () => {
	const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const history = useHistory();
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const [errorMessage, setErrorMessage] = React.useState("");
	const [repeatPassword, setRepeatPassword] = React.useState("");
	const [form, updateForm] = React.useState({
		first_name: "",
		last_name: "",
		email: "",
		bar_number: "",
		isVerified: false,
		password: "",
	});
	const [docsUploaded, setDocsUploaded] = React.useState(false);

	const beginUpload = () => {
		const uploadOptions = {
			cloudName: "dgc9b8ti3",
			folder: form.email,
			uploadPreset: "upload",
		};

		openUploadWidget(uploadOptions, (error, photos) => {
			if (!error) {
				if (photos.event === "success") {
					setDocsUploaded(true);
					setErrorMessage("");
				}
			} else {
				console.log(error);
			}
		});
	};

	const handleOnChange = (event) => {
		const { name, value } = event.target;
		setErrorMessage("");
		updateForm({ ...form, [name]: value });
	};

	const handleRepeatPasswordChange = (event) => {
		const { value } = event.target;
		setErrorMessage("");
		setRepeatPassword(value);
	};

	const handleNext = () => {
		if (
			activeStep === 0 &&
			form.first_name !== "" &&
			form.last_name !== "" &&
			form.bar_number !== "" &&
			emailRegex.test(form.email)
		) {
			checkSignUp("POST", "applicants", form.email).then((response) => {
				if (response.message.includes("unique")) {
					setErrorMessage("");
					setActiveStep((prevActiveStep) => prevActiveStep + 1);
				} else {
					setErrorMessage("Email address already exists!");
				}
			});
		} else if (
			activeStep === 1 &&
			form.password !== "" &&
			repeatPassword === form.password
		) {
			setErrorMessage("");
			setActiveStep((prevActiveStep) => prevActiveStep + 1);
		} else {
			setErrorMessage("Please make sure the required fields are complete");
		}
	};

	const handleBack = () => {
		setErrorMessage("");
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (docsUploaded) {
			postAirtable("POST", "applicants", form).then((response) => {
				const userToken = response.response[0];
				localStorage.setItem("user", userToken.token);
				history.push("/profile");
			});
		} else {
			setErrorMessage("Please upload a form of identification");
		}
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
						repeatPassword={repeatPassword}
						handleRepeatPasswordChange={handleRepeatPasswordChange}
						handleOnChange={handleOnChange}
						form={form}
						errorMessage={errorMessage}
					/>
				)}
				{activeStep === 2 && (
					<SignUp2
						docsUploaded={docsUploaded}
						beginUpload={beginUpload}
						form={form}
						errorMessage={errorMessage}
					/>
				)}
				<ButtonList>
					{(activeStep === 0 || activeStep === 1) && (
						<Button
							className={classes.signUpButton}
							variant="contained"
							color="primary"
							onClick={handleNext}>
							Next
						</Button>
					)}
					{activeStep === 2 && (
						<Button
							className={classes.signUpButton}
							variant="contained"
							color="primary"
							type="submit">
							Sign Up
						</Button>
					)}
					{(activeStep === 1 || activeStep === 2) && (
						<Button
							className={
								activeStep === 0 ? classes.hiddenButton : classes.signUpButton
							}
							variant="contained"
							onClick={handleBack}>
							Back
						</Button>
					)}
				</ButtonList>
				<ErrorText>{errorMessage ? errorMessage : ""}</ErrorText>
			</Form>
		</>
	);
};

export default SignUpPage;
