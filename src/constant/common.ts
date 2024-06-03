import { AppLinkType } from '@/types/common';

import { IconContact } from '@/components/Icon/IconContact';

export const APP_OLDEST_YEAR = 2017;
export const APP_LATEST_YEAR = 2024;
export const APP_PAGE_YEARS = [...Array(APP_LATEST_YEAR + 1 - APP_OLDEST_YEAR)]
  .map((_r, i) => String(APP_OLDEST_YEAR + i))
  .reverse();

export const APP_URL: string = 'https://philosophia000.vercel.app/';
export const APP_MAIN_IMAGE: string =
  'https://images.microcms-assets.io/assets/44cafac7c3a24046bac46a486b20bc92/bc3aeaeb87ac43618e951411a44262b5/20220921_01_08.jpg';

export const APP_NAME: string = '弥';
export const APP_NAME_FURIGANA: string = 'Amane';

export const APP_TITLE: string = 'Philosophia';
// export const APP_TITLE_SUB: string = `${APP_NAME}’s Photography Portfolio`;
export const APP_TITLE_FULL = `${APP_TITLE} - Photography portfolio`;
export const APP_DESCRIPTION = `${APP_TITLE}は、写真ポートフォリオです。`;

export const APP_FOOTER_TEXT =
  '関西圏をカメラと共に歩き回っている者です。\nなにかありましたら Ig: @p0_xyz までご連絡ください。';

export const APP_REGULATION_EMAIL = /[\w\-._]+@[\w\-._]+\.[A-Za-z]+/;

export const IMAGE_WATERMARK_FOR_MOBILE =
  '&txt=@p0_xyz&txt-align=top,right&txt-size=32&txt-color=ffffff&txt-pad=20&txt-font=serif';

export const IMAGE_WATERMARK_FOR_PC =
  '&txt=@p0_xyz&txt-align=top,right&txt-size=54&txt-color=ffffff&txt-pad=20&txt-font=serif';

export const APP_OTHER_LINKS: AppLinkType[] = [
  {
    text: 'Contact',
    url: 'mailto:p0_xyz@yahoo.co.jp',
    icon: IconContact,
    isProjectLink: false,
  },
];
