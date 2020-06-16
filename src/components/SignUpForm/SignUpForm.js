import React from "react";
import { TextField, Button, makeStyles } from "@material-ui/core";
// import UploadFileHandler from "../../utils/cloudinary";

import { FormSection } from "../../StyledComponents/StyledComponents.style";

const useStyles = makeStyles((theme) => ({
	input: {
		width: "100%",
		marginBottom: "2rem",
	},
}));

const SignUp0 = ({ handleOnChange, form, errorMessage }) => {
	const classes = useStyles();
	const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return (
		<>
			<FormSection>
				<TextField
					className={classes.input}
					error={errorMessage && form.first_name === ""}
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
					error={errorMessage && form.last_name === ""}
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
						errorMessage && (form.email === "" || !emailRegex.test(form.email))
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
					error={errorMessage && form.bar_number === ""}
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
						errorMessage &&
						(form.password === "" || form.password !== repeatPassword)
					}
					id="password"
					name="password"
					value={form.password}
					label="Password"
					variant="outlined"
					onChange={handleOnChange}
					type="Password"
					autoFocus
					required
				/>
				<TextField
					className={classes.input}
					id="repeatPassword"
					name="repeat_password"
					error={
						errorMessage &&
						(repeatPassword === "" || form.password !== repeatPassword)
					}
					helperText={errorMessage ? "Please make sure passwords match" : ""}
					value={form.repeat_password}
					label="Repeat Password"
					variant="outlined"
					onChange={handleRepeatPasswordChange}
					type="Password"
					required
				/>
			</FormSection>
		</>
	);
};

const SignUp2 = ({ beginUpload, images, errorMessage }) => {
	return (
		<>
			<FormSection>
				<Button variant="contained" onClick={() => beginUpload()}>
					Upload Image
				</Button>
				{images.map((i) => (
					<img key={i} publicId={i} fetch-format="auto" quality="auto" />
				))}
			</FormSection>
		</>
	);
};

export { SignUp0, SignUp1, SignUp2 };
