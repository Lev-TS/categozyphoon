import React, { FC, SyntheticEvent, useEffect, useRef, useState } from 'react';

import { FormContainer, ButtonContainer, InputField } from './custom-button-form.styles';

interface Props {
	toggleForm: () => void;
	addNode: (title: string, amount?: number) => void;
	item?: boolean;
	placeholder: string;
}

const CustomButtonForm: FC<Props> = ({ toggleForm, addNode, placeholder, item }) => {
	const [title, setTitle] = useState<string>('');
	const [amount, setAmount] = useState<number>(); // FIXME: controll e.g. input type should be text and constrained with regex.

	const inputRef = useRef<HTMLInputElement>(null);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		if (name === 'title') setTitle(value);
		if (name === 'amount') setAmount(+value);
	};

	const handleSubmit = (event: SyntheticEvent) => {
		event.preventDefault();
		toggleForm();
		if (item && title && amount) return addNode(title, amount);
		if (title) addNode(title);
	};

	useEffect(() => inputRef.current?.focus(), []);

	return (
		<FormContainer onSubmit={handleSubmit} item={item}>
			<InputField
				name='title'
				value={title}
				type='text'
				placeholder={placeholder}
				required
				onChange={handleChange}
				ref={inputRef}
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
		</FormContainer>
	);
};

export default CustomButtonForm;
