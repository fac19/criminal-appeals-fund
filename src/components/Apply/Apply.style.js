import styled from "styled-components";

const CriteriaInfoList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-evenly;
	list-style: none;
	padding: 0;
`;

const ClusterInfoList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	list-style: none;
	padding: 0;
`;

const ApplyInfoListItem = styled.li`
	text-align: left;
	padding: 1rem;
	border-radius: 5px;
	background-color: #f1f3f4;
	width: 30rem;
	margin-bottom: 1rem;
	box-sizing: border-box;
	font-size: 1.1rem;
	box-shadow: 0 0.2em 0.2em 0 rgba(0, 0, 0, 0.3);
`;

const ApplyTitle = styled.h2`
	font-size: 2.5rem;
`;

const ApplySubtitle = styled.h4`
	margin-top: 1rem;
	font-size: 1.1rem;
	opacity: 0.9;
	font-weight: 400;
`;

export {
	CriteriaInfoList,
	ApplyInfoListItem,
	ClusterInfoList,
	ApplyTitle,
	ApplySubtitle,
};
