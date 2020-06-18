import styled from "styled-components";

const ApplicationCardContainer = styled.article`
	border-radius: 0.5rem;
	width: 95%;
	background-color: #f1f3f4;
	box-shadow: 0 0.5em 1em 0 rgba(0, 0, 0, 0.3);
	transition: 0.3s;
	&:hover {
		box-shadow: 0 1em 2em 0 rgba(0, 0, 0, 0.3);
	}
	margin: 1rem;
`;

const CaseName = styled.h2`
	font-size: 1.6rem;
	font-weight: 400;
	text-align: center;
	margin-left: 1rem;
`;

const ApplicationInfo = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 90%;
	margin: 0.5rem auto;
`;

const WithdrawButton = styled.button`
	background-color: #f1f3f4;
	color: #d2222d;
	border: 1.3px solid #d2222d;
	border-radius: 0.5rem;
	cursor: pointer;
	max-width: 13rem;
	white-space: nowrap;
	min-height: 3rem;
	margin: 2rem;
	font-family: "IBM Plex Serif", serif;
	font-size: 1.1rem;
	transition: 0.3s;
	&:hover {
		background-color: #d2222d;
		color: #f1f3f4;
	}
`;

const ApplicationStatus = styled.h3`
	font-size: 1.4rem;
	font-weight: 300;
`;

const StatusButton = styled.button`
	background-color: #f1f3f4;
	color: #2a7886;
	border: 1.3px solid #2a7886;
	border-radius: 0.5rem;
	max-width: 13rem;
	min-height: 3rem;
	font-family: "IBM Plex Serif", serif;
	font-size: 1.1rem;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		background-color: #2a7886;
		color: #f1f3f4;
	}
`;

export {
	ApplicationCardContainer,
	CaseName,
	ApplicationInfo,
	WithdrawButton,
	ApplicationStatus,
	StatusButton,
};
