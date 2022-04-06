import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import FullPageLoader from '../../components/common/FullPageLoader';
import Header from './componenets/Header';
import TopPosts from './componenets/TopPosts';
import TrendingPost from './componenets/TrendingPost';
import { getPosts } from '../../api/getPosts';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts(setPosts, setLoading);
  }, []);

  return loading ? (
    <FullPageLoader />
  ) : (
    <Box pb='20'>
      <Header />
      <TopPosts posts={posts.slice(0, 5)} />
      <TrendingPost posts={posts} />
    </Box>
  );
};

export default Posts;
