import { Box, Center, Flex, Link, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import NextLink from 'next/link';

import Layout from '@/components/Layout';
import AdminIcon from '@/components/AdminIcon';

import {
  APP_DESCRIPTION,
  APP_NAME,
  APP_NAME_FURIGANA,
  APP_OTHER_LINKS,
} from '@/constant/common';

import { useSetPageContext } from '@/contexts/usePageContext';

import { client } from '@/libs/client';

import { ProfileType } from '@/types/microCMS';

type Props = {
  profile: ProfileType;
};

const Profile: NextPage<Props> = ({ profile }) => {
  useSetPageContext({
    type: 'profile',
    title: 'Profile',
    description: APP_DESCRIPTION,
    path: '/profile',
  });

  const Name = () => (
    <Box>
      <Text fontFamily="en" fontSize="1.6rem">
        All photo by
      </Text>
      <Text
        as="span"
        fontSize={{ base: '2rem', sm: '2.2rem' }}
        fontWeight="bold"
      >
        {`${APP_NAME} / ${APP_NAME_FURIGANA}`}
      </Text>
    </Box>
  );

  const Links = () => (
    <Flex as="ul" flexDir="column" gap="8px">
      {APP_OTHER_LINKS.map((item) => (
        <Box
          as="li"
          key={item.url}
          sx={{
            a: {
              display: 'flex',
              gap: '6px',
              w: 'fit-content',
              opacity: 1,
              transition: '0.2s opacity',
              '&:hover': {
                opacity: 0.5,
              },
            },
            span: {
              fontSize: '1.6rem',
              fontFamily: 'en',
            },
          }}
        >
          {item.isProjectLink ? (
            <NextLink href={item.url} passHref>
              <Box
                as="a"
                href={item.url}
                display="flex"
                alignItems="center"
                h="16px"
              >
                <item.icon width="16px" h="16px" />
                <Text as="span" display="flex" alignItems="center" h="16px">
                  {item.text}
                </Text>
              </Box>
            </NextLink>
          ) : (
            <Link href={item.url} target="_blank">
              <item.icon width="16px" h="16px" />
              <Text as="span">{item.text}</Text>
            </Link>
          )}
        </Box>
      ))}
    </Flex>
  );

  return (
    <Layout>
      <Flex
        sx={{
          '@media screen and (min-width: 801px)': {
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '80vw',
            maxWidth: '800px',
            minHeight: '55vh',
            margin: '0 auto',
          },
          '@media screen and (max-width: 800px)': {
            flexWrap: 'wrap',
            justifyContent: 'center',
          },
        }}
      >
        <Flex
          flexDir="column"
          gap="24px"
          sx={{
            '@media screen and (max-width: 800px)': {
              margin: '40px 0 0',
              order: 2,
              width: '100vw',
              padding: '0 10%',
            },
          }}
        >
          {/* <Name /> */}
          <Text fontSize="1.3rem" lineHeight="2.5rem" whiteSpace="pre-line">
            {profile.description}
          </Text>
          {/* <Links/> */}
        </Flex>
        <Center
          w={{ base: '240px', sm: '304px' }}
          h={{ base: '240px', sm: '304px' }}
        >
          <AdminIcon />
        </Center>
      </Flex>
    </Layout>
  );
};

export default Profile;

export const getStaticProps = async () => {
  const microCMSReturnData = await client.get({
    endpoint: 'profile',
  });

  return {
    props: {
      profile: microCMSReturnData,
    },
  };
};
