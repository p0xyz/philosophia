import { FC } from 'react';
import { Text } from '@chakra-ui/react';

import { APP_NAME_FURIGANA } from '@/constant/app';

type Props = {
  isFoot?: boolean;
};

const Copyright: FC<Props> = ({ isFoot }) => (
  <Text
    as="small"
    display="block"
    w="max-content"
    color={isFoot ? 'black800' : 'black300'}
    fontSize="1.2rem"
    fontFamily="nav"
    textAlign="center"
  >
    &copy; 2020-2023 {APP_NAME_FURIGANA}.
  </Text>
);
export default Copyright;
