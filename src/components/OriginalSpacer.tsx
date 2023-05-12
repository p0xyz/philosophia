import { Box } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  size: string;
  horizontal?: boolean;
};

const OriginalSpacer: FC<Props> = ({ size, horizontal }) => (
  <Box
    sx={{
      ...(horizontal
        ? {
            width: size,
            height: 'auto',
          }
        : {
            width: 'auto',
            height: size,
          }),
    }}
  />
);

export default OriginalSpacer;
