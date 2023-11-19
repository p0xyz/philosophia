import { extendTheme } from '@chakra-ui/react';

const colors = {
  white: '#fff',
  base: {
    900: '#1E1E1E',
    800: '#464646',
    600: '#777777',
    400: '#ACACAC',
    300: '#D4D4D4',
  },
};
const styles = {
  global: {
    html: {
      fontSize: '62.5%',
    },
    body: {
      color: 'base.800',
      fontSize: '1.4rem',
      fontFamily: 'body',
      a: {
        color: 'base.800',
        textDecoration: 'none',
      },
      li: {
        listStyleType: 'none',
      },
      pre: {
        fontFamily: 'body',
        whiteSpace: 'pre-wrap',
      },
    },
    '::selection': {
      background: '#f3f3f3',
      color: '#8a8a8a',
    },
    '::-moz-selection': {
      background: '#f3f3f3',
      color: '#8a8a8a',
    },
  },
};
const fonts = {
  body: "'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif",
  logo: "'Poiret One', sans-serif",
  en: "'League Spartan', sans-serif",
};
const breakpoints = {
  sm: '480px',
  md: '880px',
};
const textStyles = {
  imageModalArrowButton: {
    position: 'relative',
    '@media screen and (min-width: 481px)': {
      width: '64px',
      height: '160px',
    },
    '@media screen and (max-width: 480px)': {
      width: '44px',
      height: '64px',
      bg: 'rgba(255, 255, 255, 0.5)',
    },
    '&:hover': {
      '&::before': {
        backgroundColor: 'base.300',
      },
      '&::after': {
        backgroundColor: 'base.300',
      },
    },
  },
};

const theme = extendTheme({
  styles,
  colors,
  fonts,
  textStyles,
  breakpoints,
});

export default theme;
