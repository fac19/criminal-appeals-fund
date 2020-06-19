import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavbarLinks, NavbarLink, NavbarTitle } from "./Navbar.style";

const Navbar = () => {
	return (
		<Nav>
			<Link to="/" style={{ textDecoration: "none" }}>
				<NavbarTitle>Criminal Appeals Fund</NavbarTitle>
			</Link>
			<NavbarLinks>
				<Link to="/login" style={{ textDecoration: "none" }}>
					<NavbarLink>Login</NavbarLink>
				</Link>
				<Link to="signup" style={{ textDecoration: "none" }}>
					<NavbarLink>Sign Up</NavbarLink>
				</Link>
			</NavbarLinks>
		</Nav>
	);
};

const NavbarLoggedIn = () => {
	const handleSignOut = () => {
		localStorage.clear();
		window.location.reload(false);
	};

	return (
		<Nav data-cy="nav-logged-in">
			<Link to="/" style={{ textDecoration: "none" }}>
				<NavbarTitle>Criminal Appeals Fund</NavbarTitle>
			</Link>
			<NavbarLinks>
				<Link to="/profile" style={{ textDecoration: "none" }}>
					<NavbarLink>My Applications</NavbarLink>
				</Link>
				<Link to="/apply" style={{ textDecoration: "none" }}>
					<NavbarLink>Apply</NavbarLink>
				</Link>
				<NavbarLink onClick={handleSignOut}>Sign Out</NavbarLink>
			</NavbarLinks>
		</Nav>
	);
};

const NavbarUnverified = () => {
	const handleSignOut = () => {
		localStorage.clear();
		window.location.reload(false);
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
