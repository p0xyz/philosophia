import { NextPage } from 'next';
import { useRouter } from 'next/router';

import ImageList from '@/components/ImageList';
import Layout from '@/components/Layout';
import OriginalModal from '@/components/OriginalModal';

import { APP_DESCRIPTION, APP_LATEST_YEAR } from '@/constant/common';

import { client } from '@/libs/client';

import { PhotographType } from '@/types/microCMS';
import { useSetPageContext } from '@/contexts/usePageContext';

type Props = {
  photographs: PhotographType[];
};

const Home: NextPage<Props> = ({ photographs }) => {
  const router = useRouter();
  const { id } = router.query;

  useSetPageContext({
    type: 'photographs',
    title: '',
    description: APP_DESCRIPTION,
    path: '/',
  });

  return (
    <>
      <Layout>
        <ImageList
          data={photographs}
          year={APP_LATEST_YEAR}
          onOpenModal={(id) => router.push(`?id=${id}`, undefined, { scroll: false })}
        />
      </Layout>
      <OriginalModal
        data={photographs.find((photograph) => photograph.id === id)}
        isOpen={!!id}
        onClose={() => router.push('/', undefined, { scroll: false })}
      />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const microCMSReturnData = await client.get({
    endpoint: 'photographs',
    queries: {
      offset: 0,
      limit: 100,
    },
  });

  const microCMSData: PhotographType[] = microCMSReturnData.contents.filter(
    (item: PhotographType) => {
      const contentDate = new Date(item.date);
      return contentDate.getFullYear() === APP_LATEST_YEAR;
    }
  );

  return {
    props: {
      photographs: microCMSData,
    },
  };
};
