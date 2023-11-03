import { FC } from 'react';
import { useRouter } from 'next/router';
import { Flex } from '@chakra-ui/react';

import Navigation from '@/components/Navigation';
import HeadOgp from '@/components/HeadOgp';
import OriginalSpacer from '@/components/OriginalSpacer';
import PageTransition from '@/components/PageTransition';
import Copy from '@/components/Copy';
import Sns from '@/components/Sns';
import { AppPathType } from '@/types/link';

type Props = {
  children: JSX.Element;
};

const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();
  const isPhotography = router.pathname === '/[id]';
  const path = (
    isPhotography ? Number(router.asPath.slice(1)) : router.asPath.slice(1)
  ) as AppPathType;

  const Footer: () => JSX.Element = () => (
    <Flex
      as="footer"
      flexDir="column"
      alignItems="center"
      p="64px 0 88px"
      gap="16px"
    >
      <Sns isFoot />
      <Copy isFoot />
    </Flex>
  );

  return (
    <>
      <HeadOgp path={path} />
      <Navigation path={path} />
      <OriginalSpacer size="160px" />
      <PageTransition>
        <>{children}</>
      </PageTransition>
      <Footer />
    </>
  );
};

export default Layout;
