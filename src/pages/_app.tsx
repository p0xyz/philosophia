import { FC } from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'src/theme';
import { WidthProvider } from '@/contexts/useWidth';
import { OGPProvider } from '@/contexts/usePageContext';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <WidthProvider>
        <OGPProvider>
          <Component {...pageProps} />
        </OGPProvider>
      </WidthProvider>
    </ChakraProvider>
  );
};

export default MyApp;
