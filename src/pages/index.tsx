import { NextPage } from 'next';
import { useRouter } from 'next/router';
import ImageList from '@/components/ImageList';
import Layout from '@/components/Layout';
import PhotographMainModal from '@/components/PhotographModal/PhotographMainModal';
import { APP_DESCRIPTION, APP_LATEST_YEAR } from '@/constant/common';
import { client } from '@/libs/client';
import { formatModalPageTitle } from '@/libs/format';
import { PhotographType } from '@/types/microCMS';
import { useSetPageContext } from '@/contexts/usePageContext';

type Props = {
  photographs: PhotographType[];
};

const Home: NextPage<Props> = ({ photographs }) => {
  const router = useRouter();
  const { id } = router.query;

  const modalData = photographs.find((photograph) => photograph.id === id);

  useSetPageContext({
    type: 'photographs',
    title: modalData ? `${formatModalPageTitle(modalData)}` : '',
    description: APP_DESCRIPTION,
    path: router.asPath.slice(1),
    image: modalData?.images[0].url,
  });

  return (
    <>
      <Layout>
        <ImageList
          data={photographs}
          year={APP_LATEST_YEAR}
          onOpenModal={(id) =>
            router.push(`?id=${id}`, undefined, { scroll: false })
          }
        />
      </Layout>
      {modalData && (
        <PhotographMainModal
          photograph={modalData}
          isOpen={!!id}
          onClose={() => router.push('/', undefined, { scroll: false })}
        />
      )}
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const response = (
    await client.get({
      endpoint: 'photographs',
      queries: {
        offset: 0,
        limit: 100,
        filters: `date[begins_with]${APP_LATEST_YEAR}`,
      },
    })
  ).contents as PhotographType[];

  return {
    props: {
      photographs: response,
    },
  };
};
