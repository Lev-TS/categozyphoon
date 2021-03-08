import React, { FC, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { GlobalStyle, Main, StyledCustomButton } from './app.styles';

import Header from '../header/header.component';
import CollectionCardContainer from '../collection-card-container/collection-container.component';

import { getSavedCollections, getGrandTotal, getTotal, Collection } from './app.utils';

type Collections = { [key: string]: Collection } | Record<string, never>;

const App: FC = () => {
	const [collections, setCollections] = useState<Collections>({});

	useEffect(() => {
		setCollections((currentCollections) => {
			if (Object.keys(currentCollections).length === 0) return getSavedCollections();
			return currentCollections;
		});
	}, []);

	const createCollection = (title: string, amount: number) => {
		setCollections((currentCollections) => {
			const id = nanoid();
			const newCollection = { title, amount, items: {}, lists: {} };
			const updatedCollections = { ...currentCollections, [id]: newCollection };
			localStorage.setItem('collections', JSON.stringify(updatedCollections));
			return updatedCollections;
		});
	};

	const updateCollection = (collectionId: string, changedCollection: Collection) => {
		setCollections((currentCollections) => {
			const updatedCollection = { ...changedCollection, amount: getTotal(changedCollection) };
			const updatedCollections = { ...currentCollections, [collectionId]: updatedCollection };
			localStorage.setItem('collections', JSON.stringify(updatedCollections));
			return updatedCollections;
		});
	};

	const removeCollection = (key: string) => {
		setCollections((currentCollections) => {
			const { [key]: collection, ...remainingCollections } = currentCollections;
			localStorage.setItem('collections', JSON.stringify(remainingCollections));
			return remainingCollections;
		});
	};

	return (
		<>
			<GlobalStyle />
			<Header levelTitle='categozyphoon' amount={getGrandTotal(collections)} />
			<Main>
				{Object.keys(collections).map((key) => (
					<CollectionCardContainer
						key={key}
						collection={collections[key]}
						match={{ path: `` }}
						onChange={(changedCollection) => updateCollection(key, changedCollection)}
						removeCollection={() => removeCollection(key)}
					/>
				))}
				<StyledCustomButton
					category='collection'
					content='+ Create a collection'
					addNode={createCollection}
				/>
			</Main>
		</>
	);
};

export default App;
