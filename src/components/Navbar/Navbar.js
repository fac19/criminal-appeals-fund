import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<h2>Criminal Appeals Fund</h2>
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
