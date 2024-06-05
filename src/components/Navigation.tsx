import { FC, useEffect, useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Box, Center, Flex, Heading, Spacer, Text } from '@chakra-ui/react';
import { APP_LATEST_YEAR, APP_PAGE_YEARS, APP_TITLE } from '@/constant/common';
import { Z_INDEX_NAVIGATION } from '@/constant/style';
import ShareLink from '@/components/ShareLink';
import Copyright from '@/components/Copyright';
import ProfileIcon from '@/components/ProfileIcon';
import { useWidth } from '@/contexts/useWidth';
import { usePageContext } from '@/contexts/usePageContext';
import { useUserAgent } from '@/contexts/useUserAgent';

const Navigation: FC = () => {
  const router = useRouter();
  const { isMdSP } = useWidth();
  const pageContext = usePageContext();
  const { userAgent } = useUserAgent();

  const isMobile = userAgent === 'mobile' || isMdSP;

  const [isNavigationFocus, setIsNavigationFocus] = useState(false);
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
      <Spacer />
      {isMobile ? (
        <Flex
          flexDirection="column"
          width="100vw"
          minHeight="100dvh"
          background="base.900"
          fontSize="2.2rem"
          position="fixed"
          inset="0 0 0 0"
          p="160px 5vw 0"
          fontFamily="en"
          transition="transform 0.2s"
          transform="translateX(100%)"
          sx={{
            '@media screen and (min-width: 881px)': {
              display: 'none',
            },
            ...(isOpenNavigationDrawer && {
              opacity: 1,
              transform: 'translateX(0)',
            }),
          }}
        >
          <Flex
            as="ul"
            flexDir="column"
            flexWrap="wrap"
            w="100%"
            h="calc(56px * 4)"
          >
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
          <NextLink passHref href="/profile">
            <Text
              as="a"
              display="flex"
              alignItems="center"
              w="100%"
              h="56px"
              color="base.300"
              mt="16px"
              sx={{
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
              }}
            >
              Profile
            </Text>
          </NextLink>
          <Center flexDir="column" gap="16px" w="100%" mt="40px">
            <ShareLink />
            <Copyright />
          </Center>
        </Flex>
      ) : (
        <Flex
          gap="24px"
          alignItems="center"
          fontSize="1.7rem"
          fontFamily="en"
          sx={{
            '@media screen and (max-width: 880px)': {
              display: 'none',
            },
          }}
        >
          <Box
            tabIndex={0}
            onFocus={() => setIsNavigationFocus(true)}
            onBlur={() => setIsNavigationFocus(false)}
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
            _focus={{
              '>div': {
                color: 'white',
                bg: 'base.800',
              },
              '>ul': {
                opacity: 1,
                pointerEvents: 'auto',
              },
            }}
            sx={{
              ...(isNavigationFocus && {
                '>div': {
                  color: 'white',
                  bg: 'base.800',
                },
                '>ul': {
                  opacity: 1,
                  pointerEvents: 'auto',
                },
              }),
            }}
          >
            <Center
              w="120px"
              h="48px"
              color="base.800"
              bg="transparent"
              transition="color 0.3s, background 0.3s"
            >
              Works
            </Center>
            <Flex
              as="ul"
              flexDir="column"
              alignItems="center"
              fontSize="1.7rem"
              transition="opacity 0.3s"
              opacity={0}
              pos="absolute"
              inset="48px auto auto auto"
              pointerEvents="none"
            >
              {APP_PAGE_YEARS.map((year) => (
                <Center
                  as="li"
                  key={year}
                  alignItems="stretch"
                  width="120px"
                  height="48px"
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
                        '&:focus': {
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
          <NextLink passHref href="/profile">
            <Text
              as="a"
              width="64px"
              height="64px"
              borderRadius="50%"
              borderColor="transparent"
              borderStyle="solid"
              borderWidth="4px"
              opacity="1"
              overflow="hidden"
              transition="0.3s opacity, 0.3s border-color"
              _hover={{
                opacity: 0.6,
                borderColor: 'base.800',
              }}
              sx={{
                ...(pageContext?.path === '/profile' && {
                  borderColor: 'base.800',
                  borderStyle: 'solid',
                  borderWidth: '4px',
                }),
              }}
            >
              <ProfileIcon />
            </Text>
          </NextLink>
        </Flex>
      )}
      <Center
        as="button"
        onClick={() => setIsOpenNavigationDrawer(!isOpenNavigationDrawer)}
        flexDir="column"
        width="32px"
        height="32px"
        zIndex={Z_INDEX_NAVIGATION}
        sx={{
          '@media screen and (min-width: 881px)': {
            display: 'none',
          },
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
    </Flex>
  );
};

export default Navigation;
