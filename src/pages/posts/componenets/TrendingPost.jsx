import { Box, Circle, Grid, GridItem, HStack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Container from '../../../components/common/Container';
import { MdKeyboardArrowUp } from 'react-icons/md';
import PostCard from './PostCard';
import CustomButton from '../../../components/common/CustomButton';

const TrendingPost = ({ posts }) => {
  const [renderedTrendingPosts, setRenderedTrendingPosts] = useState(9);
  const displayedTrendingPost = posts.slice(0, renderedTrendingPosts);

  const handleLoadMore = () => {
    setRenderedTrendingPosts(renderedTrendingPosts + 6);
  };

  return (
    <Box py='5'>
      <Container>
        <HStack gap='2'>
          <Circle w='30px' h='30px' bg='gray'>
            <MdKeyboardArrowUp size={30} />
          </Circle>
          <Text fontWeight={'900'}>Trending</Text>
        </HStack>
        <Grid templateColumns={['repeat(3, 1fr)']}>
          {displayedTrendingPost?.map((post) => (
            <GridItem key={post.id}>
              <PostCard {...post} />
            </GridItem>
          ))}
        </Grid>
        <Box textAlign={'center'} py='5'>
          <CustomButton
            w='clamp(280px, 40%, 60%)'
            onClick={handleLoadMore}
            btnText='Load More'
          />
        </Box>
      </Container>
    </Box>
  );
};

export default TrendingPost;
