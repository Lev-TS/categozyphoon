import React, { FC } from 'react';
import { useCollectionContainerContext } from 'components/collection-container/collection-container.context';

import { TitleSection } from './collection-card-title-section.styles';

const CollectionCardTitleSection: FC<{ title: string }> = ({ title }) => {
	const { removeCollection } = useCollectionContainerContext();

	return (
		<TitleSection>
			<h5>{title}</h5>
			<button type='button' onClick={removeCollection}>
				<p>&times;</p>
			</button>
		</TitleSection>
	);
};

export default CollectionCardTitleSection;
