import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import styled, { css } from 'styled-components';

type Props = {
	href: string;
	iconId: string;
	title: string;
};
export const NavItem = ({ href, iconId, title, ...props }: Props) => {
	return (
		<li>
			<Link href={href} iconId={iconId}>
				<Icon
					iconId={iconId}
					viewBox={'0 0 28 28'}
					width={'28px'}
					height={'28px'}
				/>
				<span>{title}</span>
			</Link>
		</li>
	);
};

const Link = styled.a<{ iconId: string }>`
	display: flex;
	align-items: center;
	gap: 26px;
	text-decoration: none;
	font-size: 1rem;
	font-weight: bolder;
	color: #fff;

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
