import { Box, Flex, HStack, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Container from '../../../components/common/Container';
import CustomButton from '../../../components/common/CustomButton';
import logo from '../../../assets/images/Vector.svg';
import googlePlay from '../../../assets/icons/Frame 5.svg';
import apple from '../../../assets/icons/Frame 8.svg';
import girl from '../../../assets/images/girl.svg';
import { Link } from 'react-router-dom';
// import

const Hero = () => {
  return (
    <Stack as='section' bg='primary' py='10' color='#fff'>
      <Container>
        <Flex
          direction={['column', 'row']}
          gap='2rem'
          py='3'
          justify='space-between'
        >
          <HStack spacing='3'>
            <Box w='3rem'>
              <Image w='100%' h='100%' src={logo} alt='logo' />
            </Box>
            <Text letterSpacing='2px' fontWeight='700' fontSize='1.8rem'>
              Rodufy
            </Text>
          </HStack>
          <HStack spacing={['3rem', '1rem']}>
            <Link to='/register'>
              <CustomButton w={['110px', '', '140px']} btnText='Register' />
            </Link>
            <Link to='/login'>
              <CustomButton
                w={['110px', '', '140px']}
                btnText='Login'
                bg='transparent'
                border='2px solid #EA7052'
              />
            </Link>
          </HStack>
        </Flex>
        <Flex
          pt='10'
          align='center'
          direction={['column', 'column', 'row']}
          justify='space-between'
          gap='2rem'
        >
          <Stack flex={[]} maxW={['100%', '100%', '60%', '45%']}>
            <Text as='h1' fontSize={['2rem', '2.5rem', '', '2.8rem']}>
              Our mission is to{' '}
              <Text as='span' borderBottom='3px solid #fff' color='secondary'>
                advance
              </Text>{' '}
              humanity
            </Text>
            <Text>
              We would strive to achieve that through providing education and
              quality health
            </Text>
            <HStack spacing='5'>
              <Text fontSize='20px'>
                DOWNLOAD <br />
                APP
              </Text>
              <Image
                w={['50px', '60px', '70px', '80px']}
                src={googlePlay}
                alt='google play'
              />
              <Image
                w={['50px', '60px', '70px', '80px']}
                src={apple}
                alt='apple'
              />
            </HStack>
          </Stack>
          <Box w={['100%']} maxW={['400px']}>
            <Image
              transition='all ease-in-out .5s'
              _hover={{ filter: 'sepia(50%)' }}
              w='100%'
              h='100%'
              src={girl}
              alt='girl'
            />
          </Box>
        </Flex>
      </Container>
    </Stack>
  );
};

export default Hero;
