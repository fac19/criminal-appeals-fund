import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
	const [user, setUser] = React.useState({ id: "", name: "" });

	React.useEffect(() => {
		console.log(user);
	}, [user]);

	return (
		<UserContext.Provider value={[user, setUser]}>
			<MainWrapper>
				<Router>
					<Switch>
						<Route path="/login">{<LogInPage />}</Route>
						<Route path="/signup">{<SignUpPage />}</Route>
						<Route path="/profile">{<ProfilePage />}</Route>
						<Route path="/apply">{<ApplyPage />}</Route>
						<Route exact path="/">
							<LandingPage />
						</Route>
					</Switch>
				</Router>
			</MainWrapper>
		</UserContext.Provider>
	);
}

export default App;
