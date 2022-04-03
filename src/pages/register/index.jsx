import React from 'react';
import RegisterLogin from '../../components/common/RegisterLogin';

const Register = () => {
  return (
    <RegisterLogin
      onClick={() => alert('registered succefully')}
      head='Register'
      route='login'
      link='login'
      question='Already have an account?'
    />
  );
};

export default Register;
