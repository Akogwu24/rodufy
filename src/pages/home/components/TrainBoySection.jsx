import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Container from '../../../components/common/Container';
import CustomButton from '../../../components/common/CustomButton';
import trainBoy from '../../../assets/images/train-boy.svg';

const TrainBoySection = () => {
  return (
    <Box py='10'>
      <Container>
        <Flex
          justify='space-between'
          gap='2rem'
          direction={['column', 'row', 'row']}
          align='center'
        >
          <Stack flex={[1, 1, 0.7]}>
            <Text as='h1' fontSize={['', '2rem', '2.5rem']}>
              {' '}
              Everything you’ll need to{' '}
              <Text as='span' color='secondary'>
                excel
              </Text>{' '}
              in life
            </Text>
            <Text pb='8'>
              We&#39;ve curated a list of valuable resources to get you going in
              life, all for free!
            </Text>
            <CustomButton
              w='100%'
              h='50px'
              btnText='Get Started'
              fontSize='20px'
            />
          </Stack>
          <Box h='400px' overflow='hidden'>
            <Image
              _hover={{ transform: 'scale(1.15)' }}
              transition='all ease-in-out .5s'
              w='100%'
              h='100%'
              src={trainBoy}
              alt='train passenger'
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default TrainBoySection;
