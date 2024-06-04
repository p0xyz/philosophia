import { FC } from 'react';
import NextLink from 'next/link';
import { Text } from '@chakra-ui/react';

const BackHomeLink: FC = () => (
  <NextLink passHref href="/">
    <Text as="a" textDecor="underline" _hover={{ textDecor: 'none' }}>
      トップへ戻る
    </Text>
  </NextLink>
);

export default BackHomeLink;
