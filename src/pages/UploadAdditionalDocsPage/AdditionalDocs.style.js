import styled from "styled-components";
require("typeface-ibm-plex-serif");

const PageTitle = styled.h1`
	font: ibm-plex-serif;
	font-size: 2em;
	color: #0e0c0b;
	text-align: center;
	padding: 6rem 6rem 1rem 6rem;
`;

const AdditionalWrapper = styled.section`
	display: flex;
	flex-direction: column;
`;
const TextWrapper = styled.section`
	margin: 0 3em;
`;

const ButtonWrapper = styled.section`
	display: grid;
	flex-direction: column;
	width: 30rem;
	margin: 1em auto 2em;
`;

const AddInfoSubtitle = styled.h3`
	margin-top: 1rem;
	font-size: 1.1rem;
	opacity: 0.9;
	font-weight: 400;
`;

export {
	PageTitle,
	ButtonWrapper,
	TextWrapper,
	AdditionalWrapper,
	AddInfoSubtitle,
};
