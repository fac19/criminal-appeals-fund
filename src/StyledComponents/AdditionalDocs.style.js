import styled from "styled-components";
require("typeface-ibm-plex-serif");

const PageTitle = styled.h1`
	font: sans-serif;
	font-size: 30px;
	color: black;
	text-align: center;
`;

const ButtonWrapper = styled.section`
	display: grid;
	flex-direction: column;
	width: 200px;
	margin: 0 auto;
`;

// const ButtonAlt = styled.button`
//   color: palevioletred;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;

export { PageTitle, ButtonWrapper };
