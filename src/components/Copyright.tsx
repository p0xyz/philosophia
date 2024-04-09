import { FC } from 'react';
import { Text } from '@chakra-ui/react';

import { APP_TITLE } from '@/constant/common';

type Props = {
  variant?: 'normal' | 'footer';
};

const TEXT_COLOR_MAP: Record<'normal' | 'footer', string> = {
  normal: 'base.300',
  footer: 'base.800',
};

const Copyright: FC<Props> = ({ variant = 'normal' }) => (
  <Text
    as="small"
    display="block"
    w="max-content"
    color={TEXT_COLOR_MAP[variant]}
    fontSize="1.2rem"
    fontFamily="en"
    textAlign="center"
  >
    &copy; 2020-2024 {APP_TITLE}
  </Text>
);
export default Copyright;
