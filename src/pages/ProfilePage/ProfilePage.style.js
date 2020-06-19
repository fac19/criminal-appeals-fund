import styled from "styled-components";

const ApplicationSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: hsl(216, 50%, 90%);
	width: 100%;
	flex: 1;
	-webkit-box-shadow: inset 0px 1px 11px -3px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: inset 0px 1px 11px -3px rgba(0, 0, 0, 0.75);
	box-shadow: inset 0px 1px 11px -3px rgba(0, 0, 0, 0.75);
`;

const ApplicationPageHeader = styled.section`
	margin-top: 6rem;
`;

const ApplicantName = styled.h2`
	font-size: 2.5rem;
	padding-left: 3rem;
	padding-right: 3rem;
	margin-left: 2rem;
	margin-right: 2rem;
	text-align: left;
`;

const ApplicationStageList = styled.ul`
	list-style: none;
	display: block;
	flex-direction: column;
	align-items: flex-start;
	font-size: 1.4rem;
	text-align: left;
`;

const ApplicantDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	padding-left: 1rem;
	padding-right: 1rem;
	margin: 2rem;
`;

const ApplicantSubtitle = styled.h3`
	font-size: 1.8rem;
	padding-left: 3rem;
	padding-right: 3rem;
	margin-left: 2rem;
	text-align: left;
	font-weight: 400;
`;

export {
	ApplicationSection,
	ApplicationPageHeader,
	ApplicantName,
	ApplicationStageList,
	ApplicantDiv,
	ApplicantSubtitle,
};
