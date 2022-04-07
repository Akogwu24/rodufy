import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Posts from '../pages/posts';

const AuthenticatedApp = () => {
  // const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const isAuthenticated = sessionStorage.getItem('11#221#');

  useEffect(() => {
    if (!isAuthenticated) {
      return navigate('/');
    }
  }, [navigate, isAuthenticated]);

  return (
    <Box>
      <Routes>
        <Route
          path='/posts'
          element={isAuthenticated ? <Posts /> : <Navigate to='/login' />}
        />
      </Routes>
    </Box>
  );
};

export default AuthenticatedApp;
