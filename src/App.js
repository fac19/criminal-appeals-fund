import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LogInPage from "./pages/LogInPage/LogInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/login">{<LogInPage />}</Route>
				<Route path="/signup">{<SignUpPage />}</Route>
				<Route exact path="/">
					<LandingPage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
