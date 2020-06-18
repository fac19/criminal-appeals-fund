import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
	LandingPage,
	LogInPage,
	SignUpPage,
	ProfilePage,
	ApplyPage,
	UploadDocuments,
} from "./Pages";
import { MainWrapper } from "./StyledComponents/PageStyles.style";
// import { GlobalStyle } from "./pages/LandingPage/LandingPage.style";

function App() {
	const SiteRoute = ({ path, component }) => {
		const token = localStorage.getItem("user");
		if (token) {
			return <Route path={path}>{component}</Route>;
		} else if (path === "/signup" || path === "/login") {
			return <Route path={path}>{component}</Route>;
		} else {
			return (
				<Route to="/">
					<LandingPage />
				</Route>
			);
		}
	};

	return (
		<MainWrapper>
			<Router>
				<Switch>
					<SiteRoute path="/login" component={<LogInPage />} />
					<SiteRoute path="/signup" component={<SignUpPage />} />
					<SiteRoute path="/profile" component={<ProfilePage />} />
					<SiteRoute path="/apply" component={<ApplyPage />} />
					<SiteRoute path="/addinfo" component={<UploadDocuments />} />
					<SiteRoute exact path="/" component={<LandingPage />} />
				</Switch>
			</Router>
		</MainWrapper>
	);
}

export default App;
