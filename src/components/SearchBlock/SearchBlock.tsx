import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';

export const SearchBlock = () => {
	return (
		<SearchBlockWrap>
			<Input placeholder={'Search'} />
			<SearchBtn>
				<Icon
					iconId={'search'}
					width={'18px'}
					height={'18px'}
					viewBox={'0 0 18 18'}
				/>
			</SearchBtn>
		</SearchBlockWrap>
	);
};

const SearchBlockWrap = styled.div`
	position: relative;
	max-width: 687px;
	width: 100%;
`;

const Input = styled.input`
	position: relative;
	width: 100%;
	min-height: 46px;
	padding-left: 23px;
	padding-right: 50px;
	font-size: 1.6rem;
	border-radius: 23px;
	outline: none;
	border: 1px solid rgba(0, 0, 0, 0.15);
	&::placeholder {
		color: rgba(0, 0, 0, 0.15);
	}
`;

const SearchBtn = styled.button`
	outline: none;
	border: none;
	position: absolute;
	top: 50%;
	right: 5px;
	transform: translateY(-50%);
	display: flex;
	align-items: center;
	justify-content: center;
	width: 38px;
	height: 38px;
	background-color: #00bd97;
	border-radius: 50%;
	cursor: pointer;
`;
