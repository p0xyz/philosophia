import { FC } from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'src/theme';
import { WidthProvider } from '@/contexts/useWidth';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <WidthProvider>
        <Component {...pageProps} />
      </WidthProvider>
    </ChakraProvider>
  );
};

export default MyApp;
