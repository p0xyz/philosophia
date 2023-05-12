import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import Navigation from '@/components/Navigation';
import OriginalSpacer from '@/components/OriginalSpacer';
import Footer from '@/components/Footer';
import HeadOgp from '@/components/HeadOgp';

type Props = {
  path: string | number | undefined;
  component: JSX.Element;
};

const Contents: FC<Props> = ({ path, component }) => {
  return (
    <>
      <HeadOgp index={path} />
      <Box as={'main'}>
        {/* calc((100vw - 3px) / 2) */}
        <OriginalSpacer size={'160px'} />
        <Navigation path={path} />
        <>{component}</>
        <Footer />
      </Box>
    </>
  );
};

export default Contents;
