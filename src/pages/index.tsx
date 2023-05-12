import { years } from '@/constant/data';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const router = useRouter();
  const send = () => {
    router.push({
      pathname: years[0] + '',
    });
  };
  useEffect(() => {
    send();
  }, []);

  return <Box />;
};

export default Home;
