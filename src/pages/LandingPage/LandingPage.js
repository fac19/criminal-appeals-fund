import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Button } from "@material-ui/core";

const LandingPage = () => {
	return (
		<>
			<Navbar />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qualis ista
				philosophia est, quae non interitum afferat pravitatis, sed sit contenta
				mediocritate vitiorum? Sed id ne cogitari quidem potest quale sit, ut
				non repugnet ipsum sibi. Scripta sane et multa et polita, sed nescio quo
				pacto auctoritatem oratio non habet. Quoniam, si dis placet, ab Epicuro
				loqui discimus. Duo Reges: constructio interrete.
			</p>
			<Link>
				<Button variant="contained">Sign Up</Button>
			</Link>
			<Button variant="contained">How it works</Button>
			<p>
				Step 1: Sign up for an account. We will need to verify your account
				before you can start appyling for funding - this may take up to 24
				hours.
			</p>
			<p>
				Step 2: Once your account is verified you may apply for funding on a
				case.
			</p>
			<p>
				Step 3: Your case will be assessed against a number of criteria and may
				be approved for funding
			</p>
			<p>
				Step 4: If your case is approved, you will need to generate an invoice
				to receive the funding
			</p>
			<Link>
				<Button variant="contained">Sign Up</Button>
			</Link>
		</>
	);
};

export default LandingPage;
