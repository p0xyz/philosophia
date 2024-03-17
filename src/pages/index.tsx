import { useState } from 'react';
import { NextPage } from 'next';

import ImageList from '@/components/ImageList';
import Layout from '@/components/Layout';
import Modal from '@/components/Modal';

import { APP_PAGE_YEARS } from '@/constant/app';

import { client } from '@/libs/client';

import { MicroCMSArticleType } from '@/types/microCMS';

type Props = {
  microCMSData: MicroCMSArticleType[];
};

const Home: NextPage<Props> = ({ microCMSData }) => {
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

export default Home;

export const getStaticProps = async () => {
  const microCMSReturnData = await client.get({
    endpoint: 'photographs',
    queries: {
      offset: 0,
      limit: 100,
    },
  });

  const microCMSData: MicroCMSArticleType[] =
    microCMSReturnData.contents.filter((item: MicroCMSArticleType) => {
      const contentDate = new Date(item.date);
      return contentDate.getFullYear() === Number(APP_PAGE_YEARS[0]);
    });

  return {
    props: {
      microCMSData: microCMSData,
    },
  };
};
