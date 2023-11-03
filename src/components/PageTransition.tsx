import { FC, useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';

type Props = {
  children: JSX.Element;
};

const PageTransition: FC<Props> = ({ children }) => {
  const router = useRouter();
  const [isLoad, setIsLoad] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoad) setIsLoad(true);
    router.events.on('routeChangeStart', () => setIsLoad(true));
    window.addEventListener('beforeunload', () => setIsLoad(true));
    return () => {
      router.events.off('routeChangeStart', () => setIsLoad(false));
      window.removeEventListener('beforeunload', () => setIsLoad(false));
    };
  }, [router]);

  return (
    <Box
      as="main"
      opacity={0}
      transform="translateX(-2vw)"
      transition="transform 0.3s, opacity 0.3s"
      pt="160px"
      sx={{
        ...(isLoad && {
          opacity: 1,
          transform: 'translateX(0)',
        }),
      }}
    >
      {children}
    </Box>
  );
};

export default PageTransition;
