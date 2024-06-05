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

export type DocumentsType = MicroCMSType & {
  overview: string;
  isPublicMePage: boolean;
};

export type PresentsType = MicroCMSType & {
  image: MicroCMSImageType;
};

export type OverviewType = {
  heading: string;
  list: string[];
};

export type PhotographModalPropsType = {
  images: MicroCMSImageType[];
  data?: {
    id: string;
    date: string;
    place: string;
    prefecture: string | undefined;
    alt: string;
  };
};
