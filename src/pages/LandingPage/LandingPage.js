import React, { Component, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { Button } from "@material-ui/core";
import {
	HeaderWrapper,
	BodyWrapper,
	StepsWrapper,
	StepHeading,
	StepsSubContainer,
	StepsText,
	StyledLanding,
	GlobalStyle,
	StepsImg,
	StepWrapper,
} from "./LandingPage.style";
import step1 from "./assets/step1.svg";

const useMountEffect = (fun) => useEffect(fun, []);
const useScroll = () => {
	const htmlElRef = useRef(null);
	const executeScroll = () => {
		window.scrollTo({
			top: htmlElRef.current.offsetTop,
			left: 0,
			behavior: "smooth",
		});

		// if (window.location.href == "http://localhost:3000/"){
		// 	return;
		// } else {
		// 	window.scrollTo({
		// 		top: htmlElRef.current.offsetTop,
		// 		left: 0,
		// 		behavior: "smooth",
		// 	});
		// }
	};
	return [executeScroll, htmlElRef];
};

const LandingPage = () => {
	const [executeScroll, htmlElRef] = useScroll();
	useMountEffect(executeScroll); // Runs after component mounts

	return (
		<StyledLanding>
			<GlobalStyle />
			<Navbar />
			<BodyWrapper>
				<HeaderWrapper>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qualis ista
						philosophia est, quae non interitum afferat pravitatis, sed sit
						contenta mediocritate vitiorum? Sed id ne cogitari quidem potest
						quale sit, ut non repugnet ipsum sibi. Scripta sane et multa et
						polita, sed nescio quo pacto auctoritatem oratio non habet. Quoniam,
						si dis placet, ab Epicuro loqui discimus. Duo Reges: constructio
						interrete.
					</p>

					<Button variant="contained" onClick={executeScroll}>
						How it works
					</Button>
				</HeaderWrapper>
				<StepsWrapper ref={htmlElRef}>
					<StepWrapper>
						<StepsImg src={step1} alt="step1" />

						<StepsText>
							<StepHeading>Step 1:</StepHeading>
							<p>
								Sign up for an account. We will need to verify your account
								before you can start appyling for funding - this may take up to
								24 hours.
							</p>
						</StepsText>
					</StepWrapper>

					<StepWrapper>
						<StepsText>
							<StepHeading>Step 2:</StepHeading>
							<p>
								Once your account is verified you may apply for funding on a
								case.
							</p>
						</StepsText>
					</StepWrapper>

					<StepWrapper>
						<StepsText>
							<StepHeading>Step 3:</StepHeading>
							<p>
								Your case will be assessed against a number of criteria and may
								be approved for funding
							</p>
						</StepsText>
					</StepWrapper>

					<StepWrapper>
						<StepsText>
							<StepHeading>Step 4:</StepHeading>
							<p>
								If your case is approved, you will need to generate an invoice
								to receive the funding
							</p>
						</StepsText>
					</StepWrapper>
				</StepsWrapper>
				<Link to="/signup">
					<Button variant="contained">Sign Up</Button>
				</Link>
			</BodyWrapper>
		</StyledLanding>
	);
};

export default LandingPage;
