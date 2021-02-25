import { useCollectionContainerContext } from 'components/collection-container/collection-container.context';
import React, { FC } from 'react';

import { InfoSection, SubTitle, Line, InfoGroup } from './collection-card-info-section.styles';

const CollectionCardInfoSection: FC = () => {
	const { collection } = useCollectionContainerContext();
	return (
		<InfoSection>
			<SubTitle>SUMMARY</SubTitle>
			<Line />
			<InfoGroup>
				<p>Sub-Total Sales:</p>
				<p>&#8364; {`${collection.amount.toFixed(2)}`}</p>
			</InfoGroup>
		</InfoSection>
	);
};

export default CollectionCardInfoSection;
