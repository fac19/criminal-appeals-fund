import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, AppBar, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		width: "100vw",
		height: "8%",
		marginBottom: "2rem",
		backgroundColor: "white",
		position: "fixed",
		top: 0,
		left: 0,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	heading: {
		color: "black",
	},
	navButton: {
		alignSelf: "right",
	},
}));

const Navbar = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar className={classes.root} position="static">
				<Toolbar>
					<Link to="/">
						<h1 className={classes.heading}>Criminal Appeals Fund</h1>
					</Link>
					<Link to="/login">
						<Button className={classes.navButton} color="inherit">
							Login
						</Button>
					</Link>
					<Link to="/signup">
						<Button className={classes.navButton} color="inherit">
							Sign Up
						</Button>
					</Link>
				</Toolbar>
			</AppBar>
		</div>
	);

	// return (
	// 	<nav>
	// 		<h2>
	// 			<Link to="/">Criminal Appeals Fund</Link>
	// 		</h2>
	// 		<ul>
	// 			<li>
	// 				<Link to="/signup">Sign Up</Link>
	// 			</li>
	// 			<li>
	// 				<Link to="/login">Sign In</Link>
	// 			</li>
	// 		</ul>
	// 	</nav>
	// );
};

const NavbarLoggedIn = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar className={classes.root} position="static">
				<Toolbar>
					<h1 className={classes.heading}>Criminal Appeals Fund</h1>
					<Link to="/profilepage">
						<Button className={classes.navButton} color="inherit">
							My Applications
						</Button>
					</Link>
					<Link to="/apply">
						<Button className={classes.navButton} color="inherit">
							Apply
						</Button>
					</Link>
					<Link to="/">
						<Button className={classes.navButton} color="inherit">
							Sign Out
						</Button>
					</Link>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export { Navbar, NavbarLoggedIn };
