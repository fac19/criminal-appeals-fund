import React from "react";
import { NavbarLoggedIn } from "../../components/Navbar/Navbar";
import { openUploadWidget } from "../../utils/cloudinary";
import { useHistory } from "react-router-dom";
import { updateAirtable } from "../../utils/fetch";
import { Button } from "@material-ui/core";
import {
	PageTitle,
	ButtonWrapper,
	SuccessfulStatus,
	TextWrapper,
} from "../../StyledComponents/AdditionalDocs.style";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		margin: "20px 0 20px 0",
	},
});
const UploadDocuments = () => {
	const [docsUploaded, setDocsUploaded] = React.useState(false);
	const history = useHistory();
	const case_name = localStorage.getItem("case");
	const status = localStorage.getItem("status");
	const appId = localStorage.getItem("appId");
	const email = localStorage.getItem("email");
	const stageName = status === "Criteria met" ? "documentation" : "invoice";
	const classes = useStyles();
	const beginUpload = () => {
		const uploadOptions = {
			cloudName: "dgc9b8ti3",
			folder: email,
			public_id: case_name + "/" + stageName,
			uploadPreset: "upload",
		};

		openUploadWidget(uploadOptions, (error, photos) => {
			if (!error) {
				if (photos.event === "success") {
					setDocsUploaded(true);
				}
			} else {
				console.log(error);
			}
		});
	};

	const handleClick = () => {
		if (!docsUploaded) {
			// add error message
		} else {
			updateAirtable("PUT", "applications", appId, status);
			history.push("/profile");
		}
	};

	if (stageName === "documentation") {
		// if status = 2 upload docs, =4 upload invoice
		return (
			<>
				<NavbarLoggedIn />
				{<PageTitle> Supporting Documentation</PageTitle> && (
					<p>
						As part of the application, please upload supporting evidence on how
						the case meets the criteria outlined by the Criminal Appeals Fund
					</p>
				)}
				s
				<ButtonWrapper>
					<button onClick={beginUpload} type="button">
						{" "}
						Upload documents
					</button>
					{docsUploaded && (
						<SuccessfulStatus>
							Documents successfully uploaded, this is ready to submit.
						</SuccessfulStatus>
					)}
					<Button onClick={handleClick} variant="outlined" color="primary">
						{" "}
						Submit documentation
					</Button>
				</ButtonWrapper>
			</>
		);
	} else {
		return (
			<>
				<NavbarLoggedIn />
				<PageTitle> Upload your invoice</PageTitle>
				{<h1>Upload your invoice</h1> && (
					<p>Congratulations on securing funding!</p>
				)}
				<TextWrapper>
					<p>
						Upload your invoice here so that we can process this as quickly as
						posisible.
					</p>
					<p>
						Please ensure your it is in one of the following formats: pdf, docx
						or doc.
					</p>
				</TextWrapper>

				<ButtonWrapper>
					<Button
						onClick={beginUpload}
						variant="outlined"
						color="primary"
						type="button"
						className={classes.root}>
						{" "}
						Upload documents
					</Button>

					{docsUploaded && (
						<SuccessfulStatus>
							Documents successfully uploaded, this is ready to submit.
						</SuccessfulStatus>
					)}
					<Button onClick={handleClick} variant="outlined" color="primary">
						{" "}
						Submit documentation
					</Button>
				</ButtonWrapper>
			</>
		);
	}
};

export default UploadDocuments;
