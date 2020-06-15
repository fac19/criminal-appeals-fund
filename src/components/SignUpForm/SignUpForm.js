import React from "react";
import { TextField, Button, makeStyles } from "@material-ui/core";
// import UploadFileHandler from "../../utils/cloudinary";

import {
	ErrorText,
	FormSection,
} from "../../StyledComponents/StyledComponents.style";

const useStyles = makeStyles((theme) => ({
	input: {
		width: "100%",
		marginBottom: "2rem",
	},
}));

const SignUp0 = ({ handleOnChange, form, errorMessage }) => {
	const classes = useStyles();

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
					// helperText={errorMessage ? "Please fill out this field" : ""}
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
					// helperText={errorMessage ? "Please fill out this field" : ""}
					onChange={handleOnChange}
					type="text"
					required
				/>
				<TextField
					className={classes.input}
					error={errorMessage && !form.email.includes("@")}
					id="email"
					name="email"
					value={form.email}
					label="Email"
					variant="outlined"
					helperText={
						errorMessage ? "This field must be a valid email address" : ""
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
					// helperText={errorMessage ? "Please fill out this field" : ""}
					onChange={handleOnChange}
					type="number"
					required
				/>
			</FormSection>
			<ErrorText>
				{errorMessage ? "Please fill in the required fields" : ""}
			</ErrorText>
		</>
	);
};

const SignUp1 = ({ handleOnChange, form, errorMessage }) => {
	const classes = useStyles();

	return (
		<>
			<FormSection>
				<TextField
					className={classes.input}
					error={errorMessage}
					helperText={errorMessage ? "Please fill out this field" : ""}
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
				{/* <TextField
				className={classes.input}
				id="repeatPassword"
				name="repeat_password"
				error={errorMessage}
				helperText={errorMessage ? "Please fill out this field" : ""}
				value={form.repeat_password}
				label="Repeat Password"
				variant="outlined"
				onChange={handleOnChange}
				type="Password"
				required
			/> */}
			</FormSection>
		</>
	);
};

const SignUp2 = ({ handleUpload, form, errorMessage }) => {
	return (
		<>
			<FormSection>
				{/* <Button variant="contained" component="label" onChange={handleUpload}> */}
				<Button variant="contained" component="label" onChange={handleUpload}>
					Upload File
					<input type="file" style={{ display: "none" }} />
				</Button>
				{/* <UploadFileHandler /> */}
				<ErrorText>
					{errorMessage ? "Please upload a form of identification" : ""}
				</ErrorText>
			</FormSection>
		</>
	);
};

export { SignUp0, SignUp1, SignUp2 };
