import styled from 'styled-components';

export const CardContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.background};
	width: 100%;
	border-radius: 3px;
	font-size: 0.75rem;
	color: ${({ theme }) => theme.colors.darkBlue};
	-webkit-box-shadow: 0px 0px 4px 3px rgba(29, 53, 87, 0.1);
	box-shadow: 0px 0px 4px 3px rgba(29, 53, 87, 0.1);
	overflow: hidden;
	padding-left: 5px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	:first-child {
		margin-top: 10px;
	}

	button,
	a {
		border: none;
		background: inherit;
		height: 30px;
		width: 30px;
		cursor: pointer;
		border-left: 1px solid ${({ theme }) => theme.colors.lightGrey};
		overflow: hidden;
		text-decoration: none;
		color: ${({ theme }) => theme.colors.black};
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;

		&:hover {
			border-left: 1px solid ${({ theme }) => theme.colors.darkBlue};
			background-color: ${({ theme }) => theme.colors.darkBlue};
			color: ${({ theme }) => theme.colors.background};
		}

		p {
			font-size: 1.25rem;
			line-height: 1.25rem;
			font-weight: 300;
			color: inherit;
		}
	}
`;

export const InfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 80%;

	h6 {
		font-weight: 400;
	}
`;
