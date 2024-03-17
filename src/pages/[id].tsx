import { useState } from 'react';
import { NextPage } from 'next';

import Layout from '@/components/Layout';
import Modal from '@/components/Modal';
import ImageList from '@/components/ImageList';

import { APP_PAGE_YEARS } from '@/constant/app';

import { client } from '@/libs/client';

import { MicroCMSArticleType } from '@/types/microCMS';

type Props = {
  microCMSData: MicroCMSArticleType[];
};

const Photo: NextPage<Props> = ({ microCMSData }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isSelectedModal, setIsSelectedModal] = useState<boolean>(false);

  const onOpenModal = (index: number) => {
    setSelectedIndex(index);
    setIsSelectedModal(!isSelectedModal);
  };

  return (
    <>
      <Layout>
        <ImageList data={microCMSData} onOpenModal={onOpenModal} />
      </Layout>
      <Modal
        data={microCMSData[selectedIndex]}
        isOpen={isSelectedModal}
        onClose={() => setIsSelectedModal(!isSelectedModal)}
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
  const microCMSData: MicroCMSArticleType[] =
    microCMSReturnData.contents.filter((item: MicroCMSArticleType) => {
      const contentDate = new Date(item.date);
      return contentDate.getFullYear() === path;
    });

  return {
    props: {
      microCMSData: microCMSData,
    },
  };
};
