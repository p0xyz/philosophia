import { FC } from 'react';

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import HeadOgp from '@/components/HeadOgp';
import OriginalSpacer from '@/components/OriginalSpacer';

type Props = {
  path: string | number | undefined;
  component: JSX.Element;
};

const Contents: FC<Props> = ({ path, component }) => {
  return (
    <>
      <HeadOgp index={path} />
      <Navigation path={path} />
      <OriginalSpacer size="160px" />
      <>{component}</>
      <Footer />
    </>
  );
};

export default Contents;
