import { FC, useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';

import Navigation from '@/components/Navigation';
import OriginalSpacer from '@/components/OriginalSpacer';
import Footer from '@/components/Footer';
import HeadOgp from '@/components/HeadOgp';
import { useRouter } from 'next/router';
import { log } from 'console';

type Props = {
  path: string | number | undefined;
  component: JSX.Element;
};

const Contents: FC<Props> = ({ path, component }) => {

  return (
    <>
      <HeadOgp index={path} />
      <Navigation path={path} />
      <OriginalSpacer size={'160px'} />
      <>{component}</>
      <Footer />
    </>
  );
};

export default Contents;
