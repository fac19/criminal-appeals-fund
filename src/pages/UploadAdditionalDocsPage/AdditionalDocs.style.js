import styled from "styled-components";
require("typeface-ibm-plex-serif");

const PageTitle = styled.h1`
	font: ibm-plex-serif;
	font-size: 2em;
	color: #0e0c0b;
	text-align: center;
	// margin: 2em;
`;

const TextWrapper = styled.section`
	margin: 0 3em;
`;

const ButtonWrapper = styled.section`
	display: grid;
	flex-direction: column;
	width: 8.5rem;
	margin: 1em auto 2em;
`;

export { PageTitle, ButtonWrapper, TextWrapper };
