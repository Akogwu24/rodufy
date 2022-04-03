import { Box, CloseButton, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import Container from '../../../components/common/Container';
import CustomButton from '../../../components/common/CustomButton';

const NewAnnouncement = () => {
  return (
    <Box as='header' bg='secondary'>
      <Container>
        <HStack justify='space-between' py='5' color='white'>
          <CustomButton btnText='New!' w='100px' bg='rgb(238,141,117)' />
          <Text fontSize='20px' pb='1' borderBottom='1px solid white'>
            Announcing our $15 million series A funding!
          </Text>
          <CloseButton borderRadius='50%' border='2px solid white' />
        </HStack>
      </Container>
    </Box>
  );
};

export default NewAnnouncement;
