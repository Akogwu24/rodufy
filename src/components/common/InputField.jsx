import { FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

const InputField = (props) => {
  const { name, type, label, placeholder, onChange, value } = props;
  // console.log(props);
  return (
    <>
      <FormLabel mb='0' mt='5' htmlFor={name}>
        {label}
      </FormLabel>
      <Input
        size='sm'
        borderRadius='5px'
        id={name}
        type={type || 'text'}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    </>
  );
};

export default InputField;
