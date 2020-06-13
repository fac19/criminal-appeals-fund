import styled from "styled-components";

const ApplicationSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: hsl(0, 0%, 93%);
	width: 100%;
	border-top: 2px solid darkgray;
	/* -webkit-box-shadow: inset 0px 7px 3px -3px rgba(0, 0, 0, 0.68);
	-moz-box-shadow: inset 0px 7px 3px -3px rgba(0, 0, 0, 0.68);
	box-shadow: inset 0px 7px 3px -3px rgba(0, 0, 0, 0.68); */
`;

const ApplicationPageHeader = styled.section``;

const ApplicantInfo = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-left: 3rem;
	padding-right: 3rem;
	margin-left: 2rem;
	margin-right: 2rem;
	margin-top: 0;
`;

const ApplicantName = styled.h2`
	font-size: 2.5rem;
`;

export {
	ApplicationSection,
	ApplicationPageHeader,
	ApplicantInfo,
	ApplicantName,
};
