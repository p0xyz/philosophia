import { FC, SVGProps } from 'react';

export type AppLinkType = {
  text: string;
  url: string;
  svg: FC<SVGProps<SVGElement>>;
  isProjectLink?: boolean;
};

export type PageContextType = {
  type: 'photographs' | 'profile' | 'contact' | 'none';
  title: string;
  description: string;
  path: string;
};
