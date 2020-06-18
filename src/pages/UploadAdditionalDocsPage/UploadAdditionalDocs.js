import React from "react";
import { NavbarLoggedIn } from "../../components/Navbar/Navbar";
import { openUploadWidget } from "../../utils/cloudinary";
import { useHistory } from "react-router-dom";
import { updateAirtable } from "../../utils/fetch";
import { Button } from "@material-ui/core";

const UploadDocuments = () => {
	const [docsUploaded, setDocsUploaded] = React.useState(false);
	const history = useHistory();
	const case_name = localStorage.getItem("case");
	const status = localStorage.getItem("status");
	const appId = localStorage.getItem("appId");
	const email = localStorage.getItem("email");
	console.log("case", case_name, "status", status, "id", appId);
	const beginUpload = () => {
		const uploadOptions = {
			cloudName: "dgc9b8ti3",
			folder: email + "-" + case_name,
			use_filename: "true",
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
			localStorage.removeItem("case");
			localStorage.removeItem("status");
			localStorage.removeItem("appId");
			localStorage.removeItem("email");
			history.push("/profile");
		}
	};

	return (
		// if status = 2 upload docs, =4 upload invoice
		<>
			<NavbarLoggedIn />
			<h1>Upload you supporting documents</h1>
			<p>
				As part of the application, please upload supporting evidence on how the
				case meets the criteria outlined by the Criminal Appeals Fund
			</p>
			<button onClick={beginUpload} type="button">
				{" "}
				Upload documents
			</button>
			<Button onClick={handleClick}> Submit documentation</Button>
		</>
	);
};

export default UploadDocuments;
