import styled from 'styled-components';

export const Container = styled.div`
	white-space: nowrap;
	display: inline-block;
	vertical-align: top;

	> :first-of-type {
		margin-right: 20px;

		> :first-of-type {
			margin-bottom: 20px;
		}
	}
`;
