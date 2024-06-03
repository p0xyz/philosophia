import { Image } from '@chakra-ui/react';
import { FC } from 'react';

import { APP_TITLE } from '@/constant/common';

const ProfileIcon: FC = () => (
  <Image
    src="/images/icon.jpg"
    alt={APP_TITLE}
    w="100%"
    h="100%"
    objectFit="cover"
  />
);

export default ProfileIcon;
