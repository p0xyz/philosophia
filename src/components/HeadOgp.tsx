import { FC } from 'react';
import Head from 'next/head';

import {
  APP_URL,
  APP_OGP,
  APP_TITLE_FULL,
  APP_MAIN_IMAGE,
} from '@/constant/app';

import { AppPathType } from '@/types/link';

type Props = {
  path: AppPathType | undefined;
};

const HeadOgp: FC<Props> = ({ path }) => {
  return (
    <Head>
      {!!path ? (
        <>
          <title>{`${APP_OGP[path].title}｜${APP_TITLE_FULL}`}</title>
          <meta property="og:title" content={APP_TITLE_FULL} />
          <meta property="og:description" content={APP_OGP[path].description} />
        </>
      ) : (
        <>
          <title>{`404｜${APP_TITLE_FULL}`}</title>
          <meta property="og:title" content={APP_TITLE_FULL} />
          <meta
            property="og:description"
            content="月波の写真ポートフォリオです。"
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
