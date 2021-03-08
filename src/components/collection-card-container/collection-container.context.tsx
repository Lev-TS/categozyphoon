import { createContext, useContext } from 'react';

interface Item {
	title: string;
	amount: number;
}

export interface Collection {
	title: string;
	amount: number;
	items: { [key: string]: Item };
	lists: { [key: string]: Collection };
}

type Value =
	| {
			collection: Collection;
			matchPath: string;
			addSubCollection: (title: string, amount: number) => void;
			addItem: (title: string, amount: number) => void;
			handleRemoveNode: (key: string, type: string) => void;
			removeCollection: () => void;
	  }
	| Record<string, never>;

export const CollectionContainerContext = createContext<Value>({});
export const useCollectionContainerContext = (): Value => useContext(CollectionContainerContext);
