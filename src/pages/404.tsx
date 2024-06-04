import { NextPage } from 'next';
import { Flex, Text } from '@chakra-ui/react';
import Layout from '@/components/Layout';
import TextPageLayout from '@/components/TextPageLayout';
import { useSetPageContext } from '@/contexts/usePageContext';
import { APP_DESCRIPTION } from '@/constant/common';
import BackHomeLink from '@/components/BackHomeLink';

const NotFound: NextPage = () => {
  useSetPageContext({
    type: 'none',
    title: '404 Page not found',
    description: APP_DESCRIPTION,
    path: '/404',
  });

  return (
    <Layout>
      <TextPageLayout title="404 Page not found">
        <Flex flexDir="column" gap="16px">
          <Text>申し訳ありません。お探しのページは見つかりませんでした。</Text>
          <BackHomeLink />
        </Flex>
      </TextPageLayout>
    </Layout>
  );
};

export default NotFound;
