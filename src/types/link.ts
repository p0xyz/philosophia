import {
  PATH_ABOUT,
  PATH_CONTACT,
  PATH_39,
  PATH_NOTFOUND,
} from '@/constant/data';

export type AppLinkType = {
  text: string;
  url: string;
  svg: string;
};

export type AppPathYearType = 2022 | 2021 | 2020 | 2019 | 2018;

export type AppPathExcludeYearType =
  | typeof PATH_ABOUT
  | typeof PATH_CONTACT
  | typeof PATH_39
  | typeof PATH_NOTFOUND;

export type AppPathType =
  | 2022
  | 2021
  | 2020
  | 2019
  | 2018
  | typeof PATH_ABOUT
  | typeof PATH_CONTACT
  | typeof PATH_39
  | typeof PATH_NOTFOUND;
// export type AppPathType = AppPathYearType & AppPathExcludeYearType;
