import React, { FC } from 'react';

import { HeaderContainer } from './header.styles';

interface Props {
	amount: number;
	levelTitle: string;
}

const Header: FC<Props> = ({ levelTitle, amount }) => {
	return (
		<HeaderContainer>
			<h5>{levelTitle}</h5>
			<h5>Total Sales:</h5>
			<h5>&#8364; {`${amount.toFixed(2)}`}</h5>
		</HeaderContainer>
	);
};

export default Header;
