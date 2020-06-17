import React from "react";
import { NavbarLoggedIn } from "../../components/Navbar/Navbar";
import { openUploadWidget } from "../../utils/cloudinary";
import { useHistory } from "react-router-dom";
import { updateAirtable } from "../../utils/fetch";
import { UserContext } from "../../Context";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const UploadDocuments = ({ case_name }) => {
	console.log(case_name);
	const [user, setUser] = React.useState(UserContext);
	const [docsUploaded, setDocsUploaded] = React.useState(false);
	const history = useHistory();
	const beginUpload = () => {
		const uploadOptions = {
			cloudName: "dgc9b8ti3",
			folder: user.email + "-" + case_name,
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
			history.push("/profile");
		}
	};

	return (
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
