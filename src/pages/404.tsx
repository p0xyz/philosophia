import { NextPage } from 'next';

import Layout from '@/components/Layout';
import TextPageLayout from '@/components/TextPageLayout';
import { useSetPageContext } from '@/contexts/usePageContext';
import { APP_DESCRIPTION } from '@/constant/common';

const NotFound: NextPage = () => {
  useSetPageContext({
    type: 'none',
    title: '404 Page not found',
    description: APP_DESCRIPTION,
    path: '/404',
  });

  return (
    <Layout>
      <TextPageLayout
        title="404 Page not found"
        description="申し訳ありません。お探しのページは見つかりませんでした。"
        isToHomeLink
      />
    </Layout>
  );
};

export default NotFound;
