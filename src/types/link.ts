import { FC, SVGProps } from 'react';

import { PATH_ABOUT, PATH_CONTACT, PATH_CONTACT_39 } from '@/constant/path';

export type AppLinkType = {
  text: string;
  url: string;
  svg: FC<SVGProps<SVGElement>>;
  isProjectLink?: boolean;
};

export type AppPathYearType = '2022' | '2021' | '2020' | '2019' | '2018';

export type AppPathType =
  | '2022'
  | '2021'
  | '2020'
  | '2019'
  | '2018'
  | typeof PATH_ABOUT
  | typeof PATH_CONTACT
  | typeof PATH_CONTACT_39;
