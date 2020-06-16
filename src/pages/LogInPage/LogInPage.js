import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Button, TextField, makeStyles } from "@material-ui/core";
import { Form, ErrorText } from "../../StyledComponents/StyledComponents.style";
import { useHistory } from "react-router-dom";

import { loginAirtable } from "../../utils/fetch";

// import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	logInButton: {
		width: "60%",
	},
	input: {
		width: "100%",
		marginBottom: "3rem",
	},
}));

const LogInPage = () => {
	const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const classes = useStyles();
	const history = useHistory();
	const [form, updateForm] = React.useState({ email: "", password: "" });
	const [errorMessage, setErrorMessage] = React.useState("");

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setErrorMessage("");
		updateForm({ ...form, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (
			form.email !== "" &&
			form.password !== "" &&
			emailRegex.test(form.email)
		) {
			setErrorMessage("");
			loginAirtable("POST", "applicants", form).then((data) => {
				if (data.response) {
					history.push("/profile");
				} else {
					console.log(data.message);
					setErrorMessage(data.message);
				}
			});
		} else {
			setErrorMessage("Please make sure required fields are correct");
		}
	};

	return (
		<>
			<Navbar />
			<Form onSubmit={handleSubmit} noValidate>
				<TextField
					className={classes.input}
					id="email"
					name="email"
					label="Email"
					variant="outlined"
					autoFocus
					value={form.email}
					onChange={handleInputChange}
					type="email"
					required
					error={
						errorMessage && (form.email === "" || !emailRegex.test(form.email))
					}
					helperText={
						errorMessage
							? "Please fill out this field with a valid email address"
							: ""
					}
				/>
				<TextField
					className={classes.input}
					id="password"
					name="password"
					type="password"
					label="Password"
					value={form.password}
					variant="outlined"
					onChange={handleInputChange}
					required
					error={errorMessage && form.password === ""}
				/>
				<Button
					className={classes.logInButton}
					variant="contained"
					color="primary"
					type="submit">
					Log In
				</Button>
				<ErrorText>{errorMessage ? errorMessage : ""}</ErrorText>
			</Form>
		</>
	);
};

export default LogInPage;
