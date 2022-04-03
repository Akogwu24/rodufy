import {
  Box,
  Flex,
  HStack,
  Image,
  Square,
  Stack,
  Text,
} from '@chakra-ui/react';
import Container from '../../../components/common/Container';
import { ImWhatsapp } from 'react-icons/im';
import { HiOutlineMail } from 'react-icons/hi';
import undraw from '../../../assets/images/undraw_calling.svg';

const ContactUs = () => {
  return (
    <Box py='10' bg='lightGray'>
      <Container>
        <Flex>
          <Stack spacing='5'>
            <Text as='h1'>Contact Us</Text>
            <Text>
              Got any questions, feedback, request and complains? Reach out...
            </Text>
            <HStack>
              <Square borderRadius='5px' bg='#29A71A' p='2' color='#fff'>
                <ImWhatsapp size={20} />
              </Square>
              <Text fontSize='20px'>+2348232323892</Text>
            </HStack>
            <HStack>
              <Square borderRadius='5px' bg='#707170' p='2' color='#fff'>
                <HiOutlineMail size={20} />
              </Square>
              <Text fontSize='20px'>contact@us.com</Text>
            </HStack>
          </Stack>
          <Box h='350px'>
            <Image h='100%' w='100%' src={undraw} alt='undara' />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default ContactUs;
