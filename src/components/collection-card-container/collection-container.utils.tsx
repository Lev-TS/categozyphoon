import { Collection } from './collection-container.context';

export const setSubTotal = (collection: Collection): void => {
	let subTotal = 0;
	Object.keys(collection.items).map((key) => {
		if (collection.items[key]) subTotal += collection.items[key].amount;
	});
	const lists = Object.keys(collection.lists);
	if (lists.length > 0) {
		lists.map((key) => {
			if (collection.lists[key]) subTotal += collection.lists[key].amount;
			setSubTotal(collection.lists[key]);
		});
	}
	collection.amount = subTotal;
};
