import styled from 'styled-components';

export const CardWrapper = styled.div`
	width: ${(props) => props.theme.cardListWidth};
	height: 100%;
	vertical-align: top;
`;

export const CardSections = styled.div`
	background-color: ${(props) => props.theme.colors.cardList};
	border-radius: 3px;
	padding: 5px;
`;
