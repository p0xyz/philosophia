import { FC } from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme';
import { WidthProvider } from '@/contexts/useWidth';
import { OGPProvider } from '@/contexts/usePageContext';
import { UserAgentProvider } from '@/contexts/useUserAgent';

const Philosophia: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <UserAgentProvider>
        <WidthProvider>
          <OGPProvider>
            <Component {...pageProps} />
          </OGPProvider>
        </WidthProvider>
      </UserAgentProvider>
    </ChakraProvider>
  );
};

export default Philosophia;
