import {
  Box,
  Flex,
  HStack,
  Image,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';
import Container from './Container';
import logo from '../../assets/images/Vector.svg';

const Footer = () => {
  return (
    <Box as='footer' py='3rem' bg='primary' color='#fff'>
      <Container>
        <Stack spacing='3rem'>
          <HStack w='3em'>
            <Image src={logo} alt='logo' w='100%' h='100%' />
            <Text letterSpacing='2px' fontWeight='700' fontSize='1.5rem'>
              Rodufy
            </Text>
          </HStack>
          <UnorderedList
            d='flex'
            justifyContent='space-between'
            alignItems='center'
            py='1rem'
            fontSize='20px'
          >
            <ListItem>
              <Link href='/'>Blog</Link>
            </ListItem>
            <ListItem>
              <Link href='/'>Privacy Policy</Link>
            </ListItem>
            <ListItem>
              <Link href='/'>About</Link>
            </ListItem>
            <ListItem>
              <Link href='/'>Contact</Link>
            </ListItem>
          </UnorderedList>
          <Text textAlign='center'>copyright Rodufy 2022</Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
