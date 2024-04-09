import { FC, ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

import Navigation from '@/components/Navigation';
import OGP from '@/components/OGP';
import PageTransition from '@/components/PageTransition';
import Copyright from '@/components/Copyright';
import ShareLink from '@/components/ShareLink';

import { usePageContext } from '@/contexts/usePageContext';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const pageContext = usePageContext();

  return (
    <>
      <OGP />
      <Navigation />
      <PageTransition key={pageContext?.path}>
        <>{children}</>
      </PageTransition>
      <Flex
        as="footer"
        flexDir="column"
        alignItems="center"
        p="56px 0 80px"
        gap="16px"
      >
        <ShareLink variant="footer" />
        <Copyright variant="footer" />
      </Flex>
    </>
  );
};

export default Layout;
