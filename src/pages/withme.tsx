import { NextPage } from 'next';
import { Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import Layout from '@/components/Layout';
import TextPageLayout from '@/components/TextPageLayout';
import { APP_DESCRIPTION, APP_MAIN_IMAGE } from '@/constant/common';
import { useSetPageContext } from '@/contexts/usePageContext';
import { client } from '@/libs/client';
import { DocumentsType, OverviewType } from '@/types/microCMS';

type Props = {
  overview: OverviewType[];
};

const WithMe: NextPage<Props> = ({ overview }) => {
  useSetPageContext({
    type: 'none',
    title: '撮影時のあれこれ',
    description: APP_DESCRIPTION,
    path: '/withme',
  });

  return (
    <Layout>
      <TextPageLayout title="撮影時のあれこれ">
        <Text>
          関西近郊でポトレを撮らせていただける方がいらっしゃれば是非{' '}
          <Link
            href="https://www.instagram.com/p0_xyz/"
            target="_blank"
            textDecor="underline"
            _hover={{ textDecor: 'none' }}
          >
            Ig: @p0_xyz
          </Link>{' '}
          までご連絡ください。
        </Text>
        {overview.map(({ heading, list }) => (
          <Flex key={heading} flexDir="column" gap="20px" mt={0}>
            <Heading as="h3" fontSize="1.8rem">
              {heading}
            </Heading>
            <Flex as="ul" flexDir="column" gap="6px">
              {list.map((item) => (
                <Flex
                  key={item}
                  as="li"
                  alignItems="flex-start"
                  gap="8px"
                  pl="8px"
                  flex="none"
                  lineHeight="2.2rem"
                  sx={{
                    '&::before': {
                      content: '""',
                      display: 'block',
                      boxSize: '6px',
                      bg: 'base.400',
                      mt: '8px',
                      rounded: 'full',
                      flex: 'none',
                    },
                  }}
                >
                  {item}
                </Flex>
              ))}
            </Flex>
          </Flex>
        ))}
        <Image src={`${APP_MAIN_IMAGE}?w=1200`} />
      </TextPageLayout>
    </Layout>
  );
};

export default WithMe;

export const getStaticProps = async () => {
  const response = (await client.get({
    endpoint: 'documents',
  })) as DocumentsType;

  return {
    props: {
      overview: JSON.parse(response.overview) as OverviewType[],
    },
  };
};
