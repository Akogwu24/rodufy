import { Box, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import glassesGuy from '../../../assets/images/guy.svg';

const PostCard = ({ metaImageUrl, description }) => {
  return (
    <Box
      shadow='md'
      borderRadius='20px'
      overflow={'hidden'}
      my='10'
      w={['280px']}
      h={['280px']}
      pos='relative'
    >
      <Image objectFit='cover' src={metaImageUrl} w='100%' h='100%' alt='guy' />
      <Box className='post_card_text_container'>
        <Text className='text'>{description}</Text>
      </Box>
    </Box>
  );
};

export default PostCard;
