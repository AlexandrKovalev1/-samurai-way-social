import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
	idSender: string;
	avatar: string;
	text: string;
	time: string;
};
export const Message = ({ avatar, text, time, idSender, ...props }: Props) => {
	return (
		<Wrapper idSender={idSender}>
			<ImageAndText idSender={idSender}>
				<Img src={avatar} alt={'user_avatar'} />
				<Text idSender={idSender}>
					<MessageText>{text}</MessageText>
				</Text>
			</ImageAndText>
			<Time>
				<span>{time}</span>
			</Time>
		</Wrapper>
	);
};

const Wrapper = styled.li<{ idSender: string }>`
	text-align: right;
	align-self: flex-end;

	${props =>
		props.idSender !== 'myId' &&
		css<{ idSender: string }>`
			text-align: left;
			align-self: flex-start;
		`}
`;

const ImageAndText = styled.div<{ idSender: string }>`
	margin-bottom: 5px;
	max-width: 340px;
	display: flex;
	align-items: flex-end;
	flex-direction: row-reverse;

	${props =>
		props.idSender !== 'myId' &&
		css<{ idSender: string }>`
			flex-direction: row;
		`}
`;

const Img = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 50%;
`;

const Text = styled.div<{ idSender: string }>`
	position: relative;
	margin-right: 12px;
	padding: 8px 13px;
	background-color: #00bd97;
	color: #ffffff;
	border-radius: 10px;
	box-shadow: 0 1px 2px 0 #1d21261a;

	&:after {
		content: ' ';
		position: absolute;
		width: 0;
		height: 0;
		bottom: 0;
		border: 12px solid;
		border-color: transparent transparent #00bd97;
	}

	${props =>
		props.idSender !== 'myId' &&
		css<{ idSender: string }>`
			margin-right: 0;
			margin-left: 12px;
			background-color: #ffffff;
			color: black;

			&:after {
				content: ' ';
				position: absolute;
				width: 0;
				height: 0;
				bottom: 0;
				left: -12px;
				border: 12px solid;
				border-color: transparent transparent #ffffff;
			}
		`}
`;

const MessageText = styled.p``;

const Time = styled.div`
	padding-right: 48px;
`;
export default Message;
