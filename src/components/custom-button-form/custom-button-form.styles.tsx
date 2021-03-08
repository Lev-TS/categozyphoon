import styled, { css } from 'styled-components';

export const Container = styled.form<{ item?: boolean }>`
	width: 100%;
	min-height: 80px;
	display: grid;
	grid-template-rows: ${(props) => (props.item ? '1fr 1fr 1fr' : '1fr 1fr')};
	align-items: center;
	padding: 5px;

	background-color: #ebecf0;
	border-radius: 3px;
`;

export const InputField = styled.input`
	height: 35px;
	background-color: ${(props) => props.theme.colors.background};
	border: 1px solid ${(props) => props.theme.colors.darkBlue};
	border-radius: 3px;
	padding-left: 5px;
	margin-bottom: 5px;
	font-size: 0.75rem;
`;

const buttons = css`
	cursor: pointer;
	border: none;
	border-radius: 3px;
	color: ${(props) => props.theme.colors.background};

	&:hover {
		opacity: 0.8;
	}
`;

export const ButtonContainer = styled.div`
	align-self: center;
	display: flex;

	> :first-child {
		${buttons}
		background-color: ${(props) => props.theme.colors.darkBlue};
	}

	> :last-child {
		${buttons}

		background-color: ${(props) => props.theme.colors.red};
		color: ${(props) => props.theme.colors.background};
		height: 25px;
		width: 25px;
		margin-left: 5px;
		padding: 0;

		p {
			font-size: 1.25rem;
			line-height: 1.25rem;
			font-weight: 400;
			overflow: hidden;
		}
	}
`;
