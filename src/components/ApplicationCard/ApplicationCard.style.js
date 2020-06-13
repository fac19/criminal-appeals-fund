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

const ApplicationStageList = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	font-size: 1.2rem;
`;

const ApplicationInfo = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 90%;
	margin: 0.5rem auto;
`;

export { ApplicationCardContainer, ApplicationStageList, ApplicationInfo };
