import { Flex, Spinner } from '@chakra-ui/react';

export default function FullPageLoader({ bg, h }) {
  return (
    <Flex
      bg={bg ? bg : '#fff'}
      justifyContent='center'
      alignItems='center'
      height={h ? h : '100vh'}
      width='100%'
    >
      <Spinner
        color='primary'
        w='80px'
        h='80px'
        speed='0.6s'
        thickness='10px'
        emptyColor='secondary'
      />
    </Flex>
  );
}
