import React from "react";
import { TextField, Button, makeStyles } from "@material-ui/core";

import { FormSection } from "../../StyledComponents/StyledComponents.style";

const useStyles = makeStyles((theme) => ({
	input: {
		width: "100%",
		marginBottom: "2rem",
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
	return (
		<>
			<FormSection>
				<h3>Please upload:</h3>
				<ul>
					<li>your practicing certificate</li>
					<li>
						a photo of you holding up official identification (e.g. passport,
						driving licence).
					</li>
				</ul>
				<Button data-cy="upload-img" variant="contained" onClick={beginUpload}>
					Upload verification
				</Button>
				{docsUploaded && (
					<p>Documents successfully uploaded. You are ready to sign up.</p>
				)}
			</FormSection>
		</>
	);
};

export { SignUp0, SignUp1, SignUp2 };
