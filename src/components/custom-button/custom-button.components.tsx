import React, { FC, useState } from 'react';

interface Props {
	category: string;
	content: string;
	className?: string;
	addNode: (title: string, amount: number) => void;
}

import { InitialButton, Container } from './custom-button.styles';

import CustomButtonForm from '../custom-button-form/custom-button-form.component';

const CustomButton: FC<Props> = ({ category, content, className, addNode }) => {
	const [isActive, setIsActive] = useState<boolean>(false);
	const toggleForm = () => setIsActive((currentState) => !currentState);

	return (
		<Container className={className}>
			{!isActive ? (
				<InitialButton type='button' onClick={toggleForm} category={category}>
					{content}
				</InitialButton>
			) : (
				<CustomButtonForm
					toggleForm={toggleForm}
					placeholder={`Enter ${category} name`}
					item={category === 'item'}
					addNode={addNode}
				/>
			)}
		</Container>
	);
};

export default CustomButton;
