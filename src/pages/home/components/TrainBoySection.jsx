import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Container from '../../../components/common/Container';
import CustomButton from '../../../components/common/CustomButton';
import trainBoy from '../../../assets/images/train-boy.svg';

const TrainBoySection = () => {
  return (
    <Box py='10'>
      <Container>
        <Flex justify='space-between' align='center'>
          <Stack flex={0.7}>
            <Text as='h1'>
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
              size='xl'
              btnText='Get Started'
              fontSize='20px'
            />
          </Stack>
          <Box h='400px'>
            <Image w='100%' h='100%' src={trainBoy} alt='train passenger' />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default TrainBoySection;
