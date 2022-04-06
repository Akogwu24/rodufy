import { Button } from '@chakra-ui/react';
import React from 'react';

const CustomButton = ({ btnText, w, ...props }) => {
  return (
    <Button
      className='custom-button'
      bg='secondary'
      w={w || '130px'}
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
