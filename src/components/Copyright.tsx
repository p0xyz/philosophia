import { FC } from 'react';
import { Text } from '@chakra-ui/react';

import { APP_TITLE } from '@/constant/app';

type Props = {
  isFoot?: boolean;
};

const Copyright: FC<Props> = ({ isFoot }) => (
  <Text
    as="small"
    display="block"
    w="max-content"
    color={isFoot ? 'base.800' : 'base.300'}
    fontSize="1.2rem"
    fontFamily="en"
    textAlign="center"
  >
    &copy; 2020-2023 {APP_TITLE}
  </Text>
);
export default Copyright;
