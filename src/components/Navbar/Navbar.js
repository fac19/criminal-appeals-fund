import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Nav, NavbarLinks, NavbarLink, NavbarTitle } from "./Navbar.style";

const Navbar = () => {
	return (
		<Nav>
			<Link to="/" style={{ textDecoration: "none" }}>
				<NavbarTitle>Criminal Appeals Fund</NavbarTitle>
			</Link>
			<NavbarLinks>
				<NavbarLink>
					<Link to="/login" style={{ textDecoration: "none" }}>
						Login
					</Link>
				</NavbarLink>
				<NavbarLink>
					<Link to="signup" style={{ textDecoration: "none" }}>
						Sign Up
					</Link>
				</NavbarLink>
			</NavbarLinks>
		</Nav>
	);
};

const NavbarLoggedIn = () => {
	const history = useHistory();

	const handleSignOut = () => {
		localStorage.clear();
		history.push("/");
	};

	return (
		<Nav data-cy="nav-logged-in">
			<Link to="/" style={{ textDecoration: "none" }}>
				<NavbarTitle>Criminal Appeals Fund</NavbarTitle>
			</Link>
			<NavbarLinks>
				<NavbarLink>
					<Link to="/profile" style={{ textDecoration: "none" }}>
						My Applications
					</Link>
				</NavbarLink>
				<NavbarLink>
					<Link to="/apply" style={{ textDecoration: "none" }}>
						Apply
					</Link>
				</NavbarLink>
				<NavbarLink onClick={handleSignOut}>Sign Out</NavbarLink>
			</NavbarLinks>
		</Nav>
	);
};

const NavbarUnverified = () => {
	const history = useHistory();

	const handleSignOut = () => {
		localStorage.clear();
		history.push("/");
	};

	return (
		<Nav>
			<Link to="/" style={{ textDecoration: "none" }}>
				<NavbarTitle>Criminal Appeals Fund</NavbarTitle>
			</Link>
			<NavbarLinks>
				<NavbarLink onClick={handleSignOut}>Sign Out</NavbarLink>
			</NavbarLinks>
		</Nav>
	);
};

export { Navbar, NavbarLoggedIn, NavbarUnverified };
