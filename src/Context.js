import React from "react";
export const UserContext = React.createContext({
	id: "",
	first_name: "",
	email: "",
	isVerified: "",
});
