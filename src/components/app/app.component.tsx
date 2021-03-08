import React, { FC, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { GlobalStyle, Main, StyledCustomButton } from './app.styles';

import Header from '../header/header.component';
import CollectionCardContainer from '../collection-card-container/collection-container.component';

import { getSavedCollections, getGrandTotal, getTotal, Collection } from './app.utils';
import ErrorBoundary from 'components/error-boundary/error-boundary.component';

type Collections = { [key: string]: Collection } | Record<string, never>;

const App: FC = () => {
	const [collections, setCollections] = useState<Collections>({});

	useEffect(() => {
		setCollections((prevCollections) => {
			if (Object.keys(prevCollections).length === 0) return getSavedCollections();
			return prevCollections;
		});
	}, []);

	const createCollection = (title: string, amount: number) => {
		setCollections((prevCollections) => {
			const id = nanoid();
			const newCollection = { title, amount, items: {}, lists: {} };
			const updatedCollections = { ...prevCollections, [id]: newCollection };
			localStorage.setItem('collections', JSON.stringify(updatedCollections));
			return updatedCollections;
		});
	};

	const updateCollection = (key: string, collection: Collection) => {
		setCollections((prevCollections) => {
			const updatedCollection = { ...collection, amount: getTotal(collection) };
			const updatedCollections = { ...prevCollections, [key]: updatedCollection };
			localStorage.setItem('collections', JSON.stringify(updatedCollections));
			return updatedCollections;
		});
	};

	const removeCollection = (key: string) => {
		setCollections((prevCollections) => {
			const { [key]: collection, ...remainingCollections } = prevCollections;
			localStorage.setItem('collections', JSON.stringify(remainingCollections));
			return remainingCollections;
		});
	};

	return (
		<>
			<GlobalStyle />
			<Header levelTitle='categozyphoon' amount={getGrandTotal(collections)} />
			<Main>
				<ErrorBoundary>
					{Object.keys(collections).map((key) => (
						<CollectionCardContainer
							key={key}
							collection={collections[key]}
							match={{ path: `` }}
							onChange={(collection) => updateCollection(key, collection)}
							removeCollection={() => removeCollection(key)}
						/>
					))}
				</ErrorBoundary>
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
