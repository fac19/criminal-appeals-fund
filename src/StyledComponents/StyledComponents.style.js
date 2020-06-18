import styled from "styled-components";

const Form = styled.form`
	display: flex;
	height: 500px;
	flex-direction: column;
	max-width: 20rem;
	margin: 8rem auto;
	align-content: center;
	align-items: center;
	justify-content: center;
`;

const ErrorText = styled.p`
	color: red;
	margin-bottom: 1rem;
`;

const SuccessfulText = styled.p`
	color: #238823;
`;

const FormSection = styled.section`
	height: 80%;
	width: 100%;
	margin-top: 1rem;
	margin-bottom: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

const ButtonList = styled.ul`
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	width: 100%;
	padding: 0;
	margin: 0;
`;

export { Form, ErrorText, FormSection, ButtonList, SuccessfulText };
