import { FC, ReactNode } from 'react';
import { VStack, Heading, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

type Props = {
  title: string;
  children: ReactNode;
};

const TextPageLayout: FC<Props> = ({ title, children }) => (
  <VStack alignItems="stretch" gap="32px" w="90vw" maxW="800px" m="0 auto">
    <Heading as="h2" fontFamily="logo" fontSize="2rem">
      {title}
    </Heading>
    {children}
  </VStack>
);

export default TextPageLayout;
