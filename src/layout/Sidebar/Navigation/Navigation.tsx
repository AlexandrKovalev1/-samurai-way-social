import React from 'react';
import { NavItem } from './NavItem/NavItem';
import styled from 'styled-components';

export const Navigation = () => {
	const navlist = [
		{ href: '/home', iconId: 'home', title: 'Home' },
		{ href: '/notification', iconId: 'notification', title: 'Notifications' },
		{
			href: '/messages',
			iconId: 'messages',
			title: 'Messages',
		},
		{ href: '/collection', iconId: 'collection', title: 'Collection' },
		{ href: '/subscription', iconId: 'subscription', title: 'Subscription' },
		{
			href: '/profile',
			iconId: 'profile',
			title: 'Profile',
		},
		{ href: '/more', iconId: 'more', title: 'More' },
	];
	return (
		<Nav>
			<List>
				{navlist.map((i, index) => (
					<NavItem
						href={i.href}
						iconId={i.iconId}
						title={i.title}
						key={index}
					/>
				))}
			</List>
		</Nav>
	);
};

const Nav = styled.nav``;

const List = styled.ul`
	list-style: none;
	transition: 2s;

	& li + li {
		margin-top: 16px;
	}
`;
