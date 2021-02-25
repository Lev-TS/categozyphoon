import styled from 'styled-components';

export const InfoSection = styled.div`
	margin-bottom: 20px;
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

export const InfoGroup = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 0.75rem;
	color: ${({ theme }) => theme.colors.darkBlue};

	> :last-child {
		margin-left: 10px;
	}
`;
