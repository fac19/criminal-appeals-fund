import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Button, TextField } from "@material-ui/core";
import { Form } from "../../StyledComponents/StyledComponents.style";

// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({

// }));

const LogInPage = () => {
	// const classes = useStyles();
	const [form, updateForm] = React.useState({ email: "", password: "" });
	const [errorMessage, setErrorMessage] = React.useState(false);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		updateForm({ ...form, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (form.email !== "" && form.password !== "" && form.email.includes("@")) {
			setErrorMessage(false);
			console.log(form);
		} else {
			setErrorMessage(true);
		}
	};

	return (
		<>
			<Navbar />
			<Form onSubmit={handleSubmit} noValidate>
				<TextField
					id="email"
					name="name"
					label="Email"
					variant="outlined"
					autoFocus
					onChange={handleInputChange}
					type="email"
					required
					error={errorMessage}
					helperText={
						errorMessage
							? "Please fill out this field wiht a valid email address"
							: ""
					}
				/>
				<TextField
					id="password"
					name="name"
					type="password"
					label="Password"
					variant="outlined"
					onChange={handleInputChange}
					required
					error={errorMessage}
					helperText={errorMessage ? "Please fill out this field" : ""}
				/>
				<Button variant="contained" color="primary" type="submit">
					Log In
				</Button>
			</Form>
		</>
	);
};

export default LogInPage;
