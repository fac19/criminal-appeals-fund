import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/login">{/* <LogInPage/> */}</Route>
				<Route path="/signup">{/* <SignUpPage/> */}</Route>
				<Route path="/">
					<LandingPage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
