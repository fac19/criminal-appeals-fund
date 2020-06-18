import React from "react";
import {
	CriteriaInfoList,
	ApplyInfoListItem,
	ClusterInfoList,
	ApplyTitle,
	ApplySubtitle,
} from "./Apply.style";
import { UploadSuccess } from "../../StyledComponents/StyledComponents.style";
import {
	FormControlLabel,
	Checkbox,
	FormControl,
	TextField,
	makeStyles,
	Button,
} from "@material-ui/core";

const useStyles = makeStyles({
	checkbox: {
		margin: "0rem auto",
		marginBottom: "1rem",
	},
	input: {
		marginBottom: "2rem",
	},
	meritInput: {
		marginBottom: "4rem",
	},
	caseName: {
		marginTop: "3rem",
		marginBottom: "1rem",
	},
	button: {
		margin: "0 auto",
		marginBottom: "2rem",
		width: "50%",
	},
});

const Apply0 = () => {
	return (
		<>
			<ApplyTitle>Applying For Funding</ApplyTitle>
			<ApplySubtitle>
				First, ensure that your case satisfies the folowing criteria:
			</ApplySubtitle>
			<CriteriaInfoList>
				<ApplyInfoListItem>
					1: You have exhausted all other methods of funding
				</ApplyInfoListItem>
				<ApplyInfoListItem>2: Your case has merit</ApplyInfoListItem>
				<ApplyInfoListItem>
					3: Your case will have an impact on the criminal justice system
				</ApplyInfoListItem>
			</CriteriaInfoList>
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
			<ApplySubtitle>
				Secondly, read our funding guidelines and decide which cluster your case
				fits into
			</ApplySubtitle>
			<ClusterInfoList>
				<ApplyInfoListItem>Children</ApplyInfoListItem>
				<ApplyInfoListItem>Excessive Sentence</ApplyInfoListItem>
				<ApplyInfoListItem>Families</ApplyInfoListItem>
				<ApplyInfoListItem>Discrimination</ApplyInfoListItem>
			</ClusterInfoList>
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
					label="I understand the criteria and clusters"></FormControlLabel>
			</FormControl>
		</>
	);
};

const Apply2 = ({ handleUpload, errorMessage, handleInputChange, form }) => {
	const classes = useStyles();

	return (
		<>
			<TextField
				error={errorMessage.length !== 0 && form.case_name === ""}
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
				error={errorMessage.length !== 0 && form.case_stage === ""}
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
				error={errorMessage.length !== 0 && form.court_name === ""}
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
				error={errorMessage.length !== 0 && form.solicitor_name === ""}
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
		</>
	);
};

const Apply3 = ({ errorMessage, handleInputChange, form }) => {
	const classes = useStyles();

	return (
		<>
			<TextField
				error={errorMessage.length !== 0 && form.application_merit === ""}
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
				className={classes.meritInput}
			/>

			<TextField
				error={errorMessage.length !== 0 && form.application_impact === ""}
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
				className={classes.meritInput}
			/>
		</>
	);
};

const Apply4 = ({
	handleUpload,
	errorMessage,
	form,
	handleInputChange,
	beginUpload,
	docsUploaded,
}) => {
	const classes = useStyles();

	return (
		<>
			<ApplySubtitle>Please upload the following documentation</ApplySubtitle>
			<CriteriaInfoList>
				<ApplyInfoListItem>1: Proof of litigation extension</ApplyInfoListItem>
				<ApplyInfoListItem>
					2: Signed waiver of legal privilege
				</ApplyInfoListItem>
				<ApplyInfoListItem>3: Proof of financial means</ApplyInfoListItem>
			</CriteriaInfoList>
			<Button
				className={classes.button}
				variant="contained"
				onClick={beginUpload}
				type="button">
				Upload documents
			</Button>
			{docsUploaded && (
				<UploadSuccess>
					Documents successfully uploaded. Your application is ready to submit.
				</UploadSuccess>
			)}
		</>
	);
};

export { Apply0, Apply1, Apply2, Apply3, Apply4 };
