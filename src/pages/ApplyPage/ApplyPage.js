import React from "react";
import { NavbarLoggedIn } from "../../components/Navbar/Navbar";
import { Button, MobileStepper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Apply0, Apply1, Apply2 } from "../../components/Apply/Apply";
import { Form } from "../../StyledComponents/StyledComponents.style";
import { postFile } from "../../utils/cloudinary";
import { useHistory } from "react-router-dom";
import fetchAirtable from "../../utils/fetch";
import { UserContext } from "../../Context";

const useStyles = makeStyles({
	root: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
	},
});

const ApplyPage = () => {
	// const [user, setUser] = React.useContext(UserContext);
	const history = useHistory();
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const [form, updateForm] = React.useState({
		application_url: "",
		case_name: "",
		status_id: ["recHOTyA7teTAoYHc"],
		date_opened: "",
		user_id: ["recazQW1JnmB6CxAy"],
	});
	const [checked, setChecked] = React.useState(false);
	const [errorMessage, setErrorMessage] = React.useState("");
	const [file, setFile] = React.useState(null);

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

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		updateForm({ ...form, [name]: value });
	};

	const handleUpload = (event) => {
		setFile(event.target.files[0]);
	};

	async function readFileAsDataURL(file) {
		let convertedFile = await new Promise((resolve) => {
			let fileReader = new FileReader();
			fileReader.onloadend = (e) => resolve(fileReader.result);
			fileReader.readAsDataURL(file);
		});

		return convertedFile;
	}

	const uploadToCloud = async (pdf) => {
		return readFileAsDataURL(pdf).then(async (file) => {
			const upload = await postFile(file);
			console.log(upload.url);
			updateForm({ ...form, application_url: upload.url });
			// return upload.url;
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (file) {
			uploadToCloud(file);
		} else {
			setErrorMessage("Please upload your application document");
		}
	};

	React.useEffect(() => {
		if (form.application_url !== "") {
			fetchAirtable("POST", "applications", form).then((response) => {
				console.log(response);
				history.push("/profile");
			});
		}
	}, [form, history]);

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
						errorMessage={errorMessage}
						form={form}
						handleInputChange={handleInputChange}></Apply2>
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
