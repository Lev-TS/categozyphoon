import { useCollectionContainerContext } from 'components/collection-card-container/collection-container.context';
import React, { FC } from 'react';

import { Container, SubTitle, Line, InfoGroup } from './collection-card-info-section.styles';

const CollectionCardInfoSection: FC = () => {
	const { collection } = useCollectionContainerContext();
	return (
		<Container>
			<SubTitle>SUMMARY</SubTitle>
			<Line />
			<InfoGroup>
				<p>Sub-Total Sales:</p>
				<p>&#8364; {`${collection.amount.toFixed(2)}`}</p>
			</InfoGroup>
		</Container>
	);
};

export default CollectionCardInfoSection;
