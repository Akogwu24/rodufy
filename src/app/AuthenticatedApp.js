import { Box } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import { Route, Routes, Redirect, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import Login from '../pages/login';
import Posts from '../pages/posts';

const AuthenticatedApp = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     return navigate('/');
  //   }
  // }, [navigate, isAuthenticated]);
  return (
    <Box>
      <Routes>
        <Route path='/posts' element={<Posts />} />
      </Routes>
    </Box>
  );
};

export default AuthenticatedApp;
