import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import {
	LandingPage,
	LogInPage,
	SignUpPage,
	ProfilePage,
	ApplyPage,
} from "./Pages";
import { UserContext } from "./Context.js";
import { MainWrapper } from "./StyledComponents/PageStyles.style";
// import { GlobalStyle } from "./pages/LandingPage/LandingPage.style";

function App() {
	const [user, setUser] = React.useState({
		id: "",
		first_name: "",
		isVerified: "",
	});

	React.useEffect(() => {
		console.log(user);
	}, [user]);

	const SiteRoute = ({ path, component }) => {
		if (user.id.length) {
			return <Route path={path}>{component}</Route>;
		} else if (path === "/signup" || path === "/login" || path === "/apply") {
			return <Route path={path}>{component}</Route>;
		} else {
			return (
				<Route path="/">
					<LandingPage />
				</Route>
			);
		}
	};

	return (
		<UserContext.Provider value={[user, setUser]}>
			<MainWrapper>
				<Router>
					<Switch>
						<SiteRoute path="/login" component={<LogInPage />} />
						<SiteRoute path="/signup" component={<SignUpPage />} />
						<SiteRoute path="/profile" component={<ProfilePage />} />
						<SiteRoute path="/apply" component={<ApplyPage />} />
						<SiteRoute exact path="/" component={<LandingPage />} />
					</Switch>
				</Router>
			</MainWrapper>
		</UserContext.Provider>
	);
}

export default App;
