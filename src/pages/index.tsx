import { useState } from 'react';
import { NextPage } from 'next';

import ImageList from '@/components/ImageList';
import Layout from '@/components/Layout';
import Modal from '@/components/Modal';

import { APP_DESCRIPTION, APP_LATEST_YEAR } from '@/constant/common';

import { client } from '@/libs/client';

import { PhotographType } from '@/types/microCMS';
import { useSetPageContext } from '@/contexts/usePageContext';

type Props = {
  photographs: PhotographType[];
};

const Home: NextPage<Props> = ({ photographs }) => {
  useSetPageContext({
    type: 'photographs',
    title: '',
    description: APP_DESCRIPTION,
    path: '/',
  });

  const [selectedId, setSelectedId] = useState<string | undefined>();

  return (
    <>
      <Layout>
        <ImageList data={photographs} onOpenModal={(id) => setSelectedId(id)} />
      </Layout>
      <Modal
        data={photographs.find(({ id }) => id === selectedId)!}
        isOpen={!!selectedId}
        onClose={() => setSelectedId(undefined)}
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
