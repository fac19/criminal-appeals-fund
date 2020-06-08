import React from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/login">{/* <LogInPage/> */}</Route>
				<Route path="/signup">{/* <SignUpPage/> */}</Route>
				<Route path="/">{/* <LandingPage/> */}</Route>
			</Switch>
		</Router>
	);
}

export default App;
