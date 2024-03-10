import React, { ChangeEvent, useState } from 'react';
import styled, { css, StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import { ButtonWithIcon } from '../../../components/ButtonWithIcon/ButtonWithIcon';

export const AddPost = () => {
	const [text, setText] = useState('');
	const [isCollapsed, setCollapsed] = useState(false);
	const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		const inputValue = event.target.value;
		const regex = new RegExp(`(.{30})( |$)`, 'g');
		const processedText = inputValue.replace(regex, '$1\n');

		setText(processedText);
	};

	const onClickWrapHandler = () => {
		setCollapsed(true);
	};

	const onBlurWrapHandler = () => {
		!text && setCollapsed(false);
	};

	const onSendHandler = () => {
		setText('');
		setCollapsed(false);
	};
	return (
		<StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
			<Wrap isEdit={isCollapsed} onBlur={onBlurWrapHandler}>
				<TextAreaGroup isCollapsed={isCollapsed}>
					<Textarea
						onClick={onClickWrapHandler}
						onChange={handleTextareaChange}
						value={text}
						isEdit={isCollapsed}
						placeholder={'What’s Happening?'}
					/>
					{isCollapsed && (
						<ButtonSend onClick={onSendHandler}>Publish Post</ButtonSend>
					)}
				</TextAreaGroup>
				{isCollapsed && (
					<EditButtonsWrap>
						<ButtonWithIcon iconId={'postIcon1'} type={'post'} />
						<ButtonWithIcon iconId={'postIcon2'} type={'post'} />
						<ButtonWithIcon iconId={'postIcon3'} type={'post'} />
						<ButtonWithIcon iconId={'postIcon4'} type={'post'} />
						<ButtonWithIcon iconId={'postIcon5'} type={'post'} />
					</EditButtonsWrap>
				)}
			</Wrap>
		</StyleSheetManager>
	);
};

const Wrap = styled.div<{ isEdit: boolean }>`
	grid-area: 2/1/3/3;
	background-color: #ffffff;
	border-radius: 5px;
	width: 100%;
	height: ${props => (props.isEdit ? '150px' : '50px')};
`;

const TextAreaGroup = styled.div<{ isCollapsed: boolean }>`
	position: relative;
	width: 100%;
	height: ${props => (props.isCollapsed ? '70%' : '100%')};
`;

const Textarea = styled.textarea<{ isEdit?: boolean }>`
	padding: 15px 0 0 15px;
	width: 100%;
	height: 100%;
	font-size: 1.2rem;
	border: none;
	outline: none;
	resize: none;
	overflow: hidden;
	&::placeholder {
		font-size: 1rem;
	}
	${props =>
		props.isEdit &&
		css<{ isEdit?: boolean }>`
			overflow: auto;
		`}
`;

const EditButtonsWrap = styled.div`
	padding-left: 15px;
	display: flex;
	align-items: center;
	gap: 14px;
`;

const ButtonSend = styled.button`
	position: absolute;
	bottom: 0;
	right: 25px;
	width: 164px;
	height: 48px;
	border: none;
	color: #ffffff;
	background-color: #00bd97;
	border-radius: 6px;
`;
