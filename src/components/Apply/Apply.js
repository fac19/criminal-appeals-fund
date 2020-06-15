import React from "react";
import {
	FormControlLabel,
	Checkbox,
	FormControl,
	Button,
	TextField,
} from "@material-ui/core";

import { ErrorText } from "../../StyledComponents/StyledComponents.style";

const Apply0 = () => {
	return (
		<>
			<h2>Applying For Funding</h2>
			<h4>First, ensure that your case satisfies the folowing criteria:</h4>
			<ul>
				<li>1: You have exhausted all other methods of funding</li>
				<li>2: Your case has merit</li>
				<li>3: Your case will have an impact on the criminal justice system</li>
			</ul>
		</>
	);
};

const Apply1 = ({ checked, setChecked, errorMessage }) => {
	const handleChange = (event) => {
		setChecked(!checked);
	};

	return (
		<>
			<h2>Applying For Funding</h2>
			<h4>
				Secondly, read our funding guidelines and decide which cluster your case
				fits into
			</h4>
			<ul>
				<li>Children</li>
				<li>Excessive Sentence</li>
				<li>Families</li>
				<li>Discrimination</li>
			</ul>
			<FormControl required>
				<FormControlLabel
					control={
						<Checkbox
							checked={checked}
							onChange={handleChange}
							name="fundingGuidelines"
							color="primary"
						/>
					}
					label="I understand the funding guidelines"></FormControlLabel>
			</FormControl>
			<ErrorText>{errorMessage ? errorMessage : ""}</ErrorText>
		</>
	);
};

const Apply2 = ({ handleUpload, errorMessage, handleInputChange, form }) => {
	return (
		<>
			<TextField
				id="caseName"
				name="case_name"
				type="text"
				label="Case Name"
				value={form.case_name}
				variant="outlined"
				onChange={handleInputChange}
				required
				autoFocus
				// error={errorMessage}
				// helperText={errorMessage ? "Please fill out this field" : ""}
			/>
			<TextField
				id="dateOpened"
				name="date_opened"
				type="date"
				label="Date Opened"
				variant="outlined"
				InputLabelProps={{
					shrink: true,
				}}
				onChange={handleInputChange}
				required
				// error={errorMessage}
				// helperText={errorMessage ? "Please fill out this field" : ""}
			/>
			<Button variant="contained" component="label" onChange={handleUpload}>
				Upload File
				<input type="file" style={{ display: "none" }} />
			</Button>
			<ErrorText>{errorMessage ? errorMessage : ""}</ErrorText>
		</>
	);
};

export { Apply0, Apply1, Apply2 };
