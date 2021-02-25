import styled from 'styled-components';

export const TitleSection = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
	padding: 5px;

	> :first-child {
		color: ${(props) => props.theme.colors.darkBlue};
	}

	> :last-child {
		margin-left: 5px;
		cursor: pointer;
		border: none;
		padding: 0;
		background-color: inherit;
		color: ${(props) => props.theme.colors.darkBlue};

		p {
			font-size: 1.25rem;
			line-height: 1.25rem;
			font-weight: 300;
			color: inherit;
		}
	}
`;
