import { APP_TITLE } from '@/constant/app';
import { Image } from '@chakra-ui/react';
import { FC } from 'react';

const AdminIcon: FC = () => (
  <Image
    src="/images/icon.jpg"
    alt={APP_TITLE}
    w="100%"
    h="100%"
    objectFit="cover"
  />
);

export default AdminIcon;
