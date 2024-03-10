import React from 'react';
import { NavItem } from './NavItem/NavItem';
import styled from 'styled-components';

export const Navigation = () => {
	const navlist = [
		{ href: '#', iconId: 'home', title: 'Home' },
		{ href: '#', iconId: 'notification', title: 'Notifications' },
		{
			href: '#',
			iconId: 'messages',
			title: 'Messages',
		},
		{ href: '#', iconId: 'collection', title: 'Collection' },
		{ href: '#', iconId: 'subscription', title: 'Subscription' },
		{
			href: '#',
			iconId: 'profile',
			title: 'Profile',
		},
		{ href: '#', iconId: 'more', title: 'More' },
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
		margin-top: 33px;
	}
`;
