import { Box, Flex, Text, FormControl } from '@chakra-ui/react';
import React from 'react';
import bgImg from '../../assets/images/Frame14.svg';
import CustomButton from '../../components/common/CustomButton';
import InputField from '../../components/common/InputField';
import { inputFieldProps } from './components/inputFieldProps';
import { useLocation } from 'react-router-dom';

const Login = () => {
  const location = useLocation();
  console.log({ location });
  return (
    <Flex as='main' w='100vw' h='100vh'>
      <Box
        bgPosY='center'
        w='100%'
        bgSize='cover'
        bgRepeat='no-repeat'
        bgImage={bgImg}
        flex={2}
      ></Box>
      <Flex justify='center' align='center' flex={8} bg='gray'>
        <Box bg='#fff' p='10' borderRadius='10px' shadow='md'>
          <FormControl w='300px'>
            <Text as='h1'>Register</Text>
            {inputFieldProps.map((inputFieldProp) => (
              <InputField key={inputFieldProp.id} {...inputFieldProp} />
            ))}
            <Box mt='10'>
              <CustomButton btnText='login' w='100%' />
            </Box>
          </FormControl>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Login;
