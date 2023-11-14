import { FC } from 'react';

import Layout from '@/components/Layout';
import TextPageLayout from '@/components/TextPageLayout';

import { APP_TITLE } from '@/constant/app';

const Contact39: FC = () => (
  <Layout>
    <TextPageLayout
      title="お問い合わせ完了"
      description={`この度は${APP_TITLE}にお問い合わせをいただきありがとうございます。折り返しご連絡差し上げますまで暫くお待ちください。`}
    />
  </Layout>
);

export default Contact39;
