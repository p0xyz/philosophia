import { FC } from 'react';

import Layout from '@/components/Layout';
import TextPageLayout from '@/components/TextPageLayout';

import { APP_TITLE } from '@/constant/common';
import { useSetPageContext } from '@/contexts/usePageContext';

const Contact39: FC = () => {
  useSetPageContext({
    type: 'contact',
    title: 'お問い合わせ完了',
    description: `${APP_TITLE}のお問い合わせフォームです。`,
    path: '/contact/39',
  });

  return (
    <Layout>
      <TextPageLayout
        title="お問い合わせ完了"
        description={`この度は${APP_TITLE}にお問い合わせをいただきありがとうございます。折り返しご連絡差し上げますまで暫くお待ちください。`}
      />
    </Layout>
  );
};

export default Contact39;
