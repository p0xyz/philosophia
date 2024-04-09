import { FC } from 'react';
import { VStack, Heading, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

type Props = {
  title: string;
  description?: string;
  children?: JSX.Element;
};

const TextPageLayout: FC<Props> = ({ title, description, children }) => (
  <VStack
    alignItems="stretch"
    gap={description && !children ? '16px' : '32px'}
    w="90vw"
    maxW="800px"
    m="0 auto"
  >
    <Heading as="h2" fontFamily="logo" fontSize="2rem">
      {title}
    </Heading>
    {description && (
      <>
        <Text>{description}</Text>
        <NextLink passHref href="/">
          <Text as="a" textDecor="underline" _hover={{ textDecor: 'none' }}>
            トップへ戻る
          </Text>
        </NextLink>
      </>
    )}
    {children && children}
  </VStack>
);

export default TextPageLayout;
