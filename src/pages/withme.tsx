import Layout from '@/components/Layout';
import TextPageLayout from '@/components/TextPageLayout';
import { APP_DESCRIPTION } from '@/constant/common';
import { useSetPageContext } from '@/contexts/usePageContext';
import { Flex, Heading } from '@chakra-ui/react';
import { FC } from 'react';

const WITH_ME_DESCRIPTIONS = [
  {
    heading: '@p0_xyzについて',
    list: [
      '関西在住 女 20代',
      '土日祝のみ動けます',
      'ポトレはめちゃくちゃ初心者です。ゆるゆるまったり歩きながら撮りたいです。',
    ],
  },
  {
    heading: '撮影場所',
    list: [
      '関西（大阪、京都、奈良、滋賀、神戸）近郊であればどこでもいきます',
      '周囲の方のご迷惑になる場所での撮影は苦手です（人通りの多い細路地など…）',
    ],
  },
  {
    heading: '金銭のやりとり',
    list: [
      '基本相互無償',
      'かかった費用（入場料、飲食代等）は各々負担',
      '衣装のご用意や衣装代並びにクリーニング代のお渡しはいたしかねます',
    ],
  },
  {
    heading: 'データの受け渡し',
    list: [
      '撮影後2週間以内にレタッチ済データをGigafile便にてお渡し',
      '1日歩いてだいたい20〜40枚ほどお渡しできます',
      '原画のお渡しできません（ひどいので…）',
    ],
  },
  {
    heading: 'データのその後',
    list: [
      '誰かが不快になる内容でなければどんな場面でもお使いくださって構いません',
      'お渡ししたデータはこちらでもポートフォリオへの掲載およびInstagramへの投稿をいたします',
    ],
  },
  {
    heading: 'その他',
    list: ['ご不明点等あればお気軽にお問い合わせください。'],
  },
];

const WithMe: FC = () => {
  useSetPageContext({
    type: 'none',
    title: '撮影時のあれこれ',
    description: APP_DESCRIPTION,
    path: '/withme',
  });

  return (
    <Layout>
      <TextPageLayout
        title="撮影時のあれこれ"
        description="関西近郊でポトレを撮らせていただける方がいらっしゃれば是非 Ig: @p0_xyz までご連絡ください。"
      >
        {WITH_ME_DESCRIPTIONS.map(({ heading, list }) => (
          <Flex key={heading} flexDir="column" gap="24px">
            <Heading as="h3">{heading}</Heading>
            <Flex as="ul" flexDir="column" gap="8px">
              {list.map((item) => (
                <Flex
                  key={item}
                  as="li"
                  alignItems="center"
                  gap="8px"
                  pl="8px"
                  flex="none"
                  lineHeight="2.4rem"
                  sx={{
                    '&::before': {
                      content: '""',
                      display: 'block',
                      boxSize: '6px',
                      bg: 'base.400',
                      rounded: 'full',
                      flex: "none",
                    },
                  }}
                >
                  {item}
                </Flex>
              ))}
            </Flex>
          </Flex>
        ))}
      </TextPageLayout>
    </Layout>
  );
};

export default WithMe;
