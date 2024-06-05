import { FC } from 'react';
import PhotographModalBase from '@/components/PhotographModal/PhotographModalBase';
import { PhotographType, PresentsType } from '@/types/microCMS';

type Props = {
  photographs: PresentsType[];
  index:number;
  isOpen: boolean;
  onClose: () => void;
};

const PhotographSubModal: FC<Props> = ({ photographs, index,isOpen, onClose }) => (
  <PhotographModalBase
    photograph={{ images: photographs.map(({ image }) => image) }}
    index={index}
    isOpen={isOpen}
    onClose={onClose}
  />
);

export default PhotographSubModal;
