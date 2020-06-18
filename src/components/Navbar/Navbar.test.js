import React from "react";
import { screen, render } from "@testing-library/react";
import Navbar from "./Navbar";
import App from "../../App";

test("Renders Contact link in nav bar", () => {
	render(
		<App>
			<Navbar />
		</App>
	);
	screen.getByText("Login");
});

test("Renders Home link in nav bar", () => {
	render(
		<App>
			<Navbar />
		</App>
	);
	screen.getAllByText("Sign Up");
});

describe("Test works", () => {
	it("2 plus 2 equals 2", () => {
		expect(4).toBe(4);
	});
});
