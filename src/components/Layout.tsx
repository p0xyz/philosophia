import { FC, ReactNode } from 'react';

import Navigation from '@/components/Navigation';
import OGP from '@/components/OGP';
import PageTransition from '@/components/PageTransition';
import Footer from '@/components/Footer';

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
      <Footer/>
    </>
  );
};

export default Layout;
