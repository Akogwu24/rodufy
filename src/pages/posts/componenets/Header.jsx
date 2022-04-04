import { Box, Flex, HStack, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Container from '../../../components/common/Container';
import logo from '../../../assets/images/Vector.svg';
import CustomButton from '../../../components/common/CustomButton';

function Header() {
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
              Hi $email
            </Text>
            <CustomButton btnText='Logout' />
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
