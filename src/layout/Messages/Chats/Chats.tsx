import React from 'react';
import styled from 'styled-components';
import { SearchChatBlock } from './SearchChatBlock/SearchChatBlock';
import { Companion } from './Companion/Companion';
import { ChatType } from '../Messages';

type Props = {
	chats: ChatType[];
};
export const Chats = ({ chats }: Props) => {
	return (
		<Wrapper>
			<Heading>Messages</Heading>
			<SearchChatBlock />
			<ul>
				{chats.map(comp => (
					<Companion
						key={comp.id}
						id={comp.id}
						avatar={comp.avatar}
						name={comp.name}
						message={comp.message}
						time={comp.time}
						viewed={comp.viewed}
						isNew={comp.new}
					/>
				))}
			</ul>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding-top: 20px;
	background-color: #ffffff;
	overflow-y: auto;

	& {
		scrollbar-width: thin;
		scrollbar-color: #e3e8e7 white;
	}

	&::-webkit-scrollbar-thumb {
		height: 10px;
	}
`;

const Heading = styled.h2`
	padding-left: 24px;
	margin-bottom: 24px;
`;
