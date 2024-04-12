import { FC } from 'react';
import Head from 'next/head';

import {
  APP_URL,
  APP_TITLE_FULL,
  APP_MAIN_IMAGE,
  APP_DESCRIPTION,
} from '@/constant/common';

import { usePageContext } from '@/contexts/usePageContext';

const OGP: FC = () => {
  const pageContext = usePageContext();

  const title = !!pageContext?.title.length
    ? `${pageContext.title}｜${APP_TITLE_FULL}`
    : APP_TITLE_FULL;

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={pageContext?.description ?? APP_DESCRIPTION}
      />
      <meta
        property="og:url"
        content={`${APP_URL}${pageContext?.path ?? ''}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={APP_TITLE_FULL} />
      <meta property="og:image" content={APP_MAIN_IMAGE} />
      <meta name="twitter:card" content="summary" />
    </Head>
  );
};

export default OGP;
