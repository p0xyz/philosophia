import { shareLinks } from '@/constant/data';
import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  isFoot?: boolean;
};

const Sns: FC<Props> = ({ isFoot }) => (
  <Flex as={'ul'} gap={'8px'}>
    {shareLinks.map((item, i) => (
      <Box as={'li'} key={item.svg + i}>
        <Box
          as={'a'}
          href={item.url}
          target={'_blank'}
          display={'block'}
          w={'40px'}
          h={'40px'}
        >
          <Box
            as={'img'}
            src={`/img/icon_${item.svg}${!isFoot ? '_white' : ''}.svg`}
          />
        </Box>
      </Box>
    ))}
  </Flex>
);

export default Sns;
