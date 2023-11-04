import { FC } from 'react';
import { useRouter } from 'next/router';
import { Flex } from '@chakra-ui/react';

import Navigation from '@/components/Navigation';
import HeadOgp from '@/components/HeadOgp';
import PageTransition from '@/components/PageTransition';
import Copyright from '@/components/Copyright';
import ShareLink from '@/components/ShareLink';

import { AppPathType } from '@/types/link';

type Props = {
  children: JSX.Element;
};

const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();
  const is404 = router.pathname === '/404';
  const path: AppPathType | undefined = is404
    ? undefined
    : (router.asPath.slice(1) as AppPathType);

  const Footer: () => JSX.Element = () => (
    <Flex
      as="footer"
      flexDir="column"
      alignItems="center"
      p="64px 0 88px"
      gap="16px"
    >
      <ShareLink isFoot />
      <Copyright isFoot />
    </Flex>
  );

  return (
    <>
      <HeadOgp path={path} />
      <Navigation path={path} />
      <PageTransition key={path}>
        <>{children}</>
      </PageTransition>
      <Footer />
    </>
  );
};

export default Layout;
