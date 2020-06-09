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
import ProfilePage from ".pages/ProfilePage/ProfilePage";

import { MainWrapper } from "./StyledComponents/PageStyles.style";

function App() {
	return (
		<MainWrapper>
			<Router>
				<Switch>
					<Route path="/login">{<LogInPage />}</Route>
					<Route path="/signup">{<SignUpPage />}</Route>
					<Route path="/profile">{<ProfilePage />}</Route>
					<Route exact path="/">
						<LandingPage />
					</Route>
				</Switch>
			</Router>
		</MainWrapper>
	);
}

export default App;
