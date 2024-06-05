import { useState } from 'react';
import { NextPage } from 'next';
import { Flex, Text } from '@chakra-ui/react';
import Layout from '@/components/Layout';
import TextPageLayout from '@/components/TextPageLayout';
import BackHomeLink from '@/components/BackHomeLink';
import ImageListContentsForMe from '@/components/ImageList/ImageListContentsForMe';
import PhotographSubModal from '@/components/PhotographModal/PhotographSubModal';
import { APP_DESCRIPTION } from '@/constant/common';
import { useSetPageContext } from '@/contexts/usePageContext';
import { client } from '@/libs/client';
import { DocumentsType, PresentsType } from '@/types/microCMS';

type Props = {
  photographs: PresentsType[];
  isPublicMePage: boolean;
};

const Me: NextPage<Props> = ({ photographs, isPublicMePage }) => {
  const [modalIndex, setModalIndex] = useState<number>();

  useSetPageContext({
    type: 'photographs',
    title: isPublicMePage ? '撮っていただいたもの' : 'Page is private',
    description: APP_DESCRIPTION,
    path: '/me',
  });

  if (!isPublicMePage) {
    return (
      <Layout>
        <TextPageLayout title="Page is private">
          <Flex flexDir="column" gap="16px">
            <Text>
              申し訳ありません。お探しのページは現在公開されていません。
            </Text>
            <BackHomeLink />
          </Flex>
        </TextPageLayout>
      </Layout>
    );
  }

  return (
    <>
      <Layout>
        <ImageListContentsForMe
          photographs={photographs}
          onOpenModal={(index) => setModalIndex(index)}
        />
      </Layout>
      {modalIndex !== undefined && (
        <PhotographSubModal
          photographs={photographs}
          index={modalIndex}
          isOpen={!!modalIndex}
          onClose={() => setModalIndex(undefined)}
        />
      )}
    </>
  );
};

export default Me;

export const getStaticProps = async () => {
  const photographsResponse = (
    await client.get({
      endpoint: 'presents',
      queries: {
        offset: 0,
        limit: 100,
      },
    })
  ).contents as PresentsType[];

  const isPublicMePageResponse = (await client.get({
    endpoint: 'documents',
  })) as DocumentsType;

  return {
    props: {
      photographs: photographsResponse,
      isPublicMePage: isPublicMePageResponse.isPublicMePage,
    },
  };
};
