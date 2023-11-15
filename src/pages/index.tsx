import { APP_PAGE_YEARS } from '@/constant/app';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push({
      pathname: String(APP_PAGE_YEARS[0]),
    });
  }, []);

  return <></>;
};

export default Home;
