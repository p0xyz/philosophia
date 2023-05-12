import { FC } from 'react';
import Head from 'next/head';
import { desc, imgPath, path, title, years } from '@/constant/data';

type Props = {
  index: number | string | undefined;
};

const HeadOgp: FC<Props> = ({ index }) => {
  return (
    <Head>
      {typeof index === 'number' && (
        <>
          <title>{years[index] + '｜' + title}</title>
          <meta property={'og:title'} content={years[index] + '｜' + title} />
          <meta property={'og:url'} content={path + years[index]} />
        </>
      )}
      {typeof index === 'string' && (
        <>
          <title>{title}</title>
          <meta property={'og:title'} content={title + '｜' + desc} />
          <meta property={'og:url'} content={path} />
        </>
      )}
      {typeof index === 'undefined' && (
        <>
          <title>{404 + '｜' + title}</title>
          <meta property={'og:title'} content={404 + '｜' + title} />
          <meta property={'og:url'} content={path + 404} />
        </>
      )}
      <meta
        property={'og:description'}
        content={'月波の写真ポートフォリオです。'}
      />
      {/* ページの種類 */}
      <meta property={'og:type'} content={'website'} />
      {/* サイト名 */}
      <meta property={'og:site_name'} content={title + '｜' + desc} />
      {/* サムネイル画像の URL */}
      <meta property={'og:image'} content={imgPath + 'img_032_06.jpg'} />
      <meta name={'twitter:card'} content={'summary'} />
    </Head>
  );
};

export default HeadOgp;
