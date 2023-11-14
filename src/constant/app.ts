import { AppLinkType, AppPathType, AppPathYearType } from '@/types/link';

import ShareIconX from '@/assets/icons/icon_share_x.svg';
import ShareIconLine from '@/assets/icons/icon_share_line.svg';
import OtherIconContact from '@/assets/icons/icon_other_contact.svg';

import { PATH_CONTACT } from '@/constant/path';

export const APP_PAGE_YEARS: AppPathYearType[] = [
  '2023',
  '2022',
  '2021',
  '2020',
  '2019',
  '2018',
];

export const APP_URL: string = 'https://philosophia000.vercel.app/';
export const APP_MAIN_IMAGE: string =
  'https://images.microcms-assets.io/assets/44cafac7c3a24046bac46a486b20bc92/e90e057137b244cfb88601919d10ac59/img_032_10.jpg';

export const APP_NAME: string = '月波';
export const APP_NAME_FURIGANA: string = 'Tsukinami';

export const APP_TITLE: string = 'Philosophia';
export const APP_TITLE_SUB: string = `${APP_NAME}’s Photography Portfolio`;
export const APP_TITLE_FULL = `${APP_TITLE} - ${APP_TITLE_SUB}`;
export const APP_DESCRIPTION = `${APP_TITLE}は、写真ポートフォリオです。`;

export const APP_REGULATION_EMAIL = /[\w\-._]+@[\w\-._]+\.[A-Za-z]+/;

export const APP_OTHER_LINKS: AppLinkType[] = [
  {
    text: 'Contact',
    url: PATH_CONTACT,
    svg: OtherIconContact,
    isProjectLink: true,
  },
];

export const APP_SHARE_LINKS: AppLinkType[] = [
  {
    text: 'LINE',
    url: `https://social-plugins.line.me/lineit/share?url=${APP_URL}`,
    svg: ShareIconLine,
  },
  {
    text: 'X',
    url: `https://twitter.com/intent/tweet?url=${APP_URL}&text=Philosophia%20-%20%E6%9C%88%E6%B3%A2%E2%80%99s%20Photography%20Portfolio`,
    svg: ShareIconX,
  },
];

export const APP_OGP: {
  [key in AppPathType]: {
    title: string;
    description: string;
  };
} = {
  2023: {
    title: '2023',
    description: APP_DESCRIPTION,
  },
  2022: {
    title: '2022',
    description: APP_DESCRIPTION,
  },
  2021: {
    title: '2021',
    description: APP_DESCRIPTION,
  },
  2020: {
    title: '2020',
    description: APP_DESCRIPTION,
  },
  2019: {
    title: '2019',
    description: APP_DESCRIPTION,
  },
  2018: {
    title: '2018',
    description: APP_DESCRIPTION,
  },
  about: {
    title: 'About',
    description: APP_DESCRIPTION,
  },
  contact: {
    title: 'お問い合わせ',
    description: `${APP_TITLE}のお問い合わせフォームです。`,
  },
  'contact/39': {
    title: 'お問い合わせ完了',
    description: `${APP_TITLE}のお問い合わせフォームです。`,
  },
};
