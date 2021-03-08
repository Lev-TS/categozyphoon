import React, { FC } from 'react';
import { useCollectionContainerContext } from 'components/collection-card-container/collection-container.context';

import { Container } from './collection-card-title-section.styles';

const CollectionCardTitleSection: FC<{ title: string }> = ({ title }) => {
	const { removeCollection } = useCollectionContainerContext();

	return (
		<Container>
			<h5>{title}</h5>
			<button type='button' onClick={removeCollection}>
				<p>&times;</p>
			</button>
		</Container>
	);
};

export default CollectionCardTitleSection;
