import { useState } from 'react';
import { NextPage } from 'next';

import Layout from '@/components/Layout';
import Modal from '@/components/Modal';
import ImageList from '@/components/ImageList';

import { APP_DESCRIPTION, APP_PAGE_YEARS } from '@/constant/common';

import { client } from '@/libs/client';

import { PhotographType } from '@/types/microCMS';
import { useSetPageContext } from '@/contexts/usePageContext';

type Props = {
  path: number;
  photographs: PhotographType[];
};

const Photo: NextPage<Props> = ({ path, photographs }) => {
  useSetPageContext({
    type: 'photographs',
    title: `${path}`,
    description: APP_DESCRIPTION,
    path: `/${path}`,
  });

  const [selectedId, setSelectedId] = useState<string | undefined>();

  return (
    <>
      <Layout>
        <ImageList data={photographs} onOpenModal={(id) => setSelectedId(id)} />
      </Layout>
      <Modal
        data={photographs.find(({ id }) => id === selectedId)}
        isOpen={!!selectedId}
        onClose={() => setSelectedId(undefined)}
      />
    </>
  );
};

export default Photo;

export const getStaticPaths = async () => {
  const paths = APP_PAGE_YEARS.filter((_year, i) => i !== 0).map((item) => ({
    params: { id: String(item) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const microCMSReturnData = await client.get({
    endpoint: 'photographs',
    queries: {
      offset: 0,
      limit: 100,
    },
  });

  const path = Number(params.id);
  const microCMSData: PhotographType[] = microCMSReturnData.contents.filter(
    (item: PhotographType) => {
      const contentDate = new Date(item.date);
      return contentDate.getFullYear() === path;
    }
  );

  return {
    props: {
      path,
      photographs: microCMSData,
    },
  };
};
