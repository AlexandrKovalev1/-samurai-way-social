import React from 'react';
import styled from 'styled-components';
import regt from '../../assets/images/Rectangle.svg';
import { UserInfo } from './UserInfo/UserInfo';
import ava from '../../assets/images/ava.jpg';

export const Sidebar = () => {
	return (
		<Aside>
			<UserInfo avatar={ava} userinfo={'Alexandr Kovalyov'} />
		</Aside>
	);
};

const Aside = styled.aside`
	z-index: 0;
	position: relative;
	width: 100%;
	height: 100vh;
	grid-area: 2/1/3/2;
	justify-self: end;
	background-color: #00bd97;
	border-radius: 10px;

	&:after {
		content: '';
		background-image: url(${regt});
		background-size: contain;
		background-repeat: no-repeat;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 90px;
	}
`;
