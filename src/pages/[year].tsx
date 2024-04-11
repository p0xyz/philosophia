import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Layout from '@/components/Layout';
import ImageList from '@/components/ImageList';
import OriginalModal from '@/components/Modal';

import { APP_DESCRIPTION, APP_PAGE_YEARS } from '@/constant/common';

import { client } from '@/libs/client';

import { PhotographType } from '@/types/microCMS';

import { useSetPageContext } from '@/contexts/usePageContext';

type Props = {
  path: number;
  photographs: PhotographType[];
};

const Photo: NextPage<Props> = ({ path, photographs }) => {
  const router = useRouter();
  const { id } = router.query;
  const basePath = `/${path}`;

  useSetPageContext({
    type: 'photographs',
    title: `${path}`,
    description: APP_DESCRIPTION,
    path: basePath,
  });

  return (
    <>
      <Layout>
        <ImageList
          data={photographs}
          year={path}
          onOpenModal={(id) => router.push(`${basePath}?id=${id}`)}
        />
      </Layout>
      <OriginalModal
        data={photographs.find((photograph) => photograph.id === id)}
        isOpen={!!id}
        onClose={() => router.push(basePath)}
      />
    </>
  );
};

export default Photo;

export const getStaticPaths = async () => {
  const paths = APP_PAGE_YEARS.filter((_year, i) => i !== 0).map((item) => ({
    params: { year: String(item) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { year: string };
}) => {
  const microCMSReturnData = await client.get({
    endpoint: 'photographs',
    queries: {
      offset: 0,
      limit: 100,
    },
  });

  const path = Number(params.year);
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
