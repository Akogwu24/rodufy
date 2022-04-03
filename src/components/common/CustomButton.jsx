import { Button } from '@chakra-ui/react';
import React from 'react';

const CustomButton = ({ btnText, w, ...props }) => {
  return (
    <Button
      bg='secondary'
      color='#fff'
      p='5'
      w={w || '130px'}
      letterSpacing='1px'
      _hover={{ borderRadius: '10px' }}
      transition='ease-in all 0.3s'
      borderRadius={'5px'}
      _focus={{ border: 'none' }}
      {...props}
    >
      {btnText}
    </Button>
  );
};

export default CustomButton;

// #301446
// background: rgba(234, 112, 82, 1);
// rgb(238,141,117)
