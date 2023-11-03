import { APP_SHARE_LINKS } from '@/constant/app';
import { Box, Flex, Image, Link } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  isFoot?: boolean;
};

const ShareLink: FC<Props> = ({ isFoot }) => (
  <Flex as="ul" gap="8px">
    {APP_SHARE_LINKS.map((item) => (
      <Box as="li" key={item.text}>
        <Link href={item.url} target="_blank" display="block" w="40px" h="40px">
          <Image
            src={isFoot ? item.svg.black : item.svg.white}
            alt={item.text}
          />
        </Link>
      </Box>
    ))}
  </Flex>
);

export default ShareLink;
