import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import CustomButton from '../../components/common/CustomButton';
import Header from './componenets/Header';
import TopPosts from './componenets/TopPosts';
import TrendingPost from './componenets/TrendingPost';
import { getPosts } from './service/getPost';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts(setPosts);
  }, []);

  return (
    <Box pb='20'>
      <Header />
      <TopPosts posts={posts.slice(0, 5)} />
      <TrendingPost posts={posts} />
    </Box>
  );
};

export default Posts;