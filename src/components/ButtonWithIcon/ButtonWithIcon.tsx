import React from 'react';
import styled, { css } from 'styled-components';
import { Icon } from '../icon/Icon';

type Props = {
	iconId: string;
	onClickFoo?: () => void;
	type: ButtonType;
};

type ButtonType =
	| 'withBorder'
	| 'post'
	| 'delPost'
	| 'postOptions'
	| 'headerMes';

export const ButtonWithIcon = ({ iconId, onClickFoo, type }: Props) => {
	let width, height, view;
	const onClickHandler = () => {
		onClickFoo && onClickFoo();
	};

	switch (type) {
		case 'withBorder':
			width = '22px';
			height = '22px';
			view = '0 0 22 22';
			break;
		case 'post':
		case 'headerMes':
			width = '24px';
			height = '24px';
			view = '0 0 24 24';
			break;
		case 'delPost':
			width = '28px';
			height = '28px';
			view = '0 0 28 28';
			break;
		case 'postOptions':
			width = '20px';
			height = '20px';
			view = '0 0 20 20';
			break;
	}

	return (
		<Button onClick={onClickHandler} type={type}>
			<Icon iconId={iconId} width={width} height={height} viewBox={view} />
		</Button>
	);
};

const Button = styled.button<{ type: ButtonType }>`
	display: flex;
	align-items: center;
	justify-content: center;
	outline: none;
	border: none;
	background-color: transparent;

	${props =>
		props.type === 'withBorder' &&
		css<{ type: ButtonType }>`
			width: 42px;
			height: 42px;
			background-color: #ffffff;
			border: 1px solid #00bd97;
			border-radius: 50%;
		`}

	${props =>
		props.type === 'headerMes' &&
		css<{ type: ButtonType }>`
			width: 52px;
			height: 52px;

			background-color: #ffffff;
			border: 1px solid #e3e8e7;
			border-radius: 50%;
		`}
`;
