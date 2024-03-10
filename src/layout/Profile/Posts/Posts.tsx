import React from 'react';
import styled from 'styled-components';

export const Posts = () => {
	return <PostsWrap>Lorem*5</PostsWrap>;
};

const PostsWrap = styled.div`
	grid-area: auto/1 / auto/2;
	background-color: #ffffff;
	min-height: 130px;
	height: min-content;
`;
