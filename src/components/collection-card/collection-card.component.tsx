import React, { FC } from 'react';
import CustomButton from '../custom-button/custom-button.components';

import { useCollectionContainerContext } from '../collection-card-container/collection-container.context';
import { CardWrapper, Container } from './collection-card.styles';

import CollectionCardTitleSection from 'components/collection-card-title-section/collection-card-title-section.component';
import CollectionCardInfoSection from 'components/collection-card-info-section/collection-card-info-section.component';
import CollectionCardNodeSection from 'components/collection-card-node-section/collection-card-node-section.component';

const CollectionCard: FC = () => {
	const { collection, addSubCollection, addItem } = useCollectionContainerContext();

	return (
		<CardWrapper>
			<Container>
				<CollectionCardTitleSection title={collection.title} />
				<CollectionCardInfoSection />
				<CollectionCardNodeSection list subTitle='LISTS' />
				<CustomButton category='list' content='+ Add a new list' addNode={addSubCollection} />
				<CollectionCardNodeSection subTitle='ITEMS' />
				<CustomButton category='item' content='+ Add a new item' addNode={addItem} />
			</Container>
		</CardWrapper>
	);
};

export default CollectionCard;
