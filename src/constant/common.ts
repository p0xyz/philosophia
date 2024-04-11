import { AppLinkType } from '@/types/common';

import { IconContact } from '@/components/Icon/IconContact';

export const APP_OLDEST_YEAR = 2017;
export const APP_LATEST_YEAR = 2024;
export const APP_PAGE_YEARS = [...Array(APP_LATEST_YEAR + 1 - APP_OLDEST_YEAR)]
  .map((_r, i) => String(APP_OLDEST_YEAR + i))
  .reverse();

export const APP_URL: string = 'https://philosophia000.vercel.app/';
export const APP_MAIN_IMAGE: string =
  'https://images.microcms-assets.io/assets/44cafac7c3a24046bac46a486b20bc92/e90e057137b244cfb88601919d10ac59/img_032_10.jpg';

export const APP_NAME: string = '月波';
export const APP_NAME_FURIGANA: string = 'Tsukinami';

export const APP_TITLE: string = 'Philosophia';
// export const APP_TITLE_SUB: string = `${APP_NAME}’s Photography Portfolio`;
export const APP_TITLE_FULL = `${APP_TITLE} - Photography portfolio`;
export const APP_DESCRIPTION = `${APP_TITLE}は、写真ポートフォリオです。`;

export const APP_REGULATION_EMAIL = /[\w\-._]+@[\w\-._]+\.[A-Za-z]+/;

export const APP_OTHER_LINKS: AppLinkType[] = [
  {
    text: 'Contact',
    url: '/contact',
    icon: IconContact,
    isProjectLink: true,
  },
];
