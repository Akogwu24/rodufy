import { Box, Flex, FormControl, HStack, Text, Link } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImg from '../../assets/images/Frame14.svg';
import { inputFieldProps } from '../../components/utils/inputFieldProps';
import InputField from '../../components/common/InputField';
import CustomButton from '../../components/common/CustomButton';
import { BASE_URL } from '../../api/useFetch';
import {
  successNotifier,
  errorNotifier,
} from '../../components/common/notificationHandler';
import { timeoutSetter } from '../../components/utils/timeoutSetter';

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: '', password: '' });
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const { email, password } = values;
    email && password ? setIsDisabled(false) : setIsDisabled(true);
  }, [values]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    console.log(values, 'vsdgsd');
    try {
      const response = await fetch(`${BASE_URL}auth/login`, {
        method: 'POST',
        body: JSON.stringify({ ...values }),
        headers: { 'Content-type': 'application/json' },
      });
      if (!response.ok) {
        const message = `An error has occured: ${response.status} - ${response.statusText}`;
        throw new Error(message);
      }
      const data = await response.json();
      console.log(data);
      successNotifier(data?.data?.data);
      timeoutSetter(() => navigate('/'), 3000);
    } catch (error) {
      errorNotifier();
    }
  };

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
                isDisabled={isDisabled}
                onClick={handleLogin}
                btnText='login'
                w='100%'
              />
            </Box>
            <HStack justify='center'>
              <Text>Don't have an account? </Text>
              <Text fontFamily='ChalkboardSEBold'>
                <Link>Creact account</Link>
              </Text>
            </HStack>
          </FormControl>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Login;
