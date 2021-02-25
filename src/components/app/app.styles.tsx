import { FC } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import CustomButton from '../custom-button/custom-button.components';

export const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
	}

	html, body, #root {
		height: 100%;
		width: 100%;
	}

	html {
		font-size: 16px;
		line-height: 24px;
		font-weight: normal;
		font-style: normal;
	}

	body {
		color: ${(props) => props.theme.colors.black};
		font-family: ${(props) => props.theme.fontFamily};
		background: ${(props) => props.theme.colors.mediumBlue};

		h1 {
			font-weight: bold;
			font-size: 40px;
			line-height: 40px;
		}

		h2 {
			font-weight: bold;
			font-size: 32px;
			line-height: 36px;
		}

		h3 {
			font-weight: bold;
			font-size: 28px;
			line-height: 32px;
		}
		h4 {
			font-weight: bold;
			font-size: 1.5rem;
			line-height: 2rem;
		}
		h5 {
			font-weight: bold;
			font-size: 16px;
			line-height: 20px;
		}
		h6 {
			font-weight: bold;
			font-size: 12px;
			line-height: 12px;
		}
	}
`;

export const Main = styled.div`
	width: 100%;
	min-height: 100vh;
	padding: 100px 10px;
	white-space: nowrap;
	overflow: auto;
`;

interface Props {
	collection?: boolean;
	list?: boolean;
	item?: boolean;
	text: string;
	addNode: (title: string) => void;
}

export const StyledCustomButton: FC<Props> = styled(CustomButton)`
	width: ${(props) => props.theme.cardListWidth};
	display: inline-block;
	vertical-align: top;
`;
