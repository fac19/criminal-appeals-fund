import styled from "styled-components";

const ApplicationSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: hsl(0, 0%, 93%);
	width: 100%;
	border-top: 2px solid darkgray;
`;

const ApplicationPageHeader = styled.section``;

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
	justify-content: space-between;
	align-items: center;
	padding-left: 3rem;
	padding-right: 3rem;
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
