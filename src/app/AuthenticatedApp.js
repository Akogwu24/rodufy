import { Box } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Posts from '../pages/posts';

const AuthenticatedApp = () => {
  return (
    <Box>
      <Routes>
        <Route path='/posts' element={<Posts />} />
      </Routes>
    </Box>
  );
};

export default AuthenticatedApp;
