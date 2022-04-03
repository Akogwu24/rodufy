import { Box } from '@chakra-ui/react';

const Container = ({ children, ...props }) => {
  return (
    <Box w={['95%', '90%', '90%', '80%', '70%']} mx='auto' {...props}>
      {children}
    </Box>
  );
};

export default Container;
