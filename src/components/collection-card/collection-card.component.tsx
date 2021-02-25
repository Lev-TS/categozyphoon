import React, { FC } from 'react';
import CustomButton from '../custom-button/custom-button.components';

import { useCollectionContainerContext } from '../collection-container/collection-container.context';
import { CardWrapper, CardSections } from './collection-card.styles';

import CollectionCardTitleSection from 'components/collection-card-title-section/collection-card-title-section.component';
import CollectionCardInfoSection from 'components/collection-card-info-section/collection-card-info-section.component';
import CollectionCardNodeSection from 'components/collection-card-node-section/collection-card-node-section.component';

const CollectionCard: FC = () => {
	const { collection, handleAddNode } = useCollectionContainerContext();
	return (
		<CardWrapper>
			<CardSections>
				<CollectionCardTitleSection title={collection.title} />
				<CollectionCardInfoSection />
				<CollectionCardNodeSection list subTitle='LISTS' />
				<CustomButton list text='+ Add a new list' addNode={handleAddNode} />
				<CollectionCardNodeSection subTitle='ITEMS' />
				<CustomButton item text='+ Add a new item' addNode={handleAddNode} />
			</CardSections>
		</CardWrapper>
	);
};

export default CollectionCard;
