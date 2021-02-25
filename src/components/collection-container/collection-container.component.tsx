import React, { FC } from 'react';
import { nanoid } from 'nanoid';
import { Route } from 'react-router-dom';

import { assignAmount } from './collection-container.utils';
import { CollectionContainerContext, Node } from './collection-container.context';

import CollectionCard from '../collection-card/collection-card.component';

import { Container } from './collection-container.styles';

interface Props {
	collection: Node;
	onChange: (collection: Node) => void;
	removeCollection: () => void;
	match: { path: string };
}

// recursive component
const CollectionContainer: FC<Props> = ({ collection, onChange, removeCollection, match }) => {
	const id = nanoid();
	const handleAddNode = (title: string, amount?: number) => {
		const newNode = {
			title,
			amount: amount || 0,
			items: {},
			lists: {}
		};
		if (amount) collection.items[id] = newNode;
		else collection.lists[id] = newNode;
		onChange(collection);
	};

	const handleRemoveNode = (key: string, nodeType: string) => {
		if (nodeType === 'list') delete collection.lists[key];
		if (nodeType === 'item') delete collection.items[key];
		onChange(collection);
	};

	const handleAmountChange = () => {
		assignAmount(collection); // calculate sub total and mutate collection
		onChange(collection);
	};

	const lists = Object.keys(collection.lists);

	return (
		<Container>
			<CollectionContainerContext.Provider
				value={{
					collection,
					removeCollection,
					handleRemoveNode,
					handleAddNode,
					matchPath: match.path
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
								<CollectionContainer
									{...props}
									collection={collection.lists[key]}
									removeCollection={() => handleRemoveNode(key, 'list')}
									onChange={handleAmountChange}
									isAuthed={true}
								/>
							)}
						/>
				  ))
				: null}
		</Container>
	);
};

export default CollectionContainer;
