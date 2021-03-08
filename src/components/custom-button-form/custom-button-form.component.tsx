import React, { FC, SyntheticEvent, useEffect, useRef, useState } from 'react';

import { Container, ButtonContainer, InputField } from './custom-button-form.styles';

interface Props {
	toggleForm: () => void;
	addNode: (title: string, amount: number) => void;
	placeholder: string;
	item?: boolean;
}

const CustomButtonForm: FC<Props> = ({ toggleForm, addNode, placeholder, item }) => {
	const [title, setTitle] = useState<string>('');
	const [amount, setAmount] = useState<number | string>('');

	const textInputRef = useRef<HTMLInputElement>(null);
	useEffect(() => textInputRef.current?.focus(), []);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		if (name === 'title') setTitle(value);
		if (name === 'amount') setAmount(+value);
	};

	const handleSubmit = (event: SyntheticEvent) => {
		event.preventDefault();
		toggleForm();
		addNode(title, +amount || 0);
	};

	return (
		<Container onSubmit={handleSubmit} item={item}>
			<InputField
				name='title'
				value={title}
				type='text'
				placeholder={placeholder}
				required
				onChange={handleChange}
				ref={textInputRef}
			/>
			{item && (
				<InputField
					name='amount'
					value={amount}
					type='number'
					placeholder='Enter item price'
					required
					onChange={handleChange}
				/>
			)}
			<ButtonContainer>
				<button type='submit'>Add</button>
				<button type='button' onClick={toggleForm}>
					<p>&times;</p>
				</button>
			</ButtonContainer>
		</Container>
	);
};

export default CustomButtonForm;
