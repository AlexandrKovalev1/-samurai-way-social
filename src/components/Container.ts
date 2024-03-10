import styled from 'styled-components';

type Props = {
	width: string;
};

export const Container = styled.div<Props>`
	max-width: ${props => props.width};
	width: 100%;
	margin: 0 auto;
	height: 100%;
	padding: 0 25px;

	// @media screen and (max-width: ${props => props.width}) {
	// 	padding: 0 15px;
	// }
`;
