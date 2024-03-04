import React from 'react';
import styled, { css } from 'styled-components';
import row from '../../../assets/images/menuButtonRow.svg';

type Props = {
	isFull: boolean;
	clickFunc: () => void;
};
export const ButtonSwitchMenu = ({ isFull, clickFunc }: Props) => {
	function onClickHandler() {
		clickFunc();
	}

	return <Button isFull={isFull} onClick={onClickHandler}></Button>;
};

const Button = styled.button<{ isFull: boolean }>`
	position: absolute;
	top: 45px;
	right: 4px;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	border: 1px solid #40d89d;
	transform: translateX(50%);
	background-color: #ffffff;
	outline: none;
	background-image: url(${row});
	background-position: center;
	background-repeat: no-repeat;

	${props =>
		!props.isFull &&
		css<{ isFull: boolean }>`
			transform: rotateY(180deg) translateX(-50%);
		`}
`;
