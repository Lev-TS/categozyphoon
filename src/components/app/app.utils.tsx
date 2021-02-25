export interface Node {
	id?: string;
	title: string;
	amount: number;
	items: { [key: string]: Node };
	lists: { [key: string]: Node };
}

export interface CollectionsInterface {
	[key: string]: Node;
}

export const getGrandTotal = (collections: CollectionsInterface): number => {
	let total = 0;
	Object.keys(collections).map((key) => {
		if (collections[key]) total += collections[key].amount;
	});
	return total;
};

export const getState = (): CollectionsInterface => {
	const persistedState = localStorage.getItem('collections');
	if (persistedState != null) return JSON.parse(persistedState);
	return {};
};

export const getTotal = (collection: Node): number => {
	let subTotal = 0;
	Object.keys(collection.items).map((key) => {
		if (collection.items[key]) subTotal += collection.items[key].amount;
	});
	const lists = Object.keys(collection.lists);
	if (lists.length > 0) {
		lists.map((key) => {
			if (collection.lists[key]) subTotal += collection.lists[key].amount;
			getTotal(collection.lists[key]);
		});
	}
	return subTotal;
};
