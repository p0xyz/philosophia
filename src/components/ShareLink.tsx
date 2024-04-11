import { FC } from 'react';
import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react';

import { IconShareLINE } from '@/components/Icon/IconShareLINE';
import { IconShareX } from '@/components/Icon/IconShareX';

import { APP_URL } from '@/constant/common';

import { AppLinkType } from '@/types/common';

const APP_SHARE_LINKS: AppLinkType[] = [
  {
    text: 'LINE',
    url: `https://social-plugins.line.me/lineit/share?url=${APP_URL}`,
    icon: IconShareLINE,
  },
  {
    text: 'X',
    url: `https://twitter.com/intent/tweet?url=${APP_URL}&text=Philosophia%20-%20Photography%20Portfolio`,
    icon: IconShareX,
  },
];

const ICON_COLOR_MAP: Record<'normal' | 'footer', string> = {
  normal: '#D4D4D4',
  footer: '#464646',
};

type Props = {
  variant?: 'normal' | 'footer';
};

const ShareLink: FC<Props> = ({ variant = 'normal' }) => (
  <VStack gap="0" alignItems="center" color={ICON_COLOR_MAP[variant]}>
    <Text as="span" fontFamily="en" fontSize="1.5rem">Share</Text>
    <Flex as="ul" gap={{ base: '6px', sm: '8px' }}>
      {APP_SHARE_LINKS.map((item) => (
        <Box as="li" key={item.text}>
          <Link
            href={item.url}
            target="_blank"
            display="block"
            w={{ base: '36px', sm: '40px' }}
            h={{ base: '36px', sm: '40px' }}
          >
            <item.icon w="100%" h="100%" fill={ICON_COLOR_MAP[variant]} />
          </Link>
        </Box>
      ))}
    </Flex>
  </VStack>
);

export default ShareLink;
