import { ReactNode, createContext, useContext, useEffect } from 'react';

export type DeviceType = 'mobile' | 'pc';

type UserAgentType = {
  userAgent: DeviceType;
};

const context = createContext<UserAgentType | undefined>(undefined);

export const UserAgentProvider = ({ children }: { children: ReactNode }) => {
  let userAgent: Navigator['userAgent'] = '';

  useEffect(() => {
    userAgent = window.navigator.userAgent;
  }, []);

  const isMobile = !!userAgent.match(/iPhone|Android.+Mobile/);

  return (
    <context.Provider
      children={children}
      value={{ userAgent: isMobile ? 'mobile' : 'pc' }}
    />
  );
};

export const useUserAgent = () => {
  const userAgent: UserAgentType | undefined = useContext(context);

  if (!userAgent) {
    throw new Error('UserAgent not provided');
  }

  return userAgent;
};
