import { FC } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import Layout from '@/components/Layout';
import TextPageLayout from '@/components/TextPageLayout';
import { APP_TITLE } from '@/constant/common';
import { useSetPageContext } from '@/contexts/usePageContext';
import BackHomeLink from '@/components/BackHomeLink';

const Contact39: FC = () => {
  useSetPageContext({
    type: 'none',
    title: 'お問い合わせ完了',
    description: `${APP_TITLE}のお問い合わせフォームです。`,
    path: '/contact/39',
  });

  return (
    <Layout>
      <TextPageLayout title="お問い合わせ完了">
        <Flex flexDir="column" gap="16px">
          <Text>
            {`この度は${APP_TITLE}にお問い合わせをいただきありがとうございます。折り返しご連絡差し上げますまで暫くお待ちください。`}
          </Text>
          <BackHomeLink />
        </Flex>
      </TextPageLayout>
    </Layout>
  );
};

export default Contact39;
