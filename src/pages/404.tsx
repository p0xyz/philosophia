import { NextPage } from 'next';

import Layout from '@/components/Layout';
import TextPageLayout from '@/components/TextPageLayout';

const NotFound: NextPage = () => (
  <Layout>
    <TextPageLayout
      title="404 Page not found"
      description="申し訳ありません。お探しのページは見つかりませんでした。"
    />
  </Layout>
);

export default NotFound;
