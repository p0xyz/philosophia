import { FC } from 'react';
import Head from 'next/head';

import {
  APP_URL,
  PATH_39,
  PATH_ABOUT,
  PATH_CONTACT,
  PATH_NOTFOUND,
  APP_OGP,
  APP_TITLE_FULL,
  APP_MAIN_IMAGE,
} from '@/constant/data';

import { AppPathType } from '@/types/link';

type Props = {
  path: AppPathType | string;
};

const HeadOgp: FC<Props> = ({ path }) => {
  return (
    <Head>
      {(path === 2022 ||
        path === 2021 ||
        path === 2020 ||
        path === 2019 ||
        path === 2018) && (
        <>
          <title>{`${path}｜${APP_TITLE_FULL}`}</title>
          <meta property="og:title" content={`${path}｜${APP_TITLE_FULL}`} />
          <meta
            property="og:description"
            content="月波の写真ポートフォリオです。"
          />
        </>
      )}
      {path === (PATH_ABOUT || PATH_CONTACT || PATH_NOTFOUND) && (
        <>
          <title>{`${APP_OGP[path].title}｜${APP_TITLE_FULL}`}</title>
          <meta property="og:title" content={APP_TITLE_FULL} />
          <meta property="og:description" content={APP_OGP[path].description} />
        </>
      )}
      {path === PATH_39 && (
        <>
          <title>{`お問い合わせ完了｜${APP_TITLE_FULL}`}</title>
          <meta property="og:title" content={APP_TITLE_FULL} />
          <meta
            property="og:description"
            content="月波へのお問い合わせフォームです。"
          />
        </>
      )}
      <meta property="og:url" content={`${APP_URL}/${path}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={APP_TITLE_FULL} />
      <meta property="og:image" content={APP_MAIN_IMAGE} />
      <meta name="twitter:card" content="summary" />
    </Head>
  );
};

export default HeadOgp;
