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

const BodyWrapper = styled.section``;

const HeaderWrapper = styled.section`
	min-height: 100vh;
`;
const StepsWrapper = styled.section`
	padding: 4em;
	background-color: #79bac1;
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

const StepsImg = styled.section``;

export {
	StyledLanding,
	BodyWrapper,
	HeaderWrapper,
	StepsWrapper,
	StepHeading,
	StepsSubContainer,
	StepsText,
	GlobalStyle,
	StepsImg,
};
