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

export const getGrandTotal = (collections: { [key: string]: Collection }): number => {
	let total = 0;
	Object.keys(collections).map((key) => {
		if (collections[key]) total += collections[key].amount;
	});
	return total;
};

export const getSavedCollections = (): { [key: string]: Collection } => {
	const persistedState = localStorage.getItem('collections');
	if (persistedState != null) return JSON.parse(persistedState);
	return {};
};

export const getTotal = (collection: Collection): number => {
	const currentCollection = { ...collection };

	let subTotal = 0;

	Object.keys(currentCollection.items).map((key) => {
		if (currentCollection.items[key]) subTotal += currentCollection.items[key].amount;
	});

	const lists = Object.keys(currentCollection.lists);

	if (lists.length > 0) {
		lists.map((key) => {
			if (currentCollection.lists[key]) subTotal += currentCollection.lists[key].amount;
			getTotal(currentCollection.lists[key]);
		});
	}

	return subTotal;
};
