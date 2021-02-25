import { createContext, useContext } from 'react';

export interface Node {
	title: string;
	amount: number;
	items: { [key: string]: Node };
	lists: { [key: string]: Node };
}

type Value =
	| {
			collection: Node;
			removeCollection: () => void;
			handleRemoveNode: (key: string, type: string) => void;
			handleAddNode: (title: string, amount?: number) => void;
			matchPath: string;
	  }
	| Record<string, never>;

export const CollectionContainerContext = createContext<Value>({});
export const useCollectionContainerContext = (): Value => useContext(CollectionContainerContext);
