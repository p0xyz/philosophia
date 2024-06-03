import { ComponentWithAs, IconProps } from '@chakra-ui/react';

export type AppLinkType = {
  text: string;
  url: string;
  icon: ComponentWithAs<'svg', IconProps>;
  isProjectLink?: boolean;
};

export type PageContextType = {
  type: 'photographs' | 'profile' | 'contact' | 'none';
  title: string;
  description: string;
  path: string;
  image?: string;
};
