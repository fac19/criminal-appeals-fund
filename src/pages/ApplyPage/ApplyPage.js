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
import { useHistory } from "react-router-dom";
import { postAirtable } from "../../utils/fetch";
import { getAirtable } from "../../utils/fetch";
import { openUploadWidget } from "../../utils/cloudinary";

const useStyles = makeStyles({
	root: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
		margin: "1rem",
	},
	button: {
		width: "30%",
	},
});

const ApplyPage = () => {
	const [user, setUser] = React.useState({});
	const token = localStorage.getItem("user");
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
		user_email: [user.id],
		application_merit: "",
		application_impact: "",
	});
	const [docsUploaded, setDocsUploaded] = React.useState(false);
	const [checked, setChecked] = React.useState(false);
	const [errorMessage, setErrorMessage] = React.useState("");

	React.useEffect(() => {
		getAirtable("GET", "applicants", token).then((data) => {
			setUser(data.response[0]);
		});
	}, [token]);

	React.useEffect(() => {
		updateForm({ ...form, user_email: [user.id] });
	}, [user]);

	const beginUpload = () => {
		const uploadOptions = {
			cloudName: "dgc9b8ti3",
			folder: user.email,
			public_id: form.case_name + "/application",
			uploadPreset: "upload",
		};

		openUploadWidget(uploadOptions, (error, photos) => {
			if (!error) {
				if (photos.event === "success") {
					setErrorMessage("");
					setDocsUploaded(true);
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

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!docsUploaded) {
			setErrorMessage("Please upload documents");
		} else {
			postAirtable("POST", "applications", form).then((response) => {
				history.push("/profile");
			});
		}
	};

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
							docsUploaded={docsUploaded}
							handleInputChange={handleInputChange}
							form={form}
							beginUpload={beginUpload}></Apply4>
					)}
					<ButtonList>
						{activeStep !== 4 && (
							<Button
								className={classes.button}
								variant="contained"
								color="primary"
								onClick={handleNext}>
								Next
							</Button>
						)}
						{activeStep === 4 && (
							<Button
								className={classes.button}
								variant="contained"
								color="primary"
								type="submit">
								{/* // onClick={(e) => uploadFileHandler(e)}> */}
								Apply
							</Button>
						)}
						{activeStep !== 0 && (
							<Button
								className={classes.button}
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
