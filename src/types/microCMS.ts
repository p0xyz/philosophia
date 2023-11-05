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

export type MicroCMSArticleType = MicroCMSType & {
  contentId: string;
  date: string;
  images: MicroCMSImageType[];
  place: string;
  prefecture: string | undefined;
  alt: string;
};

export type MicroCMSFormType = {
  via: ['philosophia000.vercel.app'];
  name: string;
  email: string;
  profession: string;
  content: string;
  isReplyed: boolean;
};
