import React, { FC, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { GlobalStyle, Main, StyledCustomButton } from './app.styles';

import Header from '../header/header.component';
import CollectionContainer from '../../components/collection-container/collection-container.component';

import { getState, getGrandTotal, getTotal, CollectionsInterface, Node } from './app.utils';

const App: FC = () => {
	const state = getState();
	const [collections, setCollection] = useState<CollectionsInterface>(state);

	useEffect(() => {
		const persistState = async () => {
			localStorage.setItem('collections', JSON.stringify(collections));
		};
		persistState();
	}, [collections]);

	const createCollection = (title: string) => {
		const id = nanoid();
		const newCollection = { title, amount: 0, items: {}, lists: {} };
		setCollection({ ...collections, [id]: newCollection });
	};

	const updateCollection = (collectionId: string, updatedCollection: Node) => {
		const total = getTotal(updatedCollection);
		updatedCollection.amount = total;
		setCollection({ ...collections, [collectionId]: updatedCollection });
	};

	const removeCollection = (key: string) => {
		const newCollections = { ...collections };
		delete newCollections[key];
		setCollection(newCollections);
	};

	return (
		<>
			<GlobalStyle />
			<Header levelTitle='categozyphoon' amount={getGrandTotal(collections)} />
			<Main>
				{Object.keys(collections).map((key) => (
					<CollectionContainer
						key={key}
						collection={collections[key]}
						onChange={(updatedCollection) => updateCollection(key, updatedCollection)}
						removeCollection={() => removeCollection(key)}
						match={{ path: `` }}
					/>
				))}
				<StyledCustomButton collection text='+ Create a collection' addNode={createCollection} />
			</Main>
		</>
	);
};

export default App;
