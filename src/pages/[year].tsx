import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import ImageList from '@/components/ImageList';
import PhotographMainModal from '@/components/PhotographModal/PhotographMainModal';
import { APP_DESCRIPTION, APP_PAGE_YEARS } from '@/constant/common';
import { client } from '@/libs/client';
import { formatModalPageTitle } from '@/libs/format';
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

  const modalData = photographs.find((photograph) => photograph.id === id);

  useSetPageContext({
    type: 'photographs',
    title: modalData ? `${formatModalPageTitle(modalData)}` : `${path}`,
    description: APP_DESCRIPTION,
    path: router.asPath.slice(1),
    image: modalData?.images[0].url,
  });

  return (
    <>
      <Layout>
        <ImageList
          data={photographs}
          year={path}
          onOpenModal={(id) =>
            router.push(`${basePath}?id=${id}`, undefined, { scroll: false })
          }
        />
      </Layout>
      {modalData && (
        <PhotographMainModal
          photograph={modalData}
          isOpen={!!id}
          onClose={() => router.push(basePath, undefined, { scroll: false })}
        />
      )}
    </>
  );
};

export default Photo;

export const getStaticPaths = async () => {
  const paths: { params: { year: string } }[] = APP_PAGE_YEARS.filter(
    (_year, i) => i !== 0
  ).map((item) => ({
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
  const path = Number(params.year);

  const response = (
    await client.get({
      endpoint: 'photographs',
      queries: {
        offset: 0,
        limit: 100,
        filters: `date[begins_with]${path}`,
      },
    })
  ).contents as PhotographType[];

  return {
    props: {
      path,
      photographs: response,
    },
  };
};
