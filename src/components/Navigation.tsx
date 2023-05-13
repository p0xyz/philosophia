import { FC, useEffect, useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Box, Center, Flex, Text, useMediaQuery } from '@chakra-ui/react';

import { ABOUT_PATH, name, years } from '@/constant/data';

import Sns from '@/components/Sns';
import Copy from '@/components/Copy';

type Props = {
  path: number | string | undefined;
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
    <Flex
      as={'h1'}
      justifyContent={'flex-start'}
      alignItems={'center'}
      height={'100%'}
      pos={'relative'}
      fontSize={'3.2rem'}
      fontFamily={'logo'}
      zIndex={'25'}
      sx={{
        '>a': {
          color: 'black800',
          opacity: 1,
          transition: 'opacity 0.2s, color 0.2s',
          ...(isOpen && {
            color: 'white',
          }),
          '&:hover': {
            opacity: 0.5,
          },
        },
      }}
    >
      <NextLink passHref href={`/${years[0]}`}>
        Philosophia
      </NextLink>
    </Flex>
  );
  const NavLink = () => (
    <>
      {years.map((item, i) => (
        <Center
          as={'li'}
          key={item}
          sx={{
            ...(isLargerThan721
              ? {
                  width: '80px',
                  height: '32px',
                  position: 'relative',
                  a: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    w: '100%',
                    h: '100%',
                    background: 'transparent',
                    transition: 'color 0.2s, background 0.2s',
                    ...(path === i && {
                      color: 'white',
                      background: 'black800',
                    }),
                    '&:hover': {
                      color: 'white',
                      background: 'black800',
                    },
                  },
                }
              : {
                  a: {
                    ...(typeof path === 'number' &&
                      years[path] === item && {
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
                  },
                }),
          }}
        >
          <NextLink passHref href={`/${item}`}>
            {item}
          </NextLink>
        </Center>
      ))}
    </>
  );
  const AboutLink = () => (
    <Box
      as={'li'}
      sx={{
        ...(isLargerThan721
          ? {
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              borderColor: 'transparent',
              borderStyle: 'solid',
              borderWidth: '4px',
              ml: '24px',
              opacity: '1',
              overflow: 'hidden',
              transition: '0.2s opacity, 0.2s border-color',
              ...(typeof path === 'string' && {
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
              a: {
                ...(isSmallerThan720 && {
                  display: 'flex',
                  alignItems: 'center',
                }),
                ...(typeof path === 'string' && {
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
              },
            }),
      }}
    >
      <NextLink passHref href={`/${ABOUT_PATH}`}>
        <a>
          {isLargerThan721 ? (
            <Box
              as={'img'}
              src={'/img/icon.jpg'}
              alt={name}
              w={'100%'}
              h={'100%'}
              objectFit={'cover'}
            />
          ) : (
            <>About</>
          )}
        </a>
      </NextLink>
    </Box>
  );

  return (
    <Flex
      justifyContent={'space-between'}
      alignItems={'center'}
      w={'100vw'}
      h={'160px'}
      p={'0 5vw'}
      background={'rgba(255, 255, 255, 0.8)'}
      pos={'fixed'}
      top={'0'}
      zIndex={'25'}
    >
      <Header />
      <Flex
        as={'ul'}
        alignItems={'flex-start'}
        fontFamily={{ base: 'logo', md: 'nav' }}
        zIndex={'20'}
        sx={{
          '>li>a': {
            '&:hover': {
              cursor: 'pointer',
            },
          },
          ...(isLargerThan721
            ? {
                alignItems: 'center',
                gap: '8px',
                fontSize: '1.8rem',
                margin: '0 0 0 auto',
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
                a: {
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  color: 'white',
                  h: '56px',
                  opacity: 1,
                  transition: 'opacity 0.2s',
                  '&::hover': {
                    opacity: 0.6,
                  },
                },
              }),
        }}
      >
        <NavLink />
        <AboutLink />
        {isSmallerThan720 && (
          <Center
            as={'li'}
            flexDir={'column'}
            gap={'16px'}
            w={'100%'}
            mt={'24px'}
          >
            <Sns />
            <Copy />
          </Center>
        )}
      </Flex>
      {isSmallerThan720 && (
        <Center
          as={'button'}
          onClick={() => modalOpen()}
          flexDir={'column'}
          width={'32px'}
          height={'32px'}
          zIndex={'25'}
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
