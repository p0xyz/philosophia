import Contents from '@/components/Contents';
import { Flex, Text } from '@chakra-ui/react';
import { NextPage } from 'next';

const NotFound: NextPage = () => {
  const Component = () => (
    <Flex
      flexDir={'column'}
      gap={'16px'}
      w={'80vw'}
      maxW={'800px'}
      m={'0 auto'}
      p={'80px 0 40px'}
    >
      <Text
        as={'h2'}
        fontFamily={'logo'}
        fontSize={'2.5rem'}
      >
        Page not found
      </Text>
      <Text>申し訳ありません。お探しのページは見つかりませんでした。</Text>
    </Flex>
  );

  return <Contents path={undefined} component={<Component />} />;
};

export default NotFound;
