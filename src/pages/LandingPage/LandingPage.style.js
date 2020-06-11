import styled from "styled-components";

require("typeface-ibm-plex-serif");
// const StepsContainer = styled.section`
// 	background-color: "grey";
// `;

const StyledLanding = styled.section`
	font-family: "ibm plex serif";
	text-decoration: none;
`;

const BodyWrapper = styled.section`
	padding: 0;
	margin: 0;
`;

const HeaderWrapper = styled.section`
	min-height: 100vh;
`;
const StepsWrapper = styled.section`
	padding: 4em;
	background: papayawhip;
	margin: 0;
	padding: 0;
`;

const StepHeading = styled.h1`
	font-weight: bold;
`;

const StepsSubContainer = styled.section`
	display: flex;
	flex-direction: row;
`;

const StepsText = styled.section`
	display: flex;
	flex-direction: column;
	text-align: left;
`;

export {
	StyledLanding,
	BodyWrapper,
	HeaderWrapper,
	StepsWrapper,
	StepHeading,
	StepsSubContainer,
	StepsText,
};
