import { Box, Flex, FormControl, HStack, Text } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bgImg from '../../assets/images/Frame14.svg';
import { inputFieldProps } from '../../components/utils/inputFieldProps';
import InputField from '../../components/common/InputField';
import CustomButton from '../../components/common/CustomButton';
import { timeoutSetter } from '../../components/utils/timeoutSetter';
import { ScaleFade } from '@chakra-ui/react';
import { login } from '../../api/loginService';
import { AuthContext } from '../../context/authContext';

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: '', password: '' });
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { setIsAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    const { email, password } = values;
    email && password ? setIsDisabled(false) : setIsDisabled(true);
  }, [values]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(values, setIsLoading)
      .then(() => setIsAuthenticated(true))
      .then(() => navigate('/posts'));
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
              <Text as='h1'>Login</Text>
              {inputFieldProps.map((inputFieldProp) => (
                <InputField
                  key={inputFieldProp.id}
                  {...inputFieldProp}
                  onChange={onChangeHandler}
                />
              ))}
              <Box mt='8' mb='3'>
                <CustomButton
                  loadingText='Logging you in'
                  isLoading={isLoading}
                  isDisabled={isDisabled}
                  onClick={handleLogin}
                  btnText='login'
                  w='100%'
                />
              </Box>
              <HStack justify='center'>
                <Text>Don't have an account? </Text>
                <Text
                  fontFamily='ChalkboardSEBold'
                  _hover={{ textDecoration: 'underline' }}
                >
                  <Link to='/register'>Creact account</Link>
                </Text>
              </HStack>
            </FormControl>
          </Box>
        </Flex>
      </Flex>
    </ScaleFade>
  );
};

export default Login;
