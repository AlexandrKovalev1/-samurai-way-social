import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { NavLink as BaseNavlink } from 'react-router-dom';

type Props = {
	id: string;
	avatar: string;
	name: string;
	message: string;
	time: string;
	viewed: boolean;
	isNew: number;
};
export const Companion = ({
	id,
	avatar,
	name,
	message,
	time,
	viewed,
	isNew,
	...props
}: Props) => {
	let href = `/messages/${name}`;

	return (
		<ListItem>
			<Navlink to={href}>
				<ContentWrapper>
					<ChatAbout>
						<AvatarImg src={avatar} alt='' />
						<CompanionName>{name}</CompanionName>
						<Text>{message}</Text>
					</ChatAbout>
					<Info>
						<LastActionTime>{time}</LastActionTime>
						{isNew ? (
							<NewMessages>{isNew}</NewMessages>
						) : (
							<Status>
								<Icon
									iconId={'statusMessage'}
									width={'24px'}
									height={'24px'}
									viewBox={'0 0 24 24'}
								/>
							</Status>
						)}
					</Info>
				</ContentWrapper>
			</Navlink>
		</ListItem>
	);
};

const ListItem = styled.li`
	width: 100%;
	height: 106px;
`;

const Navlink = styled(BaseNavlink)`
	&.active {
		position: relative;
		display: inline-block;
		width: 100%;
		height: 100%;
		background-color: #e8f7f7;

		:before {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			bottom: 0;
			width: 6px;
			background-color: #00bd97;
		}
	}
`;

const ContentWrapper = styled.div`
	padding: 24px;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ChatAbout = styled.div`
	display: grid;
	grid-template-columns: 58px 1fr;
	grid-template-rows: 22px 1fr;
	column-gap: 10px;
`;

const AvatarImg = styled.img`
	grid-area: 1/1/3/2;
	align-self: center;
	margin-right: 10px;
	width: 58px;
	height: 58px;
	border-radius: 50%;
`;

const CompanionName = styled.h4`
	grid-area: 1/2/2/3;
	white-space: nowrap;
`;

const Text = styled.p`
	font-size: 0.9rem;
	overflow: hidden;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
`;

const Info = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
	align-self: flex-end;
	max-width: 84px;
`;

const LastActionTime = styled.span`
	color: #758a89;
`;

const NewMessages = styled.span`
	width: 24px;
	height: 24px;
	text-align: center;
	color: #ffffff;
	background-color: #dd0000;
	border-radius: 50%;
`;

const Status = styled.span`
	display: flex;
`;
