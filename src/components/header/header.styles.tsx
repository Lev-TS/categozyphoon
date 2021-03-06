import styled from 'styled-components';

export const Container = styled.div`
	height: 40px;
	position: fixed;
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 0 10px;
	background-color: ${(props) => props.theme.colors.grey};
	color: ${(props) => props.theme.colors.background};

	a {
		text-decoration: none;
		color: inherit;
	}

	> :first-child {
		flex-grow: 2;
	}

	> :last-child {
		margin-left: 15px;
	}
`;
