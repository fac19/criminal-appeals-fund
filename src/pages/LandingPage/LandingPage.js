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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qualis ista
						philosophia est, quae non interitum afferat pravitatis, sed sit
						contenta mediocritate vitiorum? Sed id ne cogitari quidem potest
						quale sit, ut non repugnet ipsum sibi. Scripta sane et multa et
						polita, sed nescio quo pacto auctoritatem oratio non habet. Quoniam,
						si dis placet, ab Epicuro loqui discimus. Duo Reges: constructio
						interrete.
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
							<StepHeading>Step 1:</StepHeading>
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
						<StepsImg src={step3} alt="step3" />
					</StepWrapper>

					<StepWrapper>
						<StepsImg src={step4} alt="step4" />
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
					<Button variant="contained" className={classes.landingButton}>
						Sign Up
					</Button>
				</Link>
			</BodyWrapper>
		</StyledLanding>
	);
};

export default LandingPage;
