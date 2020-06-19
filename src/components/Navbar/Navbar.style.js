import styled from "styled-components";

const Nav = styled.nav`
	max-height: 4rem;
	background-color: hsl(216, 10%, 10%);
	// background-color: hsl(216, 1%, 16%);
	color: white;
	position: fixed;
	width: 100%;
	top: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	z-index: 100;
	-webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.95);
	-moz-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.95);
	box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.95);
`;
const NavbarLinks = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	list-style: none;
	margin-right: 2rem;
	padding: 0;
	color: #0e0c0b;
	text-decoration: none;
`;

const NavbarTitle = styled.h1`
	margin: 0;
	letter-spacing: 0.01rem;
	padding: 0.8rem;
	padding-left: 2rem;
	font-size: 1.5rem;
	text-decoration: none;
	color: white;
	text-decoration: none;
	&:hover {
		color: hsl(216, 50%, 90%);
	}
`;

const NavbarLink = styled.li`
	display: flex;
	flex-direction: row;
	align-items: center;
	color: white;
	font-weight: lighter;
	padding: 1rem;
	font-size: 1.3rem;
	text-decoration: none;
	cursor: pointer;
	&:hover {
		color: hsl(216, 50%, 90%);
	}
`;

export { Nav, NavbarLinks, NavbarLink, NavbarTitle };
