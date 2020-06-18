import React from "react";
import { TextField, Button, makeStyles } from "@material-ui/core";

import {
	VerificationInfoList,
	VerificationInfoListItem,
	VerificationSubtitle,
} from "./SignUpForm.style";

import {
	FormSection,
	UploadSuccess,
} from "../../StyledComponents/StyledComponents.style";

const useStyles = makeStyles((theme) => ({
	input: {
		width: "100%",
		marginBottom: "2rem",
	},
	uploadButton: {
		margin: "0 auto",
		marginBottom: "2rem",
		width: "50%",
		textTransform: "none",
		fontFamily: "IBM Plex Serif, serif",
		fontSize: "1.1rem",
	},
}));

const SignUp0 = ({ handleOnChange, form, errorMessage }) => {
	const classes = useStyles();
	const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return (
		<>
			<FormSection>
				<TextField
					className={classes.input}
					error={errorMessage.length !== 0 && form.first_name === ""}
					id="firstName"
					name="first_name"
					value={form.first_name}
					label="First Name"
					variant="outlined"
					autoFocus
					onChange={handleOnChange}
					type="text"
					required
				/>
				<TextField
					className={classes.input}
					error={errorMessage.length !== 0 && form.last_name === ""}
					id="lastName"
					name="last_name"
					value={form.last_name}
					label="Last Name"
					variant="outlined"
					onChange={handleOnChange}
					type="text"
					required
				/>
				<TextField
					className={classes.input}
					error={
						errorMessage.length !== 0 &&
						(form.email === "" || !emailRegex.test(form.email))
					}
					id="email"
					name="email"
					value={form.email}
					label="Email"
					variant="outlined"
					helperText={
						errorMessage && (form.email === "" || !emailRegex.test(form.email))
							? "This field must be a valid email address"
							: ""
					}
					onChange={handleOnChange}
					type="email"
					required
				/>
				<TextField
					className={classes.input}
					error={errorMessage.length !== 0 && form.bar_number === ""}
					id="barNumber"
					name="bar_number"
					value={form.bar_number}
					label="Bar Number"
					variant="outlined"
					onChange={handleOnChange}
					type="number"
					required
				/>
			</FormSection>
		</>
	);
};

const SignUp1 = ({
	handleOnChange,
	form,
	errorMessage,
	handleRepeatPasswordChange,
	repeatPassword,
}) => {
	const classes = useStyles();

	return (
		<>
			<FormSection>
				<TextField
					className={classes.input}
					error={
						errorMessage.length !== 0 &&
						(form.password === "" || form.password !== repeatPassword)
					}
					id="password"
					name="password"
					value={form.password}
					label="Password"
					variant="outlined"
					onChange={handleOnChange}
					type="Password"
					data-cy="signup-password"
					autoFocus
					required
				/>
				<TextField
					className={classes.input}
					id="repeatPassword"
					name="repeat_password"
					error={
						errorMessage.length !== 0 &&
						(repeatPassword === "" || form.password !== repeatPassword)
					}
					helperText={errorMessage ? "Please make sure passwords match" : ""}
					value={form.repeat_password}
					label="Repeat Password"
					variant="outlined"
					onChange={handleRepeatPasswordChange}
					type="Password"
					data-cy="signup-password-repeat"
					required
				/>
			</FormSection>
		</>
	);
};

const SignUp2 = ({ beginUpload, docsUploaded }) => {
	const classes = useStyles();

	return (
		<>
			<FormSection>
				<VerificationSubtitle>
					Please upload the following documents:
				</VerificationSubtitle>
				<VerificationInfoList>
					<VerificationInfoListItem>
						1: Your practicing certificate
					</VerificationInfoListItem>
					<VerificationInfoListItem>
						2: A photo of you holding up official identification (e.g. passport,
						driving licence).
					</VerificationInfoListItem>
				</VerificationInfoList>
				<Button
					className={classes.uploadButton}
					variant="contained"
					onClick={beginUpload}
					data-cy="upload-img">
					Upload verification
				</Button>
				{docsUploaded && (
					<UploadSuccess>
						Documents successfully uploaded. You are ready to sign up.
					</UploadSuccess>
				)}
			</FormSection>
		</>
	);
};

export { SignUp0, SignUp1, SignUp2 };
