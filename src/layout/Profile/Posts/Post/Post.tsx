import React from 'react';
import styled from 'styled-components';
import { ButtonWithIcon } from '../../../../components/ButtonWithIcon/ButtonWithIcon';

export const Post = () => {
	return (
		<PostWrap>
			<ButtonWithIcon iconId={'delPost'} type={'delPost'} />
			<div>About sender</div>
			<div>Description</div>
			<div>Photo</div>
			<PostOptions>
				<WrapOption>
					<ButtonWithIcon iconId={'like'} type={'postOptions'} />
					<CountValue>782</CountValue>
				</WrapOption>
				<WrapOption>
					<ButtonWithIcon iconId={'comment'} type={'postOptions'} />
					<CountValue>168</CountValue>
				</WrapOption>
				<WrapOption>
					<ButtonWithIcon iconId={'repost'} type={'postOptions'} />
					<CountValue>1200</CountValue>
				</WrapOption>
			</PostOptions>
		</PostWrap>
	);
};

const PostWrap = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px 28px 0;
	min-height: 130px;
	background-color: #ffffff;

	& > :first-child {
		position: absolute;
		top: 10px;
		right: 10px;
	}
`;

const PostOptions = styled.div`
	padding: 24px 0;
	display: flex;
	align-items: center;
	gap: 48px;
`;

const WrapOption = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 8px;
`;

const CountValue = styled.span`
	color: #4e6876;
`;
