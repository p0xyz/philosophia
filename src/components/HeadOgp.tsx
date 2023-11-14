import { FC } from 'react';
import Head from 'next/head';

import {
  APP_URL,
  APP_OGP,
  APP_TITLE_FULL,
  APP_MAIN_IMAGE,
  APP_DESCRIPTION,
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
          <meta
            property="og:title"
            content={`${APP_OGP[path].title}｜${APP_TITLE_FULL}`}
          />
          <meta property="og:description" content={APP_OGP[path].description} />
          <meta property="og:url" content={`${APP_URL}${path}`} />
        </>
      ) : (
        <>
          <title>{`404｜${APP_TITLE_FULL}`}</title>
          <meta property="og:title" content={`404｜${APP_TITLE_FULL}`} />
          <meta property="og:description" content={APP_DESCRIPTION} />
          <meta property="og:url" content={`${APP_URL}404`} />
        </>
      )}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={APP_TITLE_FULL} />
      <meta property="og:image" content={APP_MAIN_IMAGE} />
      <meta name="twitter:card" content="summary" />
      <link rel="manifest" href="/manifest.json"/>
      <link
        rel="apple-touch-icon"
        type="image/png"
        href="/apple-touch-icon-180x180.png"
      />
      <link rel="icon" type="image/png" href="/icon-192x192.png" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poiret+One&family=Montserrat&family=League+Spartan:wght@300;600&display=swap"
        rel="stylesheet"
      />
      <meta name="theme-color" content="#fff" />
    </Head>
  );
};

export default HeadOgp;
