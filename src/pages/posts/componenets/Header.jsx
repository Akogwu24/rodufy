import { Box, Flex, HStack, Image, Stack, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Container from '../../../components/common/Container';
import logo from '../../../assets/images/Vector.svg';
import CustomButton from '../../../components/common/CustomButton';
import { getLoggedInUser } from '../../../api/getLoggedInUser';

function Header() {
  const [loggedInUser, setLoggedInUser] = useState('$Email');

  useEffect(() => {
    getLoggedInUser(setLoggedInUser);
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem('11#221#');
    window.location.href = '/';
  };
  return (
    <Box as='header' bg='primary'>
      <Container color='#fff'>
        <Flex py='5' justify='space-between'>
          <HStack w='3em'>
            <Image src={logo} alt='logo' w='100%' h='100%' />
            <Text letterSpacing='2px' fontWeight='700' fontSize='1.5rem'>
              Rodufy
            </Text>
          </HStack>
          <Stack>
            <Text textAlign='center' fontSize='20px'>
              Hi {loggedInUser?.email?.split('@')[0] || 'lll'}
            </Text>
            <CustomButton onClick={handleLogOut} btnText='Logout' />
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;

// 4600226467 vfd 2690
