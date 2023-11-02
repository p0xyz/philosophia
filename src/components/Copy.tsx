import { FC } from 'react';
import { Text } from '@chakra-ui/react';

import { furigana } from '@/constant/data';

type Props = {
  isFoot?: boolean;
};

const Copy: FC<Props> = ({ isFoot }) => (
  <Text
    as="small"
    display="block"
    w="max-content"
    color={isFoot ? 'black800' : 'black300'}
    fontSize="1.2rem"
    fontFamily="nav"
    textAlign="center"
  >
    &copy; 2020-2023 {furigana}.
  </Text>
);
export default Copy;
