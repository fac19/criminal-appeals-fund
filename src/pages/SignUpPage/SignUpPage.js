import React, { useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Button, MobileStepper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, Redirect } from "react-router-dom";
import {
	SignUp0,
	SignUp1,
	SignUp2,
} from "../../components/SignUpForm/SignUpForm";
import { postFile } from "../../utils/cloudinary";
import { Form } from "../../StyledComponents/StyledComponents.style";
import { ButtonList } from "./SignUpPage.style";
import { postAirtable } from "../../utils/fetch";
import { UserContext } from "../../Context";
import { beginUpload } from "../../utils/cloudinary";
import { CloudinaryContext, Image } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from "../../utils/cloudinary";
import GoTrue from "gotrue-js";

//Netlify Go True
const auth = new GoTrue({
	APIUrl: "https://criminal-appeals-fund.netlify.app/.netlify/identity",
	audience: "",
	setCookie: false,
});

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
	const history = useHistory();
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const [errorMessage, setErrorMessage] = React.useState(false);
	const [image, setImage] = React.useState(null);
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
	const beginUpload = (tag) => {
		const uploadOptions = {
			cloudName: "dgc9b8ti3",
			tags: [tag],
			uploadPreset: "upload",
		};

		openUploadWidget(uploadOptions, (error, photos) => {
			if (!error) {
				console.log(photos);
				if (photos.event === "success") {
					setImages([...photos, photos.info.public_id]);
				}
			} else {
				console.log(error);
			}
		});
	};

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

	async function readFileAsDataURL(file) {
		let convertedFile = await new Promise((resolve) => {
			let fileReader = new FileReader();
			fileReader.onloadend = (e) => resolve(fileReader.result);
			fileReader.readAsDataURL(file);
		});

		return convertedFile;
	}

	// const uploadToCloud = async (image) => {
	// 	return readFileAsDataURL(image).then(async (file) => {
	// 		const upload = await postFile(file);
	// 		updateForm({ ...form, image_url: upload.url });
	// 	});
	// };

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (image) {
			// await uploadToCloud(image).catch(console.error);
			// await uploadFileHandler(event).catch(console.error);
			await beginUpload.catch(console.error);
		} else {
			setErrorMessage(true);
		}
	};

	React.useEffect(() => {
		if (form.image_url !== "") {
			postAirtable("POST", "applicants", form).then((response) => {
				const userObj = response.response[0];
				const user = { id: userObj.id, name: userObj.name };
				setUser(user);
				history.push("/profile");
			});
		}
	}, [form, setUser, history]);

	return (
		<>
			<button onClick={() => beginUpload()}>Upload Image</button>
			{images.map((i) => (
				<Image key={i} publicId={i} fetch-format="auto" quality="auto" />
			))}
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
					{activeStep === 2 && (
						<Button
							className={classes.signUpButton}
							variant="contained"
							color="primary"
							type="submit">
							Sign Up
						</Button>
					)}
				</ButtonList>
			</Form>
		</>
	);
};

export default SignUpPage;
