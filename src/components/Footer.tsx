import { FC } from 'react';
import { Flex } from '@chakra-ui/react';

import Copyright from '@/components/Copyright';
import ShareLink from '@/components/ShareLink';

const Footer: FC = () => (
  <Flex
    as="footer"
    flexDir="column"
    alignItems="center"
    p="56px 0 80px"
    gap="16px"
  >
    <ShareLink variant="footer" />
    <Copyright variant="footer" />
  </Flex>
);

export default Footer;
