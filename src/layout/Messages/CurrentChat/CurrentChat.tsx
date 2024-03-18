import React from 'react';
import { ButtonWithIcon } from '../../../components/ButtonWithIcon/ButtonWithIcon';
import styled from 'styled-components';
import Message from '../Message/Message';
import { MessageType } from '../Messages';

type Props = {
	avatar: string;
	name: string;
	online: boolean;
	messages: MessageType[];
};
export const CurrentChat = ({
	avatar,
	name,
	online,
	messages,
	...props
}: Props) => {
	return (
		<div style={{ height: '100%', overflow: 'auto' }}>
			<HeaderCurrentChat>
				<CompanionInfo>
					<CompanionAvatar src={avatar} alt='' />
					<NameCompanion>{name}</NameCompanion>
					<UserStatus isOnline={online}>Active Now</UserStatus>
				</CompanionInfo>
				<ButtonWithIcon iconId={'headerMes'} type={'headerMes'} />
			</HeaderCurrentChat>
			<div style={{ paddingLeft: '24px', paddingTop: '30px' }}>
				<ul
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '30px',
						width: '100%',
					}}
				>
					{messages.map(message => (
						<Message
							key={message.id}
							idSender={message.idSender}
							avatar={message.avatar}
							text={message.text}
							time={message.time}
						/>
					))}
				</ul>
				<div>
					<textarea />
					<button></button>
				</div>
			</div>
		</div>
	);
};

const HeaderCurrentChat = styled.div`
	padding: 24px 0 24px 24px;
	width: 100%;
	min-height: 100px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #ffffff;
`;

const CompanionInfo = styled.div`
	display: grid;
	grid-template-columns: 52px 1fr;
	grid-template-rows: 1fr 1fr;
	gap: 0 10px;
`;
const CompanionAvatar = styled.img`
	width: 52px;
	height: 52px;
	grid-area: 1/1/3/2;
`;

const NameCompanion = styled.h3`
	grid-area: 1/2/2/3;
`;

const UserStatus = styled.span<{ isOnline: boolean }>`
	position: relative;
	grid-area: 2/2/3/3;
	&:before {
	}
`;
