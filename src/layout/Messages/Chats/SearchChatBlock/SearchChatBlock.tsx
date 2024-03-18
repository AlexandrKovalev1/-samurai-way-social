import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';

export const SearchChatBlock = () => {
	return (
		<SearchWrapper>
			<InputWrapper>
				<SearchIconWrap>
					<Icon
						iconId={'search'}
						width={'24px'}
						height={'24px'}
						viewBox={'0 0 24 24'}
					/>
				</SearchIconWrap>
				<StyledInput type='text' placeholder={'Search for chats...'} />
			</InputWrapper>
			<StyledButton>
				<Icon iconId={'btnPlus'} /> Start New Chat
			</StyledButton>
		</SearchWrapper>
	);
};

const SearchWrapper = styled.div`
	padding: 0 24px;
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

const InputWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 48px;
`;

const SearchIconWrap = styled.span`
	position: absolute;
	top: 0;
	transform: translateY(50%);
	left: 20px;
	font-size: 1.2rem;

	svg {
		fill: #758a88;
	}
`;

const StyledInput = styled.input`
	width: 100%;
	height: 100%;
	padding-left: 56px;
	border-radius: 24px;
	border: 1px solid #e3e8e7;
	outline: none;

	&::placeholder {
		color: #758a88;
	}

	&:focus-visible {
		outline: 1px solid #e3e8e7;
	}
`;

const StyledButton = styled.button`
	width: 100%;
	height: 46px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #ffffff;
	border: none;
	border-radius: 23px;
	background-color: #00bd97;

	svg {
		margin-right: 10px;
		fill: #ffffff;
	}
`;
