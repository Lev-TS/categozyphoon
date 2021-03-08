import styled, { css } from 'styled-components';

export const Container = styled.div`
	width: 100%;
	max-width: 272px;
`;

const collection = css`
	font-size: 1rem;
	color: ${({ theme }) => theme.colors.background};
	background-color: hsla(0, 0%, 100%, 0.3);

	&:hover {
		background-color: hsla(0, 0%, 100%, 0.2);
	}
`;

const list = css`
	font-size: 0.75rem;
	color: ${({ theme }) => theme.colors.lightGrey};
	background-color: ${({ theme }) => theme.colors.cardList};

	&:hover {
		background-color: hsla(0, 0%, 100%, 0.3);
	}
`;

const item = css`
	font-size: 0.75rem;
	background-color: ${({ theme }) => theme.colors.cardList};
	color: ${({ theme }) => theme.colors.lightGrey};

	&:hover {
		background-color: hsla(0, 0%, 100%, 0.3);
	}
`;

export const InitialButton = styled.button<{ category: string }>`
	width: 100%;
	font-weight: 400;
	border-radius: 3px;
	border: 0;
	text-decoration: none;
	align-items: center;
	box-shadow: none;
	height: 40px;
	white-space: nowrap;
	cursor: pointer;
	outline: 0;
	overflow: hidden;

	${(props) => props.category === 'collection' && collection}
	${(props) => props.category === 'list' && list}
	${(props) => props.category === 'item' && item}
`;
