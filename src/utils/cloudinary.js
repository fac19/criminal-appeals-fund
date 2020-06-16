// // async function postFile(file) {
// // 	const fetchObject = {
// // 		method: "POST",
// // 		headers: { "content-type": "application/json" },
// // 		body: JSON.stringify({
// // 			file: file,
// // 			upload_preset: "upload",
// // 		}),
// // 	};
// // 	const cloudURL = "https://api.cloudinary.com/v1_1/dgc9b8ti3/auto/upload";
// // 	const response = await fetch(cloudURL, fetchObject);
// // 	return await response.json();
// // }

// function uploadFileHandler(tag) {
// 	const fieldName = e.currentTarget.id;

// 	window.cloudinary.openUploadWidget(
// 		{
// 			cloudName: "dgc9b8ti3",
// 			uploadPreset: "upload",
// 			sources: ["local", "image_search", "url", "google_drive", "facebook"],
// 			googleApiKey: process.env.REACT_APP_googleAPIkey,
// 			cropping: true,
// 			multiple: false,
// 			defaultSource: "local",
// 			styles: {
// 				palette: {
// 					window: "#F5F5F5",
// 					sourceBg: "#FFFFFF",
// 					windowBorder: "#90a0b3",
// 					tabIcon: "#0094c7",
// 					inactiveTabIcon: "#69778A",
// 					menuIcons: "#0094C7",
// 					link: "#53ad9d",
// 					action: "#8F5DA5",
// 					inProgress: "#0194c7",
// 					complete: "#53ad9d",
// 					error: "#c43737",
// 					textDark: "#000000",
// 					textLight: "#FFFFFF",
// 				},
// 				// fonts: {
// 				//   'default': null,
// 				//   "'Poppins', sans-serif": {
// 				//     url: 'https://fonts.googleapis.com/css?family=Poppins',
// 				//     active: true,
// 				//   //   },
// 			},
// 		},

// 		(error, result) => {
// 			if (!error && result && result.event === "success") {
// 				console.log(result.info);
// 				const url = result.info.url;
// 				console.log(url);
// 				// dispatch({ type: "upload image", url, fieldName });
// 			}
// 		}
// 	);
// }

import { Cloudinary as CoreCloudinary, Util } from "cloudinary-core";

const url = (publicId, options) => {
	const scOptions = Util.withSnakeCaseKeys(options);
	const cl = CoreCloudinary.new();
	return cl.url(publicId, scOptions);
};

const openUploadWidget = (options, callback) => {
	const scOptions = Util.withSnakeCaseKeys(options);
	window.cloudinary.openUploadWidget(scOptions, callback);
};

export async function fetchPhotos(imageTag, setter) {
	const options = {
		cloudName: "emkaydee",
		format: "json",
		type: "list",
		version: Math.ceil(new Date().getTime() / 1000),
	};

	const urlPath = url(imageTag.toString(), options);

	fetch(urlPath)
		.then((res) => res.text())
		.then((text) =>
			text
				? setter(JSON.parse(text).resources.map((image) => image.public_id))
				: []
		)
		.catch((err) => console.log(err));
}

export { openUploadWidget, url };
