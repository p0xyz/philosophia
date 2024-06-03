import { PhotographType } from '@/types/microCMS';

export const filteredPhotographsByYear = (
  data: PhotographType[],
  year: number
) =>
  data.filter((item) => {
    const reg = new RegExp('^' + year);
    const str = new Date(item.date).toLocaleDateString('ja-JP', {
      timeZone: 'Asia/Tokyo',
    });

    return !!str.match(reg);
  });
