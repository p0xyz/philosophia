import { extendTheme } from '@chakra-ui/react';

const colors = {
  white: '#fff',
  black900: '#1E1E1E',
  black800: '#464646',
  black600: '#777777',
  black400: '#ACACAC',
  black300: '#D4D4D4',
};
const styles = {
  global: {
    html: {
      fontSize: '62.5%',
    },
    body: {
      color: 'black800',
      fontSize: '1.4rem',
      fontFamily: 'body',
      a: {
        color: 'black800',
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
  md: '720px',
  lg: '1000px',
};
const textStyles = {
  imageModalArrowButton: {
    // bg:"rgba(255, 255, 255, 0.8)",
    position: 'relative',
    '@media screen and (min-width: 481px)': {
      width: '64px',
      height: '160px',
    },
    '@media screen and (max-width: 480px)': {
      width: '48px',
      height: '72px',
    },
    '&:hover': {
      '&::before': {
        backgroundColor: 'black300',
      },
      '&::after': {
        backgroundColor: 'black300',
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
