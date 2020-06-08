import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Button, TextField } from "@material-ui/core";
import { Form } from "../../StyledComponents/StyledComponents.style";

// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({

// }));

const LogInPage = () => {
	// const classes = useStyles();
	const [formDetails, updateForm] = React.useState({ email: "", password: "" });

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		updateForm({ ...formDetails, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formDetails);
	};

	return (
		<>
			<Navbar />
			<Form onSubmit={handleSubmit}>
				<TextField
					id="email"
					name="name"
					label="Email"
					variant="outlined"
					autoFocus
					onChange={handleInputChange}
					type="email"
					required
				/>
				<TextField
					id="password"
					name="name"
					type="password"
					label="Password"
					variant="outlined"
					onChange={handleInputChange}
					required
				/>
				<Button variant="contained" color="primary" type="submit">
					Log In
				</Button>
			</Form>
		</>
	);
};

export default LogInPage;
