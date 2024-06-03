import { ReactNode, createContext, useContext } from 'react';

import { NavigatorWithUserAgentDataType } from '@/types';

export type DeviceType = 'mobile' | 'pc';

type UserAgentType = {
  userAgent: DeviceType;
};

const context = createContext<UserAgentType | undefined>(undefined);

export const UserAgentProvider = ({ children }: { children: ReactNode }) => {
  const navigatorWithUserAgentData =
    navigator as NavigatorWithUserAgentDataType;

  const userAgent = navigatorWithUserAgentData.userAgent;
  const userAgentData = navigatorWithUserAgentData.userAgentData;

  const isMobile = userAgentData
    ? userAgentData?.mobile
    : !!userAgent.match(/iPhone|Android.+Mobile/);

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
