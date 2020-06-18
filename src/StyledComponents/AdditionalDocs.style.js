import styled from "styled-components";
require("typeface-ibm-plex-serif");

const PageTitle = styled.h1`
	font: ibm-plex-serif;
	font-size: 2em;
	color: black;
	text-align: center;
	// margin: 2em;
`;

const TextWrapper = styled.section`
	margin: 0 2em;
`;

const ButtonWrapper = styled.section`
	display: grid;
	flex-direction: column;
	width: 8.5rem;
	margin: 0 auto;
`;

export { PageTitle, ButtonWrapper, TextWrapper };
