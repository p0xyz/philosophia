import { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

import OriginalSpacer from '@/components/OriginalSpacer';

import { furigana, shereLinks } from '@/libs/const';

const Footer: FC = () => {
  return (
    <Flex
      as={'footer'}
      flexDir={'column'}
      alignItems={'center'}
      p={'64px 0 88px'}
    >
      <Flex as={'ul'} gap={'8px'}>
        {shereLinks.map((item, i) => (
          <Box as={'li'} key={item.svg + i}>
            <Box
              as={'a'}
              href={item.url}
              target={'_blank'}
              display={'block'}
              w={'40px'}
              h={'40px'}
            >
              <Box as={'img'} src={`/img/icon_${item.svg}.svg`} />
            </Box>
          </Box>
        ))}
      </Flex>
      <OriginalSpacer size={'16px'} />
      <Text
        as={'small'}
        display={'block'}
        w={'max-content'}
        fontSize={'1.2rem'}
        textAlign={'center'}
      >
        &copy; 2020-2023 {furigana}.
      </Text>
    </Flex>
  );
};

export default Footer;
