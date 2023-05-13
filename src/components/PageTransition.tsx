import { FC, useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';

type Props = {
  component: JSX.Element;
};

const PageTransition: FC<Props> = ({ component }) => {
  const router = useRouter();
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const loadFuncFalse = () => {
    setIsLoad(false);
  };

  const loadFuncTure = () => {
    setIsLoad(true);
  };

  useEffect(() => {
    loadFuncTure();
    router.events.on('routeChangeStart', loadFuncFalse);
    window.addEventListener('beforeunload', loadFuncFalse);
    return () => {
      router.events.off('routeChangeStart', loadFuncTure);
      window.removeEventListener('beforeunload', loadFuncTure);
    };
  }, []);

  return (
    <Box
      as={'main'}
      opacity={0}
      transform={'translateX(-2vw)'}
      transition={'transform 0.3s, opacity 0.3s'}
      sx={{
        ...(isLoad && {
          opacity: 1,
          transform: 'translateX(0)',
        }),
      }}
    >
      {component}
    </Box>
  );
};

export default PageTransition;
