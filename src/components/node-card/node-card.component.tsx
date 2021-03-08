import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useCollectionContainerContext } from 'components/collection-card-container/collection-container.context';
import { Container, InfoContainer } from './node-card.styles';

type Props = {
	title: string;
	id: string;
	amount: number;
	list?: boolean;
};

const NodeCard: FC<Props> = ({ id, title, amount, list }) => {
	const { handleRemoveNode, matchPath } = useCollectionContainerContext();

	return (
		<Container>
			<InfoContainer>
				<h6>{title}</h6>
				<h6>&#8364; {`${amount.toFixed(2)}`}</h6>
			</InfoContainer>
			{!list ? (
				<button onClick={() => handleRemoveNode(id, 'item')}>
					<p>&times;</p>
				</button>
			) : (
				<Link to={`${matchPath}/${id}`}>
					<p>&#43;</p>
				</Link>
			)}
		</Container>
	);
};

export default NodeCard;
