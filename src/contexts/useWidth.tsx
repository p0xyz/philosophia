import { useMediaQuery } from '@chakra-ui/react';
import { ReactNode, createContext, useContext } from 'react';

type WidthContextType = {
  isSP: boolean;
  isMdSP: boolean;
  isPC: boolean;
};

const context = createContext<WidthContextType | undefined>(undefined);

export const WidthProvider = ({ children }: { children: ReactNode }) => {
  const [isSP] = useMediaQuery('(max-width: 480px)');
  const [isMdSP] = useMediaQuery('(max-width: 880px)');
  const [isPC] = useMediaQuery('(min-width: 881px)');

  return (
    <context.Provider
      children={children}
      value={{ isSP: isSP, isMdSP: isMdSP, isPC: isPC }}
    />
  );
};

export const useWidth: () => WidthContextType = () => {
  const breakpoint: WidthContextType | undefined = useContext(context);

  if (!breakpoint) {
    throw new Error('Breakpoint not provided');
  }

  return {
    isSP: breakpoint.isSP,
    isMdSP: breakpoint.isMdSP,
    isPC: breakpoint.isPC,
  } as WidthContextType;
};
