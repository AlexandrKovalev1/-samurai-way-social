import React from 'react';
import styled from 'styled-components';
import { Post } from './Post/Post';

export const Posts = () => {
	return (
		<PostsWrap>
			<Post />
			<Post />
			<Post />
			<Post />
		</PostsWrap>
	);
};

const PostsWrap = styled.div`
	grid-area: auto/1 / auto/2;
	display: flex;
	flex-direction: column;
	gap: 10px;
	min-height: 130px;
	height: min-content;
`;
