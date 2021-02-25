import React, { FC, useState } from 'react';

interface Props {
	collection?: boolean;
	list?: boolean;
	item?: boolean;
	text: string;
	addNode: (title: string, amount?: number) => void;
	className?: string;
}

import { InitialButton, CustomButtonContainer } from './custom-button.styles';

import CustomButtonForm from '../custom-button-form/custom-button-form.component';

const CustomButton: FC<Props> = ({ collection, list, item, text, addNode, className }) => {
	const [isActive, setIsActive] = useState<boolean>(false);
	const toggleForm = () => setIsActive(!isActive);
	let placeholder;
	if (collection) placeholder = 'Enter collection name';
	if (list) placeholder = 'Enter list name';
	if (item) placeholder = 'Enter item name';

	return (
		<CustomButtonContainer className={className}>
			{!isActive ? (
				<InitialButton
					type='button'
					onClick={toggleForm}
					collection={collection}
					list={list}
					item={item}
				>
					{text}
				</InitialButton>
			) : (
				<CustomButtonForm
					toggleForm={toggleForm}
					placeholder={placeholder}
					item={item}
					addNode={addNode}
				/>
			)}
		</CustomButtonContainer>
	);
};

export default CustomButton;
