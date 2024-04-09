import { APP_SHARE_LINKS } from '@/constant/common';
import { Box, Flex, Link } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  variant?: 'normal' | 'footer';
};

const ICON_COLOR_MAP: Record<'normal' | 'footer', string> = {
  normal: '#D4D4D4',
  footer: '#464646',
};

const ShareLink: FC<Props> = ({ variant = 'normal' }) => (
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
          <item.svg fill={ICON_COLOR_MAP[variant]} />
        </Link>
      </Box>
    ))}
  </Flex>
);

export default ShareLink;
