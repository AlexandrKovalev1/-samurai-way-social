import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import regt from '../../assets/images/Rectangle.svg';
import { UserInfo } from './UserInfo/UserInfo';
import ava from '../../assets/images/ava.jpg';
import { Navigation } from './Navigation/Navigation';
import { ButtonSwitchMenu } from './ButtonSwitchMenu/ButtonSwitchMenu';

export const Sidebar = () => {
	const [fullMenu, setFullMenu] = useState(true);

	return (
		<Aside isFull={fullMenu}>
			<UserInfo avatar={ava} userinfo={'Alexandr Kovalyov'} />
			<ButtonSwitchMenu
				isFull={!fullMenu}
				clickFunc={() => setFullMenu(!fullMenu)}
			/>
			<Navigation />
		</Aside>
	);
};

const Aside = styled.aside<{ isFull: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	width: 240px;
	height: calc(100vh - 92px);
	grid-area: 2/1/3/2;
	background-color: #00bd97;
	border-radius: 10px;
	background-image: url(${regt});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: top;
	transition: 0.5s;

	${props =>
		!props.isFull &&
		css<{ isFull: boolean }>`
			width: 100px;

			div span {
				display: none;
			}

			nav li span {
				display: none;
			}
		`};
`;
