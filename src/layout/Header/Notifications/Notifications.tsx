import React from 'react';
import { Icon } from '../../../components/icon/Icon';
import styled, { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

type Props = {
	notifications: number;
};
export const Notifications = ({ notifications, ...props }: Props) => {
	let countNotifications = notifications > 99 ? `'99+'` : `'${notifications}'`;

	return (
		<StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
			<NotificationsBtn count={countNotifications}>
				<Icon iconId={'notifications'} viewBox={'0 0 20 21'} />
			</NotificationsBtn>
		</StyleSheetManager>
	);
};

const NotificationsBtn = styled.button<{ count: string }>`
	position: relative;
	width: 42px;
	height: 42px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
	background-color: transparent;
	border: 1px solid rgba(0, 0, 0, 0.62);
	border-radius: 50%;
	outline: none;

	&:before {
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(50%, -30%);
		content: ${props => props.count};
		font-size: 0.8rem;
		font-weight: 600;
		text-align: center;
		line-height: 22px;
		color: #fff;
		width: 22px;
		height: 22px;
		background-color: #00bd97;
		outline: 2px solid #fff;
		border-radius: 50%;
	}
`;
