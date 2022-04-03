// import { Box, Flex, FormControl, Text } from '@chakra-ui/react';
// import bgImg from '../../assets/images/Frame14.svg';
// import { inputFieldProps } from '../utils/inputFieldProps';
// import CustomButton from './CustomButton';
// import InputField from './InputField';

// const RegisterLogin = ({ head }) => {
//   return (
//     <Flex as='main' w='100vw' h='100vh'>
//       <Box
//         bgPosY='-100px'
//         w='100%'
//         bgSize='cover'
//         bgRepeat='no-repeat'
//         bgImage={bgImg}
//         flex={2}
//       ></Box>
//       <Flex justify='center' align='center' flex={8} bg='gray'>
//         <Box bg='#fff' p='10' borderRadius='10px' shadow='md'>
//           <FormControl w='300px'>
//             <Text as='h1'>{head}</Text>
//             {inputFieldProps.map((inputFieldProp) => (
//               <InputField key={inputFieldProp.id} {...inputFieldProp} />
//             ))}
//             <Box mt='10'>
//               <CustomButton btnText='login' w='100%' />
//             </Box>
//           </FormControl>
//         </Box>
//       </Flex>
//     </Flex>
//   );
// };

// export default RegisterLogin;
