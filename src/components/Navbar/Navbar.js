import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<h2>
				<Link to="/">Criminal Appeals Fund</Link>
			</h2>
			<ul>
				<li>
					<Link to="/signup">Sign Up</Link>
				</li>
				<li>
					<Link to="/login">Sign In</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
