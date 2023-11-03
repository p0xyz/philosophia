import { AppLinkType, AppPathYearType } from '@/types/link';

import SHARE_ICON_X_BLACK from '@/assets/images/icon_share_x_black.svg';
import SHARE_ICON_X_WHITE from '@/assets/images/icon_share_x_white.svg';
import SHARE_ICON_LINE_BLACK from '@/assets/images/icon_share_line_black.svg';
import SHARE_ICON_LINE_WHITE from '@/assets/images/icon_share_line_white.svg';
import OTHER_ICON_CONTACT from '@/assets/images/icon_other_contact.svg';

import { PATH_ABOUT, PATH_CONTACT } from '@/constant/path';

export const APP_PAGE_YEARS: AppPathYearType[] = [2022, 2021, 2020, 2019, 2018];

export const APP_URL: string = 'https://philosophia000.vercel.app/';
export const APP_MAIN_IMAGE: string =
  'https://images.microcms-assets.io/assets/44cafac7c3a24046bac46a486b20bc92/e90e057137b244cfb88601919d10ac59/img_032_10.jpg';

export const APP_NAME: string = '月波';
export const APP_NAME_FURIGANA: string = 'Tsukinami';

export const APP_TITLE: string = 'Philosophia';
export const APP_TITLE_SUB: string = '月波’s Photography Portfolio';
export const APP_TITLE_FULL = `${APP_TITLE} - ${APP_TITLE_SUB}`;

export const APP_OTHER_LINKS: {
  text: string;
  url: string;
  svg: any;
}[] = [
  {
    text: 'contact',
    url: PATH_CONTACT,
    svg: OTHER_ICON_CONTACT,
  },
];

export const APP_SHARE_LINKS: AppLinkType[] = [
  {
    text: 'LINE',
    url: `https://social-plugins.line.me/lineit/share?url=${APP_URL}`,
    svg: {
      white: SHARE_ICON_LINE_WHITE,
      black: SHARE_ICON_LINE_BLACK,
    },
  },
  {
    text: 'X',
    url: `https://twitter.com/intent/tweet?url=${APP_URL}&text=Philosophia%20-%20%E6%9C%88%E6%B3%A2%E2%80%99s%20Photography%20Portfolio`,
    svg: {
      white: SHARE_ICON_X_WHITE,
      black: SHARE_ICON_X_BLACK,
    },
  },
];

export const APP_OGP: {
  [key in typeof PATH_ABOUT | typeof PATH_CONTACT]: {
    title: string;
    description: string;
  };
} = {
  about: {
    title: 'About',
    description: '月波の写真ポートフォリオです。',
  },
  contact: {
    title: 'お問い合わせ',
    description: '月波へのお問い合わせフォームです。',
  },
};
