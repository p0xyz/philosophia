import { PhotographType } from '@/types/microCMS';

/**
 * @param str "2001-01-23T15:00:00.000Z"
 * @returns 2001/1/23
 */
export const formatDate = (str: string) => {
  return new Date(str).toLocaleDateString('ja-JP', { timeZone: 'Asia/Tokyo' });
};

export const formatModalPageTitle = (data: PhotographType) => {
  const dateSplitWithSlash = formatDate(data.date).split('/');
  const splitDateWithYearAndMonth = `${dateSplitWithSlash[0]}.${dateSplitWithSlash[1]}`;

  return `${data.alt} (${splitDateWithYearAndMonth})`;
};
