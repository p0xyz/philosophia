import { FC } from 'react';

import { Heading } from '@chakra-ui/react';

type Props = {
  year: number;
};

const ImageListYear: FC<Props> = ({ year }) => (
  <Heading as="h2" p="0 5vw" fontFamily="en" fontWeight="normal">
    {year}
  </Heading>
);

export default ImageListYear;
