import React from 'react';
import styled from 'styled-components';

export const Posts = () => {
	return <PostsWrap></PostsWrap>;
};

const PostsWrap = styled.div`
	grid-area: auto/1 / auto/2;
	background-color: #ffffff;
	height: min-content;
`;
