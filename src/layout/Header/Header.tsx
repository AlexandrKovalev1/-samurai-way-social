import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/Container';
import { Notifications } from './Notifications/Notifications';
import { FlexContainer } from '../../components/FlexContainer';
import { Logo } from './Logo/Logo';

export const Header = () => {
	return (
		<StyledHeader>
			<Container width={'1200px'}>
				<FlexContainer align={'center'} justify={'space-between'}>
					<Logo />
					<Notifications notifications={10} />
				</FlexContainer>
			</Container>
		</StyledHeader>
	);
};

const StyledHeader = styled.header`
	z-index: 999;
	height: 80px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	grid-area: 1/1/2/3;
	background-color: #ffffff;
`;
