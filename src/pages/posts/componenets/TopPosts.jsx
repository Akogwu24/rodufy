import { Box, Circle, HStack, Text } from '@chakra-ui/react';
import Container from '../../../components/common/Container';
import PostCard from './PostCard';
import Slider from 'react-slick';
import { settings } from './sliderSetting';
import { MdKeyboardArrowUp } from 'react-icons/md';

const TopPosts = ({ posts }) => {
  return (
    <Box as='section' py='5'>
      <Container>
        <HStack gap='2'>
          <Circle w='30px' h='30px' bg='gray'>
            <MdKeyboardArrowUp size={30} />
          </Circle>
          <Text fontWeight={'900'}>Top Post</Text>
        </HStack>
        <Box overflow=''>
          <Slider {...settings}>
            {posts?.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default TopPosts;
