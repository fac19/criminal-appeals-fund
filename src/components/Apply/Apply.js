import React from "react";
import {
	FormControlLabel,
	Checkbox,
	FormControl,
	Button,
	TextField,
	makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
	checkbox: {
		margin: "1rem auto",
	},
	input: {
		marginBottom: "1rem",
	},
	caseName: {
		marginTop: "3rem",
		marginBottom: "1rem",
	},
});

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
	const classes = useStyles();

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
					className={classes.checkbox}
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
		</>
	);
};

const Apply2 = ({ handleUpload, errorMessage, handleInputChange, form }) => {
	const classes = useStyles();

	return (
		<>
			<TextField
				error={errorMessage && form.case_name === ""}
				className={classes.caseName}
				id="caseName"
				name="case_name"
				type="text"
				label="Case Name"
				value={form.case_name}
				variant="outlined"
				onChange={handleInputChange}
				required
				autoFocus
			/>
			<TextField
				error={errorMessage && form.case_stage === ""}
				className={classes.input}
				id="caseStage"
				name="case_stage"
				value={form.case_stage}
				type="text"
				label="Stage of Case"
				variant="outlined"
				onChange={handleInputChange}
				required
			/>
			<TextField
				error={errorMessage && form.court_name === ""}
				className={classes.input}
				id="courtName"
				name="court_name"
				value={form.court_name}
				type="text"
				label="Court the trial was held at"
				variant="outlined"
				onChange={handleInputChange}
				required
			/>
			<TextField
				className={classes.input}
				id="counselName"
				name="counsel_name"
				value={form.counsel_name}
				type="text"
				label="Name of counsel during trial (if different)"
				variant="outlined"
				onChange={handleInputChange}
			/>
			<TextField
				error={errorMessage && form.solicitor_name === ""}
				className={classes.input}
				id="solicitorName"
				name="solicitor_name"
				value={form.solicitor_name}
				type="text"
				label="Name of solicitor during trial"
				variant="outlined"
				onChange={handleInputChange}
				required
			/>
			{/* <Button className={classes.input} variant="contained" component="label" onChange={handleUpload}>
				Upload File
				<input type="file" style={{ display: "none" }} />
			</Button> */}
		</>
	);
};

const Apply3 = ({ errorMessage, handleInputChange, form }) => {
	return (
		<>
			<TextField
				error={errorMessage && form.application_merit === ""}
				id="applicationMerit standard-multiline-flexible"
				name="application_merit"
				type="text"
				label="What are the merits of this appeal?"
				value={form.application_merit}
				variant="outlined"
				onChange={handleInputChange}
				multiline
				rowsMax={4}
				required
				autoFocus
			/>

			<TextField
				error={errorMessage && form.application_impact === ""}
				id="applicationMerit standard-multiline-flexible"
				name="application_impact"
				type="text"
				label="What impact does this case have?"
				value={form.application_impact}
				variant="outlined"
				onChange={handleInputChange}
				multiline
				rowsMax={4}
				required
			/>
		</>
	);
};

const Apply4 = ({ handleUpload, errorMessage, handleInputChange, form }) => {
	return (
		<>
			<h1>Please upload the following documentation</h1>
			<ul>
				<li> Signed waiver of legal privilege</li>
				<li> Proof of financial means</li>
			</ul>
			{/* Cloudinary widget goes here */}
		</>
	);
};

export { Apply0, Apply1, Apply2, Apply3, Apply4 };
