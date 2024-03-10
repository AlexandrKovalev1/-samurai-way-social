import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import styled from 'styled-components';

type Props = {
	iconId: string;
};
export const SettingButton = ({ iconId }: Props) => {
	return (
		<Button>
			<Icon
				iconId={iconId}
				width={'22px'}
				height={'22px'}
				viewBox={'0 0 22 22'}
			/>
		</Button>
	);
};

const Button = styled.button`
	text-align: center;
	width: 42px;
	height: 42px;
	background-color: #ffffff;
	border: 1px solid #00bd97;
	outline: none;
	border-radius: 50%;
`;
