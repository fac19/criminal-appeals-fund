import styled, { createGlobalStyle } from "styled-components";

require("typeface-ibm-plex-serif");

const GlobalStyle = createGlobalStyle`
  body {
	padding: 0;
	margin: 0;
  }
`;

const StyledLanding = styled.section`
	font-family: "ibm plex serif";
	text-decoration: none;
`;

const HeaderText = styled.p`
	font-size: 2rem;
`;
const BodyWrapper = styled.section``;

const HeaderWrapper = styled.section`
	margin-top: -8rem;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const StepsWrapper = styled.section`
	padding: 4em;
	background-color: #e8e8e8;
	margin: 2rem 0;
	padding: none;
`;

const StepHeading = styled.h1`
	font-weight: bold;
	font-size: 2rem;
	margin-bottom: 0;
`;

const StepsSubContainer = styled.section`
	display: flex;
	flex-direction: row;
`;

const StepsText = styled.section`
	display: flex;
	flex-direction: column;
	text-align: left;
	font-size: 1.25rem;
`;

const StepsImg = styled.img`
	width: 15rem;
	margin: 0 auto;
`;

const StepWrapper = styled.section`
	padding: 2rem 0;
	@media (min-width: 768px) {
		display: grid;
		&:nth-child(1),
		&:nth-child(3) {
			grid-template-columns: 2fr 1fr;
		}
		&:nth-child(2),
		&:nth-child(4) {
			grid-template-columns: 1fr 2fr;
		}
	}
`;

export {
	StyledLanding,
	BodyWrapper,
	HeaderWrapper,
	HeaderText,
	StepsWrapper,
	StepHeading,
	StepsSubContainer,
	StepsText,
	GlobalStyle,
	StepsImg,
	StepWrapper,
};
