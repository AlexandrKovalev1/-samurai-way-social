import React from 'react';
import styled from 'styled-components';

type Props = {
	avatar: string;
	userinfo: string;
};
export const UserInfo = ({ avatar, userinfo }: Props) => {
	return (
		<Wrapper>
			<Img src={avatar} alt='avatar' />

			<UserName>{userinfo}</UserName>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: absolute;
	top: 20px;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
`;

const Img = styled.img`
	width: 81px;
	height: 81px;
	object-fit: cover;
	border: 2px solid #fff;
	border-radius: 50%;
`;

const UserName = styled.span`
	color: #fff;
	white-space: nowrap;
`;
