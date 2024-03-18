import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import styled, { css } from 'styled-components';
import { NavLink as BaseNavlink } from 'react-router-dom';

type Props = {
	href: string;
	iconId: string;
	title: string;
};
export const NavItem = ({ href, iconId, title, ...props }: Props) => {
	return (
		<li>
			<Navlink to={href} iconId={iconId}>
				<Image iconId={iconId}>
					<Icon
						iconId={iconId}
						viewBox={'0 0 28 28'}
						width={'28px'}
						height={'28px'}
					/>
					<span>{title}</span>
				</Image>
			</Navlink>
		</li>
	);
};

const Navlink = styled(BaseNavlink)<{ iconId: string }>`
	width: 100%;
	height: 100%;
	color: #fff;
	&.active {
		display: inline-block;
		color: #00bd97;
		background-color: #ffffff;
		border-radius: 6px;
		svg {
			fill: #00bd97;
		}

		${props =>
			props.iconId === 'home' &&
			css<{ iconId: string }>`
				svg {
					fill: none;
					stroke: #00bd97;
				}
			`}
	}
`;

const Image = styled.div<{ iconId: string }>`
	padding: 10px 28px;
	display: flex;
	align-items: center;
	gap: 26px;
	font-size: 1rem;
	font-weight: bolder;

	svg {
		fill: #ffffff;
	}

	${props =>
		props.iconId === 'home' &&
		css<{ iconId: string }>`
			svg {
				fill: none;
				stroke: #ffffff;
			}
		`}
`;
