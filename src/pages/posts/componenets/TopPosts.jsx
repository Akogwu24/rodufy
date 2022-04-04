import { Box, Circle, Flex, HStack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../../api/useFetch';
import Container from '../../../components/common/Container';
import PostCard from './PostCard';
import Slider from 'react-slick';
import { settings } from './sliderSetting';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { getPosts } from '../service/getPost';

const TopPosts = ({posts}) => {
  // const [posts, setPosts] = useState([]);

 

  return (
    <Box py='5'>
      <Container>
        <HStack gap='2'>
          <Circle w='30px' h='30px' bg='gray'>
            <MdKeyboardArrowUp size={30} />
          </Circle>
          <Text fontWeight={'900'}>Top Post</Text>
        </HStack>
        <Slider {...settings}>
          {posts?.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default TopPosts;
