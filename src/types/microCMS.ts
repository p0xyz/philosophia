type MicroCMSType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type MicroCMSImageType = {
  url: string;
  height: number;
  width: number;
};

export type PhotographType = MicroCMSType & {
  /** @example 2000-00-00T00:00:00.928Z */
  date: string;
  images: MicroCMSImageType[];
  /** @example Heian-jingu */
  place: string;
  /** @example Kyoto */
  prefecture: string | undefined;
  /** @example 平安神宮 */
  alt: string;
};

export type FormType = {
  via: ['philosophia000.vercel.app'];
  name: string;
  email: string;
  profession: string;
  content: string;
  isReplied: boolean;
};

export type ProfileType = {
  description: string;
};
