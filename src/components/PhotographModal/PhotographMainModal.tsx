import { FC } from 'react';
import PhotographModalBase from '@/components/PhotographModal/PhotographModalBase';
import { PhotographType } from '@/types/microCMS';

type Props = {
  photograph: PhotographType;
  isOpen: boolean;
  onClose: () => void;
};

const PhotographMainModal: FC<Props> = ({ photograph, isOpen, onClose }) => {
  const { images, id, date, place, prefecture, alt } = photograph;

  return (
    <PhotographModalBase
      photograph={{
        images: images,
        data: {
          id,
          date,
          place,
          prefecture,
          alt,
        },
      }}
      isOpen={isOpen}
      onClose={onClose}
    />
  );
};

export default PhotographMainModal;
