import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    primary: 'rgb(48,20,70)',
    secondary: '#EA7052',
    lightGray: '#F4F4F4',
    gray: '#E5E5E5',
  },
  styles: {
    global: {
      body: {
        // clamp(0.9rem, 1vw + 1rem, 2.2rem)
        fontSize: '16px',
        fontFamily: 'ChalkboardSELight, sans-serif',
      },
      h1: {
        fontFamily: 'ChalkboardSEBold, sans-serif',
        fontSize: '40px',
      },
    },
  },
});
