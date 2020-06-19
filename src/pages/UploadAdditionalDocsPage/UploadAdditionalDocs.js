import React from "react";
import { NavbarLoggedIn } from "../../components/Navbar/Navbar";
import { openUploadWidget } from "../../utils/cloudinary";
import { useHistory } from "react-router-dom";
import { updateAirtable } from "../../utils/fetch";
import { Button } from "@material-ui/core";
import {
	PageTitle,
	ButtonWrapper,
	TextWrapper,
	AdditionalWrapper,
	AddInfoSubtitle,
} from "./AdditionalDocs.style";
import {
	SuccessfulText,
	ErrorText,
} from "../../StyledComponents/StyledComponents.style";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		margin: "20px 0 20px 0",
	},
	padding: {
		marginBottom: "1em",
	},
});
const UploadDocuments = () => {
	const [docsUploaded, setDocsUploaded] = React.useState(false);
	const [errorMessage, setErrorMessage] = React.useState("");
	const history = useHistory();
	const case_name = sessionStorage.getItem("case");
	const status = sessionStorage.getItem("status");
	const appId = sessionStorage.getItem("appId");
	const email = sessionStorage.getItem("email");
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
				setErrorMessage(
					"Error uploading documents, please refresh the page and try again."
				);
			}
		});
	};

	const handleClick = () => {
		if (!docsUploaded) {
			setErrorMessage("Please upload documentation using the button above.");
		} else {
			updateAirtable("PUT", "applications", appId, status);
			setErrorMessage("");
			history.push("/profile");
		}
	};

	if (stageName === "documentation") {
		return (
			<>
				<NavbarLoggedIn />
				<AdditionalWrapper>
					<PageTitle> Supporting Documentation</PageTitle>
					<AddInfoSubtitle>
						As part of the application, please upload supporting evidence on how
						the case meets the criteria outlined by the Criminal Appeals Fund
					</AddInfoSubtitle>

					<ButtonWrapper>
						<Button
							onClick={beginUpload}
							type="button"
							variant="outlined"
							color="primary"
							className={classes.root}>
							Upload documents
						</Button>
						<Button onClick={handleClick} variant="contained" color="primary">
							Submit documentation
						</Button>
						{docsUploaded && (
							<SuccessfulText>
								Documents successfully uploaded, this is ready to submit.
							</SuccessfulText>
						)}
					</ButtonWrapper>
					<ErrorText>{errorMessage ? errorMessage : ""}</ErrorText>
				</AdditionalWrapper>
			</>
		);
	} else {
		return (
			<>
				<NavbarLoggedIn />
				<AdditionalWrapper>
					<PageTitle> Upload your invoice</PageTitle>

					<TextWrapper>
						<AddInfoSubtitle>
							Congratulations on securing funding!
						</AddInfoSubtitle>
						<AddInfoSubtitle>
							Upload your invoice here so that we can process this as quickly as
							possible.
						</AddInfoSubtitle>
						<AddInfoSubtitle>
							Please ensure your it is in one of the following formats: pdf,
							docx or doc.
						</AddInfoSubtitle>
					</TextWrapper>

					<ButtonWrapper>
						<Button
							onClick={beginUpload}
							variant="outlined"
							color="primary"
							type="button"
							className={classes.root}>
							Upload invoice
						</Button>

						<Button onClick={handleClick} variant="contained" color="primary">
							Submit documentation
						</Button>
						{docsUploaded && (
							<SuccessfulText>
								Documents successfully uploaded, this is ready to submit.
							</SuccessfulText>
						)}
					</ButtonWrapper>
					<ErrorText>{errorMessage ? errorMessage : ""}</ErrorText>
				</AdditionalWrapper>
			</>
		);
	}
};

export default UploadDocuments;
