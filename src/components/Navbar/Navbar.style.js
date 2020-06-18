import styled from "styled-components";

const Nav = styled.nav`
	min-height: 4rem;
	background-color: #f1f3f4;
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
	color: black;
	text-decoration: none;
`;

const NavbarTitle = styled.h1`
	margin: 0;
	padding: 0.8rem;
	padding-left: 1rem;
	font-size: 2rem;
	text-decoration: none;
	color: black;
	text-decoration: none;
	&:hover {
		color: #512b58;
		text-decoration: underline;
	}
`;

const NavbarLink = styled.li`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 1rem;
	font-size: 1.3rem;
	text-decoration: none;
	cursor: pointer;
	&:hover {
		color: #512b58;
		text-decoration: underline;
	}
`;

export { Nav, NavbarLinks, NavbarLink, NavbarTitle };
