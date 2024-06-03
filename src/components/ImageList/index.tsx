import { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import ImageListContents from '@/components/ImageList/ImageListContents';
import ImageListYear from '@/components/ImageList/ImageListYear';
import { PhotographType } from '@/types/microCMS';

type Props = {
  data: PhotographType[];
  year: number;
  onOpenModal: (id: string) => void;
};

const ImageList: FC<Props> = ({ data, year, onOpenModal }) => (
  <Flex flexDir="column" gap={['16px', '32px']}>
    <ImageListYear year={year} />
    <ImageListContents data={data} onOpenModal={onOpenModal} />
  </Flex>
);

export default ImageList;
