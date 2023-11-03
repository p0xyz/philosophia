import { FC } from 'react';
import { VStack, Heading, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { PATH_INDEX } from '@/constant/data';

type Props = {
  title: string;
  description: string;
};

const TextPageLayout: FC<Props> = ({ title, description }) => (
  <VStack alignItems="stretch" gap="16px" w="80vw" maxW="800px" m="0 auto" pt="40px">
    <Heading as="h2" fontFamily="logo" fontSize="2rem">
      {title}
    </Heading>
    <Text>{description}</Text>
    <NextLink passHref href={PATH_INDEX}>
      <Text as="a" textDecor="underline" _hover={{ textDecor: 'none' }}>
        トップへ戻る
      </Text>
    </NextLink>
  </VStack>
);

export default TextPageLayout;
