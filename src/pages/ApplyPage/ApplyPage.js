import React from "react";
import { NavbarLoggedIn } from "../../components/Navbar/Navbar";
import { Button, MobileStepper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
	Apply0,
	Apply1,
	Apply2,
	Apply3,
	Apply4,
} from "../../components/Apply/Apply";
import {
	Form,
	FormSection,
	ButtonList,
	ErrorText,
} from "../../StyledComponents/StyledComponents.style";
// import { uploadFileHandler } from "../../utils/cloudinary";
import { useHistory } from "react-router-dom";
import { postAirtable } from "../../utils/fetch";
import { UserContext } from "../../Context";
import { openUploadWidget } from "../../utils/cloudinary";

const useStyles = makeStyles({
	root: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
	},
});

const ApplyPage = () => {
	const [user, setUser] = React.useContext(UserContext);
	const history = useHistory();
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const [form, updateForm] = React.useState({
		case_name: "",
		solicitor_name: "",
		counsel_name: "",
		court_name: "",
		case_stage: "",
		status_id: ["recHOTyA7teTAoYHc"],
		user_id: [user.id],
		application_merit: "",
		application_impact: "",
		docs_uploaded: false,
	});
	const [checked, setChecked] = React.useState(false);
	const [errorMessage, setErrorMessage] = React.useState("");
	// const [file, setFile] = React.useState(null);

	const beginUpload = () => {
		const uploadOptions = {
			cloudName: "dgc9b8ti3",
			folder: user.email + "-" + form.case_name,
			uploadPreset: "upload",
		};

		openUploadWidget(uploadOptions, (error, photos) => {
			if (!error) {
				if (photos.event === "success") {
					setErrorMessage("");
					updateForm({ ...form, docs_uploaded: true });
					console.log(form.docs_uploaded);
				}
			} else {
				console.log(error);
			}
		});
	};

	const handleNext = (event) => {
		if (activeStep === 1 && checked === false) {
			setErrorMessage(
				"Please confirm you have understood the funding guidelines"
			);
		} else if (
			activeStep === 2 &&
			form.case_name === "" &&
			form.solicitor_name === "" &&
			form.court_name === "" &&
			form.case_stage === ""
		) {
			setErrorMessage("Please make sure the required fields are complete");
		} else if (
			activeStep === 3 &&
			form.application_impact === "" &&
			form.application_merit === ""
		) {
			setErrorMessage("Please make sure the required fields are complete");
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

	// const handleUpload = (event) => {
	// 	setFile(event.target.files[0]);
	// };

	// async function readFileAsDataURL(file) {
	// 	let convertedFile = await new Promise((resolve) => {
	// 		let fileReader = new FileReader();
	// 		fileReader.onloadend = (e) => resolve(fileReader.result);
	// 		fileReader.readAsDataURL(file);
	// 	});

	// 	return convertedFile;
	// }

	// const uploadToCloud = async (pdf) => {
	// 	return readFileAsDataURL(pdf).then(async (file) => {
	// 		const upload = await postFile(file);
	// 		updateForm({ ...form, application_url: upload.url });
	// 		// return upload.url;
	// 	});
	// };

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(form);
		if (!form.docs_uploaded) {
			setErrorMessage("Please upload documents");
		} else {
			postAirtable("POST", "applications", form).then((response) => {
				console.log(response);
				history.push("/profile");
			});
		}
		// if (file) {
		// 	uploadToCloud(file);
		// } else {
		// 	setErrorMessage("Please upload your application document");
		// }
	};

	// React.useEffect(() => {
	// 	if (form.application_url !== "") {
	// 		postAirtable("POST", "applications", form).then((response) => {
	// 			console.log(response);
	// 			history.push("/profile");
	// 		});
	// 	}
	// }, [form, history]);

	return (
		<>
			<NavbarLoggedIn />

			<Form onSubmit={handleSubmit}>
				<MobileStepper
					variant="dots"
					steps={5}
					position="static"
					activeStep={activeStep}
					className={classes.root}
				/>
				<FormSection>
					{activeStep === 0 && <Apply0></Apply0>}
					{activeStep === 1 && (
						<Apply1
							checked={checked}
							setChecked={setChecked}
							errorMessage={errorMessage}></Apply1>
					)}
					{activeStep === 2 && (
						<Apply2
							errorMessage={errorMessage}
							form={form}
							handleInputChange={handleInputChange}></Apply2>
					)}
					{activeStep === 3 && (
						<Apply3
							errorMessage={errorMessage}
							handleInputChange={handleInputChange}
							form={form}></Apply3>
					)}
					{activeStep === 4 && (
						<Apply4
							handleInputChange={handleInputChange}
							form={form}
							beginUpload={beginUpload}></Apply4>
					)}
					<ButtonList>
						{activeStep !== 4 && (
							<Button variant="contained" color="primary" onClick={handleNext}>
								Next
							</Button>
						)}
						{activeStep === 4 && (
							<Button variant="contained" color="primary" type="submit">
								{/* // onClick={(e) => uploadFileHandler(e)}> */}
								Apply
							</Button>
						)}
						{activeStep !== 0 && (
							<Button
								disabled={activeStep === 0}
								variant="contained"
								onClick={handleBack}>
								Back
							</Button>
						)}
					</ButtonList>
					<ErrorText>{errorMessage ? errorMessage : ""}</ErrorText>
				</FormSection>
			</Form>
		</>
	);
};

export default ApplyPage;
