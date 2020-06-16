import React, { useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Button, MobileStepper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import {
	SignUp0,
	SignUp1,
	SignUp2,
} from "../../components/SignUpForm/SignUpForm";
import { postFile } from "../../utils/cloudinary";
import { Form, ErrorText } from "../../StyledComponents/StyledComponents.style";
import { ButtonList } from "./SignUpPage.style";
import { postAirtable } from "../../utils/fetch";
import { UserContext } from "../../Context";
import { beginUpload } from "../../utils/cloudinary";
import { CloudinaryContext, Image } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from "../../utils/cloudinary";

const useStyles = makeStyles({
	root: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
	},
	signUpButton: {
		width: "40%",
	},
	hiddenButton: {
		visibility: "hidden",
	},
});

const SignUpPage = () => {
	const [user, setUser] = React.useContext(UserContext);
	const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const history = useHistory();
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const [errorMessage, setErrorMessage] = React.useState("");
	const [image, setImage] = React.useState(null);
	const [repeatPassword, setRepeatPassword] = React.useState("");
	const [form, updateForm] = React.useState({
		first_name: "",
		last_name: "",
		email: "",
		bar_number: "",
		image_url: "",
		isVerified: "no",
		password: "",
	});

	// to be removed
	const [images, setImages] = useState([]);
	const beginUpload = () => {
		const uploadOptions = {
			cloudName: "dgc9b8ti3",
			folder: form.email,
			uploadPreset: "upload",
		};

		openUploadWidget(uploadOptions, (error, photos) => {
			if (!error) {
				console.log(photos);
				if (photos.event === "success") {
					updateForm({ ...form, image_url: photos.info.url });
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
			setErrorMessage("");
			setActiveStep((prevActiveStep) => prevActiveStep + 1);
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

	async function readFileAsDataURL(file) {
		let convertedFile = await new Promise((resolve) => {
			let fileReader = new FileReader();
			fileReader.onloadend = (e) => resolve(fileReader.result);
			fileReader.readAsDataURL(file);
		});

		return convertedFile;
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (form.image_url) {
			postAirtable("POST", "applicants", form).then((response) => {
				const userObj = response.response[0];
				console.log(response.response[0]);
				const user = {
					id: userObj.id,
					first_name: userObj.first_name,
					isVerified: userObj.isVerified,
				};
				setUser(user);
				history.push("/profile");
			});
		} else {
			setErrorMessage("Please upload a form of identification");
		}
	};

	// React.useEffect(() => {
	// 	if (form.image_url) {
	// 		postAirtable("POST", "applicants", form).then((response) => {
	// 			const userObj = response.response[0];
	// 			console.log(response.response[0]);
	// 			const user = {
	// 				id: userObj.id,
	// 				first_name: userObj.first_name,
	// 				isVerified: userObj.isVerified,
	// 			};
	// 			setUser(user);
	// 			history.push("/profile");
	// 		});
	// 	}
	// }, [form, setUser, history]);

	const nextOnEnter = (event) => {
		if (event.keyCode === 13) {
			if (activeStep === 2) {
				handleSubmit();
			} else {
				handleNext();
			}
		}
	};

	React.useEffect(() => {
		window.addEventListener("keyup", nextOnEnter);
		return () => window.removeEventListener("keyup", nextOnEnter);
	}, []);

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
						beginUpload={beginUpload}
						images={images}
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
