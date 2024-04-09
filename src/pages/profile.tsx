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

const Profile: NextPage = () => {
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
  const Description = () => (
    <Text fontSize="1.3rem" lineHeight="2.5rem">
      関西 22歳 記録用
      <br />
      Canon EOS RP / Canon EOS Kiss X3
    </Text>
  );
  const OtherLink = () => (
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
              <Box as="a" href={item.url}>
                <item.svg width={16} />
                <Text as="span">{item.text}</Text>
              </Box>
            </NextLink>
          ) : (
            <Link href={item.url} target="_blank">
              <item.svg width={16} />
              <Text as="span">{item.text}</Text>
            </Link>
          )}
        </Box>
      ))}
    </Flex>
  );
  const Icon = () => (
    <Center
      w={{ base: '240px', sm: '304px' }}
      h={{ base: '240px', sm: '304px' }}
    >
      <AdminIcon />
    </Center>
  );
  const Component = () => (
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
        gap="16px"
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
        <Description />
        <OtherLink />
      </Flex>
      <Icon />
    </Flex>
  );

  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export default Profile;
