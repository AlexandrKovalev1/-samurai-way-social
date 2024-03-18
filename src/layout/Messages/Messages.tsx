import React from 'react';
import styled from 'styled-components';
import { Chats } from './Chats/Chats';
import { v1 } from 'uuid';
import Cameron from '../../assets/images/avatars/Cameron.png';
import Guy from '../../assets/images/avatars/Guy.png';
import Robert from '../../assets/images/avatars/Robert.png';
import Bessie from '../../assets/images/avatars/Bessie.png';
import Courtney from '../../assets/images/avatars/Courtney.png';
import Kathryn from '../../assets/images/avatars/Kathryn.png';
import Eleanor from '../../assets/images/avatars/Eleanor.png';
import myAva from '../../assets/images/catsAva.png';
import { CurrentChat } from './CurrentChat/CurrentChat';

export type ChatType = {
	id: string;
	avatar: string;
	name: string;
	message: string;
	time: string;
	viewed: boolean;
	new: number;
	online: boolean;
};

export type MessageType = {
	id: string;
	idSender: string;
	avatar: string;
	text: string;
	time: string;
};
export const Messages = () => {
	let chats: ChatType[] = [
		{
			id: v1(),
			avatar: Cameron,
			name: 'Cameron Williamson',
			message:
				'Not too bad, just trying to catch up on some work. How about you?',
			time: '5s',
			viewed: true,
			new: 1,
			online: false,
		},
		{
			id: v1(),
			avatar: Guy,
			name: 'Guy Hawkins',
			message: 'when will it be ready?',
			time: '20s',
			viewed: true,
			new: 0,
			online: true,
		},
		{
			id: v1(),
			avatar: Robert,
			name: 'Robert Fox',
			message:
				"Good point. Typography is another aspect I'm curious about. Any font suggestions for a modern look?",
			time: '18h',
			viewed: true,
			new: 0,
			online: true,
		},
		{
			id: v1(),
			avatar: Bessie,
			name: 'Bessie Cooper',
			message:
				"That's a good idea. I'll have to try that. So, what's the latest on the new client account we're wor",
			time: '1d',
			viewed: false,
			new: 0,
			online: false,
		},
		{
			id: v1(),
			avatar: Courtney,
			name: 'Courtney Henry',
			message:
				'Sure, that sounds good. I need to take a break from staring at my computer screen all day.',
			time: '12h',
			viewed: true,
			new: 1,
			online: false,
		},
		{
			id: v1(),
			avatar: Kathryn,
			name: 'Kathryn Murphy ',
			message:
				'Thanks, I appreciate it. Hey, do you want to grab lunch together later?',
			time: '2w',
			viewed: true,
			new: 2,
			online: true,
		},
		{
			id: v1(),
			avatar: Eleanor,
			name: 'Eleanor Pena',
			message: 'Love the game music! 🎵',
			time: '3h',
			viewed: true,
			new: 0,
			online: true,
		},
	];

	let messagesFromChat: MessageType[] = [
		{
			id: v1(),
			idSender: v1(),
			avatar: Robert,
			text: "Got it. And what's your take on incorporating animations? I've seen them on many sites lately.",
			time: '10:45Am',
		},
		{
			id: v1(),
			idSender: 'myId',
			avatar: myAva,
			text: 'Animations can enhance user engagement, but use them judiciously. Subtle animations for transitions or highlighting elements can make the site feel dynamic without overwhelming users.',
			time: '10:52Am',
		},
		{
			id: v1(),
			idSender: v1(),
			avatar: Robert,
			text: "That makes sense. How about mobile responsiveness? It's a must nowadays, right?",
			time: '11:00Am',
		},
		{
			id: v1(),
			idSender: 'myId',
			avatar: myAva,
			text: 'Absolutely. More users access websites from mobile devices. Design for mobile-first, ensuring that the site looks and functions well on smaller screens.',
			time: '11:12Am',
		},
	];

	return (
		<WrapperMessages>
			<Chats chats={chats} />
			<CurrentChat
				avatar={chats[2].avatar}
				name={chats[2].name}
				online={chats[2].online}
				messages={messagesFromChat}
			/>
		</WrapperMessages>
	);
};

const WrapperMessages = styled.div`
	display: grid;
	grid-template-columns: minmax(285px, 1.45fr) 2fr;
	width: 100%;
	max-height: calc(100vh - 92px);
	height: 100%;
	overflow: hidden;
`;
