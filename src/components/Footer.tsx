import { FC } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import Copyright from '@/components/Copyright';
import ShareLink from '@/components/ShareLink';
import { APP_FOOTER_TEXT } from '@/constant/common';
import { usePageContext } from '@/contexts/usePageContext';

const Footer: FC = () => {
  const pageContext = usePageContext();

  return (
    <Flex
      as="footer"
      flexDir="column"
      alignItems="center"
      p="80px 0 120px"
      gap="32px"
    >
      {pageContext?.type === 'photographs' && (
        <Text
          as="span"
          fontSize="12px"
          whiteSpace="pre-wrap"
          textAlign="center"
        >
          {APP_FOOTER_TEXT}
        </Text>
      )}
      <Flex flexDir="column" alignItems="center" gap="16px">
        <ShareLink variant="footer" />
        <Copyright variant="footer" />
      </Flex>
    </Flex>
  );
};

export default Footer;
