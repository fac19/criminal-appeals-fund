import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { Button, makeStyles } from "@material-ui/core";
import {
	HeaderWrapper,
	BodyWrapper,
	StepsWrapper,
	StepHeading,
	// StepsSubContainer,
	StepsText,
	StyledLanding,
	GlobalStyle,
	StepsImg,
	StepWrapper,
	HeaderText,
} from "./LandingPage.style";
import step1 from "./assets/step1.svg";
import step2 from "./assets/step2.svg";
import step3 from "./assets/step3.svg";
import step4 from "./assets/step4.svg";
import step5 from "./assets/step5.svg";
import step6 from "./assets/step6.svg";

const useStyles = makeStyles((theme) => ({
	landingButton: {
		width: "11rem",
		height: "3rem",
		backgroundColor: "#f1f3f4",
	},
}));

const LandingPage = () => {
	const classes = useStyles();
	const ref = useRef();

	const executeScroll = () =>
		ref.current.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});

	return (
		<StyledLanding>
			<GlobalStyle />
			<Navbar />
			<BodyWrapper>
				<HeaderWrapper>
					<HeaderText>
						The Criminal Appeals Fund was born out of a need to improve the
						legal aid sector and overhaul the criminal justice field in the UK.
						We are an organisation that provides a platform for legal
						professionals to obtain funding for their cases. In doing so, our
						aim is to provide a more streamlined process when other avenues have
						been exhausted. Our screening process looks to find cases with merit
						and the potential to transform the criminal justice field. We want
						to provide those caught up in an unfair system the opportunity to
						have a second chance.
					</HeaderText>

					<Button
						className={classes.landingButton}
						variant="contained"
						onClick={executeScroll}>
						How it works
					</Button>
				</HeaderWrapper>
				<StepsWrapper ref={ref}>
					<StepWrapper>
						<StepsText>
							<StepHeading>Step 1</StepHeading>
							<p>
								Sign up for an account. We will need to verify your account
								before you can start appyling for funding - this may take up to
								24 hours.
							</p>
						</StepsText>
						<StepsImg src={step1} alt="step1" />
					</StepWrapper>

					<StepWrapper>
						<StepsImg src={step2} alt="step2" />
						<StepsText>
							<StepHeading>Step 2</StepHeading>
							<p>
								Once your account is verified you may apply for funding on a
								case.
							</p>
						</StepsText>
					</StepWrapper>

					<StepWrapper>
						<StepsText>
							<StepHeading>Step 3</StepHeading>
							<p>
								Your case will be assessed against a number of criteria and may
								be approved for funding
							</p>
						</StepsText>
						<StepsImg src={step3} alt="step3" />
					</StepWrapper>

					<StepWrapper>
						<StepsImg src={step4} alt="step4" />
						<StepsText>
							<StepHeading>Step 4</StepHeading>
							<p>
								If your case is approved, you will be asked to provide
								supporting documentation for the application
							</p>
						</StepsText>
					</StepWrapper>
				</StepsWrapper>

				<StepWrapper>
					<StepsImg src={step5} alt="step5" />
					<StepsText>
						<StepHeading>Step 5</StepHeading>
						<p>
							If your case is approved, you will need to generate an invoice to
							receive the funding
						</p>
					</StepsText>
				</StepWrapper>

				<StepWrapper>
					<StepsImg src={step6} alt="step6" />
					<StepsText>
						<StepHeading>Step 6</StepHeading>
						<p>
							Once we have all the required documents, funding will be provided
							for your case
						</p>
					</StepsText>
				</StepWrapper>

				<Link to="/signup">
					<Button variant="contained" className={classes.landingButton}>
						Sign Up
					</Button>
				</Link>
			</BodyWrapper>
		</StyledLanding>
	);
};

export default LandingPage;
