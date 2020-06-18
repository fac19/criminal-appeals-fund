import styled from "styled-components";

const ApplicationCardContainer = styled.article`
	border-radius: 1.5rem;
	width: 95%;
	background-color: white;
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
	background-color: white;
	color: #ff726f;
	border: 1.3px solid #ff726f;
	border-radius: 8px;
	cursor: pointer;
	width: 11rem;
	height: 3rem;
	margin: 2rem;
	font-family: "IBM Plex Serif", serif;
	font-size: 1.1rem;
	transition: 0.3s;
	&:hover {
		opacity: 0.9;
	}
`;

const ApplicationStatus = styled.h3`
	font-size: 1.4rem;
	font-weight: 300;
`;

const StatusButton = styled.button`
	background-color: white;
	color: #2096ee;
	border: 1.3px solid #2096ee;
	border-radius: 8px;
	width: 13rem;
	height: 3rem;
	font-family: "IBM Plex Serif", serif;
	margin: 2rem;
	font-size: 1.1rem;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		opacity: 0.9;
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
