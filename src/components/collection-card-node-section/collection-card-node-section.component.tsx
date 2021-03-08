import React, { FC } from 'react';

import { useCollectionContainerContext } from 'components/collection-card-container/collection-container.context';

import NodeCard from '../node-card/node-card.component';

import { Container, SubTitle, Line, CardContainer } from './collection-card-node-section.styles';

interface Props {
	subTitle: string;
	list?: boolean;
}

const CollectionCardNodeSection: FC<Props> = ({ subTitle, list }) => {
	const { collection } = useCollectionContainerContext();
	const children = list ? collection.lists : collection.items;
	const childrenKeys = Object.keys(children);
	return (
		<Container>
			<SubTitle>{subTitle}</SubTitle>
			<Line />
			<CardContainer>
				{childrenKeys.length > 0 ? (
					childrenKeys.map((key) => {
						return (
							<NodeCard
								key={key}
								id={key}
								title={children[key].title}
								amount={children[key].amount}
								list={list}
							/>
						);
					})
				) : (
					<p>Nothing to display yet</p>
				)}
			</CardContainer>
		</Container>
	);
};

export default CollectionCardNodeSection;
