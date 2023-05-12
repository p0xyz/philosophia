import { FC } from 'react';
import { Flex } from '@chakra-ui/react';

import Sns from '@/components/Sns';
import Copy from '@/components/Copy';

const Footer: FC = () => {
  return (
    <Flex
      as={'footer'}
      flexDir={'column'}
      alignItems={'center'}
      p={'64px 0 88px'}
      gap={'16px'}
    >
      <Sns isFoot />
      <Copy isFoot />
    </Flex>
  );
};

export default Footer;
