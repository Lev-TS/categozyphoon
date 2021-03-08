import React, { FC } from 'react';
import { nanoid } from 'nanoid';
import { Route } from 'react-router-dom';

import { setSubTotal } from './collection-container.utils';
import { CollectionContainerContext, Collection } from './collection-container.context';

import CollectionCard from '../collection-card/collection-card.component';

import { Container } from './collection-container.styles';

interface Props {
	collection: Collection;
	match: { path: string };
	onChange: (collection: Collection) => void;
	removeCollection: () => void;
}

const CollectionCardContainer: FC<Props> = ({ collection, match, onChange, removeCollection }) => {
	const addSubCollection = (title: string, amount: number) => {
		const currentCollection = { ...collection };
		const newSubCollection = { title, amount, items: {}, lists: {} };
		currentCollection.lists[nanoid()] = newSubCollection;
		onChange(currentCollection);
	};

	const addItem = (title: string, amount: number) => {
		const currentCollection = { ...collection };
		const newItem = { title, amount };
		currentCollection.items[nanoid()] = newItem;
		onChange(currentCollection);
	};

	const handleRemoveNode = (key: string, nodeType: string) => {
		const currentCollection = { ...collection };
		if (nodeType === 'list') delete currentCollection.lists[key];
		if (nodeType === 'item') delete currentCollection.items[key];
		onChange(currentCollection);
	};

	const updateCurrentCollection = () => {
		const currentCollection = { ...collection };
		setSubTotal(currentCollection);
		onChange(currentCollection);
	};

	const lists = Object.keys(collection.lists);

	return (
		<Container>
			<CollectionContainerContext.Provider
				value={{
					collection,
					matchPath: match.path,
					addItem,
					addSubCollection,
					handleRemoveNode,
					removeCollection
				}}
			>
				<CollectionCard />
			</CollectionContainerContext.Provider>

			{/* Base Case */}
			{lists.length > 0
				? lists.map((key) => (
						<Route
							key={key}
							path={`${match.path}/${key}`}
							render={(props) => (
								<CollectionCardContainer
									{...props}
									collection={collection.lists[key]}
									removeCollection={() => handleRemoveNode(key, 'list')}
									onChange={updateCurrentCollection}
								/>
							)}
						/>
				  ))
				: null}
		</Container>
	);
};

export default CollectionCardContainer;
