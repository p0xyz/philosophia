import { useMediaQuery } from '@chakra-ui/react';
import { ReactNode, createContext, useContext } from 'react';

type WidthContextType = {
  isSP: boolean;
  isPC: boolean;
};

const context = createContext<WidthContextType | undefined>(undefined);

export const WidthProvider = ({ children }: { children: ReactNode }) => {
  const [isSP] = useMediaQuery('(max-width: 480px)');
  const [isPC] = useMediaQuery('(min-width: 881px)');

  return (
    <context.Provider children={children} value={{ isSP: isSP, isPC: isPC }} />
  );
};

export const useWidth: () => {
  isSP: boolean;
  isPC: boolean;
} = () => {
  const breakpoint: WidthContextType | undefined = useContext(context);

  if (!breakpoint) {
    throw new Error('Breakpoint not provided');
  }

  return {
    isSP: breakpoint.isSP,
    isPC: breakpoint.isPC,
  };
};
