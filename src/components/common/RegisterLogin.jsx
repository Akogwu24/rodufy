import { Box, Flex, FormControl, HStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import bgImg from '../../assets/images/Frame14.svg';
import { inputFieldProps } from '../utils/inputFieldProps';
import CustomButton from './CustomButton';
import InputField from './InputField';

const RegisterLogin = ({ head, route, link, question, onClick }) => {
  return (
    <Flex as='main' w='100vw' h='100vh'>
      <Box
        // bgPosY='-100%'
        bgSize='cover'
        bgRepeat='no-repeat'
        bgImage={bgImg}
        flex={2}
      ></Box>
      <Flex justify='center' align='center' flex={8} bg='gray'>
        <Box bg='#fff' p='10' borderRadius='10px' shadow='md'>
          <FormControl w='300px'>
            <Text as='h1'>{head}</Text>
            {inputFieldProps.map((inputFieldProp) => (
              <InputField key={inputFieldProp.id} {...inputFieldProp} />
            ))}
            <Box mt='8' mb='3'>
              <CustomButton onClick={onClick} btnText='login' w='100%' />
            </Box>
            <HStack justify='center'>
              <Text>{question} </Text>
              <Text fontFamily='ChalkboardSEBold'>
                <Link to={`/${route}`}>{link}</Link>
              </Text>
            </HStack>
          </FormControl>
        </Box>
      </Flex>
    </Flex>
  );
};

export default RegisterLogin;
