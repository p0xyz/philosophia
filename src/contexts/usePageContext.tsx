import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from 'react';
import { PageContextType } from '@/types/common';

// eslint-disable-next-line react-refresh/only-export-components
const getterContext = createContext<PageContextType | undefined>(undefined);
const setterContext = createContext<
  React.Dispatch<React.SetStateAction<PageContextType | undefined>>
>(() => void 0);

// eslint-disable-next-line react-refresh/only-export-components
export const usePageContext = () => {
  return useContext(getterContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSetPageContext = (context: PageContextType) => {
  const setter = useContext(setterContext);

  useLayoutEffect(() => {
    setter((prev) =>
      JSON.stringify(prev) !== JSON.stringify(context) ? context : prev
    );
  });
};

export const OGPProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [context, setContext] = useState<PageContextType>();

  return (
    <getterContext.Provider value={context}>
      <setterContext.Provider value={setContext}>
        {children}
      </setterContext.Provider>
    </getterContext.Provider>
  );
};
