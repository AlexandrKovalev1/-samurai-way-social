import React from 'react';
import styled from 'styled-components';
import { ProfileBody } from './ProfileBody/ProfileBody';
import { Posts } from './Posts/Posts';
import { MyMedia } from './MyMedia/MyMedia';
import bgImg from '../../assets/images/profileBacground.jpg';
import avatar from '../../assets/images/catsAva.png';
import { AddPost } from './AddPost/AddPost';

export const Profile = () => {
	const profileState = {
		profileBody: {
			background: bgImg,
			userInfo: {
				avatar: avatar,
			},
		},
	};

	return (
		<Wrapper>
			<ProfileBody
				backgroundProfile={profileState.profileBody.background}
				avatar={profileState.profileBody.userInfo.avatar}
			/>
			<AddPost />
			<Posts />
			<MyMedia />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: grid;
	grid-template-rows: minmax(510px, auto) minmax(50px, auto) minmax(0px, 1fr);
	grid-auto-columns: minmax(305px, auto) minmax(auto, 377px);
	gap: 9px 13px;
`;
