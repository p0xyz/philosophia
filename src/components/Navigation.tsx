import { FC, useEffect, useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  Box,
  Center,
  Flex,
  Heading,
  Spacer,
  Text,
} from '@chakra-ui/react';

import { APP_LATEST_YEAR, APP_PAGE_YEARS, APP_TITLE } from '@/constant/common';
import { Z_INDEX_NAVIGATION } from '@/constant/style';

import ShareLink from '@/components/ShareLink';
import Copyright from '@/components/Copyright';
import AdminIcon from '@/components/AdminIcon';

import { useWidth } from '@/contexts/useWidth';
import { usePageContext } from '@/contexts/usePageContext';

const Navigation: FC = () => {
  const router = useRouter();
  const { isMdSP } = useWidth();
  const pageContext = usePageContext();

  const [isOpenNavigationDrawer, setIsOpenNavigationDrawer] =
    useState<boolean>(false);

  useEffect(() => {
    router.events.on('routeChangeStart', () =>
      setIsOpenNavigationDrawer(false)
    );
    window.addEventListener('beforeunload', () =>
      setIsOpenNavigationDrawer(false)
    );
    return () => {
      router.events.off('routeChangeStart', () =>
        setIsOpenNavigationDrawer(false)
      );
      window.removeEventListener('beforeunload', () =>
        setIsOpenNavigationDrawer(false)
      );
    };
  }, []);

  const Header = () => (
    <Heading
      as="h1"
      display="flex"
      alignItems="center"
      height="100%"
      fontSize="3.2rem"
      fontWeight="normal"
      fontFamily="logo"
      zIndex={Z_INDEX_NAVIGATION}
    >
      <NextLink passHref href="/">
        <Text
          as="a"
          sx={{
            opacity: 1,
            transition: 'opacity 0.2s, color 0.2s',
            ...(isOpenNavigationDrawer && {
              color: 'white',
            }),
            '&:hover': {
              opacity: 0.5,
            },
          }}
        >
          {APP_TITLE}
        </Text>
      </NextLink>
    </Heading>
  );
  const NavigationLinkForPC = () => (
    <Box
      pos="relative"
      _hover={{
        '>div': {
          color: 'white',
          bg: 'base.800',
        },
        '>ul': {
          opacity: 1,
          pointerEvents: 'auto',
        },
      }}
    >
      <Center
        w="120px"
        h="40px"
        color="base.800"
        bg="white"
        transition="color 0.3s, background 0.3s"
      >
        Archive
      </Center>
      <Flex
        as="ul"
        flexDir="column"
        alignItems="center"
        fontSize="1.7rem"
        transition="opacity 0.3s"
        opacity={0}
        pos="absolute"
        inset="40px auto auto auto"
        pointerEvents="none"
      >
        {APP_PAGE_YEARS.map((year) => (
          <Center
            as="li"
            key={year}
            alignItems="stretch"
            width="120px"
            height="40px"
            position="relative"
            mt={0}
          >
            <NextLink
              passHref
              href={`/${year === String(APP_LATEST_YEAR) ? '' : year}`}
            >
              <Center
                as="a"
                w="100%"
                background="transparent"
                transition="color 0.1s, background 0.1s"
                sx={{
                  ...((!pageContext?.title.length &&
                    year === String(APP_LATEST_YEAR)) ||
                  pageContext?.title === year
                    ? {
                        color: 'white',
                        background: 'base.800',
                      }
                    : {
                        color: 'base.800',
                        background: 'rgba(255, 255, 255, 0.9)',
                      }),
                  '&:hover': {
                    color: 'white',
                    background: 'base.800',
                  },
                }}
              >
                <Text as="span" display="flex" w="fit-content">
                  {year}
                </Text>
              </Center>
            </NextLink>
          </Center>
        ))}
      </Flex>
    </Box>
  );
  const NavigationLinkForSP = () => (
    <Flex as="ul" flexDir="column" flexWrap="wrap" w="100%" h="calc(56px * 4)">
      {APP_PAGE_YEARS.map((year) => (
        <Center
          as="li"
          key={year}
          alignItems="stretch"
          justifyContent="flex-start"
          color="white"
          w="50%"
          h="56px"
          opacity={1}
          transition="opacity 0.2s"
          _hover={{
            opacity: 0.6,
          }}
        >
          <NextLink
            passHref
            href={`/${year === String(APP_LATEST_YEAR) ? '' : year}`}
          >
            <Center
              as="a"
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              w="100%"
              color="base.300"
            >
              <Text
                as="span"
                display="flex"
                w="fit-content"
                sx={{
                  ...(((!pageContext?.title.length &&
                    year === String(APP_LATEST_YEAR)) ||
                    pageContext?.title === year) && {
                    '&::after': {
                      content: '""',
                      display: 'block',
                      background: 'base.300',
                      width: '12px',
                      height: '12px',
                      m: 'auto 0 auto 16px',
                      borderRadius: '9999px',
                    },
                  }),
                }}
              >
                {year}
              </Text>
            </Center>
          </NextLink>
        </Center>
      ))}
    </Flex>
  );
  const ProfileLink = () => (
    <NextLink passHref href="/profile">
      <Text
        as="a"
        sx={{
          ...(isMdSP
            ? {
                display: 'flex',
                alignItems: 'center',
                w: '100%',
                h: '56px',
                color: 'base.300',
                mt: '16px',
                ...(pageContext?.path === '/profile' && {
                  '&::after': {
                    content: '""',
                    display: 'block',
                    background: 'base.300',
                    width: '12px',
                    height: '12px',
                    ml: '16px',
                    borderRadius: '9999px',
                  },
                }),
              }
            : {
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                borderColor: 'transparent',
                borderStyle: 'solid',
                borderWidth: '4px',
                opacity: '1',
                overflow: 'hidden',
                transition: '0.3s opacity, 0.3s border-color',
                ...(pageContext?.path === '/profile' && {
                  borderColor: 'base.800',
                  borderStyle: 'solid',
                  borderWidth: '4px',
                }),
                '&:hover': {
                  opacity: 0.6,
                  borderColor: 'base.800',
                },
              }),
        }}
      >
        {isMdSP ? <>Profile</> : <AdminIcon />}
      </Text>
    </NextLink>
  );
  const ContactLink = () => (
    <NextLink passHref href="/contact">
      <Flex
        as="a"
        display="flex"
        alignItems="center"
        h="56px"
        color="base.300"
        sx={{
          ...(pageContext?.path.startsWith('/contact') && {
            '&::after': {
              content: '""',
              display: 'block',
              background: 'base.300',
              width: '12px',
              height: '12px',
              ml: '16px',
              borderRadius: '9999px',
            },
          }),
        }}
      >
        Contact
      </Flex>
    </NextLink>
  );

  return (
    <Flex
      alignItems="center"
      w="100vw"
      h="160px"
      p="0 5vw"
      background="rgba(255, 255, 255, 0.8)"
      pos="fixed"
      top="0"
      zIndex={Z_INDEX_NAVIGATION}
    >
      <Header />
      <Spacer />
      <Flex
        fontFamily={{ base: 'logo', md: 'en' }}
        sx={{
          ...(isMdSP
            ? {
                flexDirection: 'column',
                width: '100vw',
                minHeight: '100dvh',
                background: 'base.900',
                fontSize: '2.2rem',
                position: 'fixed',
                inset: '0 0 0 0',
                p: '160px 5vw 0',
                transition: 'transform 0.2s',
                transform: 'translateX(100%)',
                ...(isOpenNavigationDrawer && {
                  opacity: 1,
                  transform: 'translateX(0)',
                }),
              }
            : {
                gap: '24px',
                alignItems: 'center',
                fontSize: '1.7rem',
              }),
        }}
      >
        {isMdSP ? <NavigationLinkForSP /> : <NavigationLinkForPC />}
        <ProfileLink />
        {isMdSP && (
          <Center flexDir="column" gap="16px" w="100%" mt="40px">
            <ShareLink />
            <Copyright />
          </Center>
        )}
      </Flex>
      {isMdSP && (
        <Center
          as="button"
          onClick={() => setIsOpenNavigationDrawer(!isOpenNavigationDrawer)}
          flexDir="column"
          width="32px"
          height="32px"
          zIndex={Z_INDEX_NAVIGATION}
          sx={{
            '&::before': {
              content: '""',
              display: 'block',
              width: '32px',
              height: '2px',
              background: 'base.800',
              mb: '8px',
              transition: 'background 0.2s',
              ...(isOpenNavigationDrawer && {
                background: 'white',
              }),
            },
            '&::after': {
              content: '""',
              display: 'block',
              width: '32px',
              height: '2px',
              background: 'base.800',
              transition: 'background 0.2s',
              ...(isOpenNavigationDrawer && {
                background: 'white',
              }),
            },
          }}
        />
      )}
    </Flex>
  );
};

export default Navigation;
