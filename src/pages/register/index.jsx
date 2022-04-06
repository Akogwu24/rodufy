import { Box, Flex, FormControl, HStack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bgImg from '../../assets/images/Frame14.svg';
import { inputFieldProps } from '../../components/utils/inputFieldProps';
import InputField from '../../components/common/InputField';
import CustomButton from '../../components/common/CustomButton';
import { registerUser } from '../../api/registerService';
import { ScaleFade } from '@chakra-ui/react';

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: '', password: '' });
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const onChangeHandler = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const { email, password } = values;
    email && password ? setIsDisabled(false) : setIsDisabled(true);
  }, [values]);

  const handleRegister = (e) => {
    e.preventDefault();
    registerUser(values, setIsLoading, navigate);
  };

  return (
    <ScaleFade in={true} initialScale={0.7}>
      <Flex as='main' w='100vw' h='100vh'>
        <Box
          // bgPosY='-100%'
          bgSize='cover'
          bgRepeat='no-repeat'
          bgImage={bgImg}
          flex={[0, 3, 3, 2]}
        ></Box>
        <Flex justify='center' align='center' flex={8} bg='gray'>
          <Box bg='#fff' p='10' borderRadius='10px' shadow='md'>
            <FormControl w={['100%', '300px']}>
              <Text as='h1'>Register</Text>
              {inputFieldProps.map((inputFieldProp) => (
                <InputField
                  key={inputFieldProp.id}
                  {...inputFieldProp}
                  onChange={onChangeHandler}
                />
              ))}
              <Box mt='8' mb='3'>
                <CustomButton
                  loadingText='Creating your account'
                  isLoading={isLoading}
                  isDisabled={isDisabled}
                  onClick={handleRegister}
                  btnText='Register'
                  w='100%'
                />
              </Box>
              <HStack justify='center'>
                <Text>Already have an account? </Text>
                <Text
                  _hover={{ textDecoration: 'underline' }}
                  fontFamily='ChalkboardSEBold'
                >
                  <Link to='/login'>Login</Link>
                </Text>
              </HStack>
            </FormControl>
          </Box>
        </Flex>
      </Flex>
    </ScaleFade>
  );
};

export default Register;
