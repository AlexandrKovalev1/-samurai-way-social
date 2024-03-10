import React from 'react';
import styled, { css } from 'styled-components';
import { Container } from '../../../components/Container';

type Props = {
	backgroundProfile?: string;
	avatar?: string;
};
export const ProfileBody = ({ backgroundProfile, avatar }: Props) => {
	return (
		<Wrapper>
			<BackGroundProfile bgImg={backgroundProfile} />
			<Container width={'865px'}>
				<UserInfo>
					<AvatarWrap>
						<Avatar src={avatar} alt={'avatarUser'} />
					</AvatarWrap>
					<SettingBlock>
						<button>edit</button>
						<button>shere</button>
					</SettingBlock>

					<div>
						<span>Online</span>
						<UserNameBlock>
							<h2>Manish Prajapati</h2> <span>@manish007</span>
						</UserNameBlock>
						<span>developer</span>
					</div>
					<div>
						<h2>About Me</h2>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged.
						</p>
					</div>
				</UserInfo>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	grid-area: 1/1/2/3;
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
`;

const BackGroundProfile = styled.div<{ bgImg?: string }>`
	max-height: 190px;
	height: 100%;
	${props =>
		props.bgImg &&
		css<{ bgImg?: string }>`
			background-image: url(${props.bgImg});
			background-position: center;
			background-size: cover;
		`}
`;

const UserInfo = styled.div`
	position: relative;
	height: 100%;
`;

const AvatarWrap = styled.div`
	position: absolute;
	left: 0;
	top: -40px;
	max-width: 125px;
	width: 100%;
	max-height: 115px;
	height: 100%;
	border-radius: 3px;
	overflow: hidden;
	outline: 1px solid #ffffff;
	background-color: black;
`;

const Avatar = styled.img`
	width: 100%;
	min-height: 100%;
`;

const SettingBlock = styled.div`
	padding: 26px 0 13px;
	width: 100%;
	min-height: 82px;
	text-align: end;
`;

const UserNameBlock = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;
