import styled from 'styled-components';

export const Container = styled.div`
	padding: 5px;
`;

export const SubTitle = styled.h6`
	color: ${(props) => props.theme.colors.darkBlue};
	margin-bottom: 5px;
`;

export const Line = styled.hr`
	color: ${(props) => props.theme.colors.darkBlue};
	margin-bottom: 7px;
`;

export const CardContainer = styled.div`
	display: grid;
	grid-gap: 10px;

	p {
		font-size: 0.75rem;
		color: ${({ theme }) => theme.colors.lightGrey};
	}
`;

export const Card = styled.div`
	background-color: ${({ theme }) => theme.colors.foreground};
	width: 100%;
	border-radius: 3px;
	padding: 5px;
	font-size: 0.75rem;
	color: ${({ theme }) => theme.colors.darkBlue};
`;
