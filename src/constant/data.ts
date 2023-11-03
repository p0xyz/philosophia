import {
  AppLinkType,
  AppPathExcludeYearType,
  AppPathYearType,
} from '@/types/link';

export const APP_PAGE_YEARS: AppPathYearType[] = [2022, 2021, 2020, 2019, 2018];
export const APP_URL: string = 'https://www.philosophia000.xyz/';
export const APP_MAIN_IMAGE: string =
  'https://images.microcms-assets.io/assets/44cafac7c3a24046bac46a486b20bc92/e90e057137b244cfb88601919d10ac59/img_032_10.jpg';

export const APP_TITLE: string = 'Philosophia';
export const APP_NAME: string = '月波';
export const APP_NAME_FURIGANA: string = 'Tsukinami';
export const APP_TITLE_SUB: string = '月波’s Photography Portfolio';
export const APP_TITLE_FULL = `${APP_TITLE} - ${APP_TITLE_SUB}`;

export const APP_SNS_LINKS: AppLinkType[] = [
  {
    text: '@p0.xyz',
    url: 'https://www.instagram.com/p0.xyz/',
    svg: 'instagram',
  },
];

export const APP_SHARE_LINKS: AppLinkType[] = [
  {
    text: 'LINE',
    url: 'https://social-plugins.line.me/lineit/share?url=https://www.philosophia000.xyz/',
    svg: 'line',
  },
  {
    text: 'Twitter',
    url: 'https://twitter.com/intent/tweet?url=https://www.philosophia000.xyz/&text=Philosophia%20-%20%E6%9C%88%E6%B3%A2%E2%80%99s%20Photography%20Portfolio',
    svg: 'twitter',
  },
];

export const PATH_INDEX = '/';
export const PATH_ABOUT = 'about';
export const PATH_CONTACT = 'contact';
export const PATH_39 = 'contact/39';
export const PATH_NOTFOUND = '404';

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
