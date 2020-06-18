import styled from "styled-components";

const Form = styled.form`
	display: flex;
	min-height: 500px;
	flex-direction: column;
	max-width: 30rem;
	margin: 8rem auto;
	align-content: center;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

const ErrorText = styled.p`
	color: #ff726f;
	margin-top: 2rem;
	font-size: 1.1rem;
`;

const UploadSuccess = styled.p`
	color: #4bb543;
	margin-bottom: 1rem;
`;

const FormSection = styled.section`
	min-height: 80%;
	width: 100%;
	margin-top: 1rem;
	margin-bottom: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const ButtonList = styled.ul`
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	width: 100%;
	padding: 0;
	margin: 0;
`;

export { Form, ErrorText, FormSection, ButtonList, UploadSuccess };
