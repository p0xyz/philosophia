type MicroCMSObjectType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type YearType = MicroCMSObjectType & {
  year: number;
};

export type ImgType = MicroCMSObjectType & {
  contentId: string;
  year: YearType[];
  img: number;
  date: string;
  place: string;
  prefecture: string | undefined;
  alt: string;
};
