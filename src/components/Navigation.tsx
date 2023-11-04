import { FC, useEffect, useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  Center,
  Flex,
  Heading,
  Spacer,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';

import { APP_PAGE_YEARS } from '@/constant/app';
import { PATH_ABOUT } from '@/constant/path';
import { Z_INDEX_NAVIGATION } from '@/constant/style';

import ShareLink from '@/components/ShareLink';
import Copyright from '@/components/Copyright';
import AdminIcon from '@/components/AdminIcon';

import { AppPathType } from '@/types/link';

type Props = {
  path: AppPathType | undefined;
};

const Navigation: FC<Props> = ({ path }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLargerThan721] = useMediaQuery('(min-width: 721px)');
  const [isSmallerThan720] = useMediaQuery('(max-width: 720px)');

  const openFuncFalse = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    router.events.on('routeChangeStart', openFuncFalse);
    window.addEventListener('beforeunload', openFuncFalse);
    return () => {
      router.events.off('routeChangeStart', openFuncFalse);
      window.removeEventListener('beforeunload', openFuncFalse);
    };
  }, []);

  const modalOpen = () => {
    setIsOpen(!isOpen);
  };

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
      <NextLink passHref href={`/${APP_PAGE_YEARS[0]}`}>
        <Text
          as="a"
          sx={{
            opacity: 1,
            transition: 'opacity 0.2s, color 0.2s',
            ...(isOpen && {
              color: 'white',
            }),
            '&:hover': {
              opacity: 0.5,
            },
          }}
        >
          Philosophia
        </Text>
      </NextLink>
    </Heading>
  );
  const NavigationLink = () => (
    <Flex
      as="ul"
      sx={{
        ...(isLargerThan721
          ? {
              gap: '8px',
              alignItems: 'center',
              fontSize: '1.7rem',
            }
          : {
              flexDirection: 'column',
            }),
      }}
    >
      {APP_PAGE_YEARS.map((item, i) => (
        <Center
          as="li"
          key={item}
          alignItems="stretch"
          sx={{
            ...(isLargerThan721
              ? {
                  width: '80px',
                  height: '32px',
                  position: 'relative',
                }
              : {
                  justifyContent: 'flex-start',
                  color: 'white',
                  h: '56px',
                  opacity: 1,
                  transition: 'opacity 0.2s',
                  '&::hover': {
                    opacity: 0.6,
                  },
                }),
          }}
        >
          <NextLink passHref href={`/${item}`}>
            <Center
              as="a"
              sx={{
                ...(isLargerThan721
                  ? {
                      w: '100%',
                      background: 'transparent',
                      transition: 'color 0.2s, background 0.2s',
                      ...(path === item && {
                        color: 'white',
                        background: 'black800',
                      }),
                      '&:hover': {
                        color: 'white',
                        background: 'black800',
                      },
                    }
                  : {
                      color: 'black300',
                      ...(path === item && {
                        '&::after': {
                          content: '""',
                          display: 'block',
                          background: 'black300',
                          width: '12px',
                          height: '12px',
                          ml: '16px',
                          borderRadius: '9999px',
                        },
                      }),
                    }),
              }}
            >
              {item}
            </Center>
          </NextLink>
        </Center>
      ))}
    </Flex>
  );
  const AboutLink = () => (
    <NextLink passHref href={`/${PATH_ABOUT}`}>
      <Text
        as="a"
        sx={{
          ...(isLargerThan721
            ? {
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                borderColor: 'transparent',
                borderStyle: 'solid',
                borderWidth: '4px',
                opacity: '1',
                overflow: 'hidden',
                transition: '0.2s opacity, 0.2s border-color',
                ...(path === PATH_ABOUT && {
                  borderColor: 'black800',
                  borderStyle: 'solid',
                  borderWidth: '4px',
                }),
                '&:hover': {
                  opacity: 0.6,
                  borderColor: 'black800',
                },
              }
            : {
                display: 'flex',
                alignItems: 'center',
                h: '56px',
                color: 'black300',
                ...(path === PATH_ABOUT && {
                  '&::after': {
                    content: '""',
                    display: 'block',
                    background: 'black300',
                    width: '12px',
                    height: '12px',
                    ml: '16px',
                    borderRadius: '9999px',
                  },
                }),
              }),
        }}
      >
        {isLargerThan721 ? <AdminIcon /> : <>About</>}
      </Text>
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
        fontFamily={{ base: 'logo', md: 'nav' }}
        sx={{
          ...(isLargerThan721
            ? {
                gap: '24px',
                alignItems: 'center',
                fontSize: '1.7rem',
              }
            : {
                flexDirection: 'column',
                width: '100vw',
                height: '100vh',
                background: 'black900',
                fontSize: '2.2rem',
                position: 'fixed',
                inset: '0 0 0 0',
                p: '160px 5vw 0',
                transition: 'transform 0.2s',
                transform: 'translateX(100%)',
                ...(isOpen && {
                  opacity: 1,
                  transform: 'translateX(0)',
                }),
              }),
        }}
      >
        <NavigationLink />
        <AboutLink />
        {isSmallerThan720 && (
          <Center flexDir="column" gap="16px" w="100%" mt="24px">
            <ShareLink />
            <Copyright />
          </Center>
        )}
      </Flex>
      {isSmallerThan720 && (
        <Center
          as="button"
          onClick={() => modalOpen()}
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
              background: 'black800',
              mb: '8px',
              transition: 'background 0.2s',
              ...(isOpen && {
                background: 'white',
              }),
            },
            '&::after': {
              content: '""',
              display: 'block',
              width: '32px',
              height: '2px',
              background: 'black800',
              transition: 'background 0.2s',
              ...(isOpen && {
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
