import { useState } from 'react';
import { NextPage } from 'next';
import { Box, Center, Flex, Image, useMediaQuery } from '@chakra-ui/react';

import Layout from '@/components/Layout';

import { APP_PAGE_YEARS } from '@/constant/app';
import { Z_INDEX_IMAGE_MODAL } from '@/constant/style';

import { client } from '@/libs/client';

import { MicroCMSArticleType } from '@/types/microCMS';

type Props = {
  microCMSData: MicroCMSArticleType[];
};

const Photo: NextPage<Props> = ({ microCMSData }) => {
  const [isSP] = useMediaQuery('(max-width: 480px)');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isSelectedModal, setIsSelectedModal] = useState<boolean>(false);
  const [selectedModalIndex, setSelectedModalIndex] = useState(0);

  const onOpenModal = (i: number) => {
    setSelectedIndex(i);
    setSelectedModalIndex(0);
    setIsSelectedModal(!isSelectedModal);
  };

  return (
    <>
      <Layout>
        <Flex
          as="ul"
          flexWrap="wrap"
          justifyContent="flex-start"
          alignItems="center"
          gap={{ base: '2px', sm: '16px' }}
          m="0 auto"
          sx={{
            '@media screen and (min-width: 1081px)': {
              width: 'calc(320px * 3 + 16px * 2)',
            },
            '@media screen and (max-width: 1120px)': {
              width: 'calc(320px * 2 + 16px * 1)',
            },
            '@media screen and (max-width: 980px)': {
              width: 'calc(320px * 2 + 16px * 1)',
            },
            '@media screen and (max-width: 800px)': {
              width: '320px',
            },
            '@media screen and (max-width: 480px)': {
              width: '100vw',
            },
          }}
        >
          {microCMSData.map((item: MicroCMSArticleType, i) => (
            <Center
              as="li"
              key={item.contentId + item.alt}
              onClick={() => onOpenModal(i)}
              overflow="hidden"
              aspectRatio={1}
              sx={{
                ...(isSP
                  ? {
                      width: 'calc((100vw - 2px * 2) / 3)',
                      aspectRatio: 1,
                      opacity: 1,
                      transition: '0.6s opacity',
                      '&:hover': {
                        opacity: 0.7,
                      },
                    }
                  : {
                      width: '320px',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        background: 'black800',
                        position: 'absolute',
                        inset: '0 auto auto 0',
                        opacity: 0.7,
                        transition: '0.2s opacity',
                        mixBlendMode: 'hue',
                        zIndex: 1,
                      },
                      '&:hover': {
                        '&::before': {
                          opacity: 0,
                        },
                      },
                    }),
              }}
              _hover={{
                img: {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <Image
                src={`${item.images[0].url}?${
                  item.images[0].width > item.images[0].height ? 'w' : 'h'
                }=${isSP ? 400 : 800}`}
                alt={item.alt}
                w="100%"
                h="100%"
                transform="scale(1)"
                objectFit="cover"
                transition="0.6s transform"
              />
            </Center>
          ))}
        </Flex>
      </Layout>
      <Center
        flexDir="column"
        gap={{ base: '16px', sm: '24px' }}
        w="100vw"
        h="100dvh"
        pos="fixed"
        inset="0 0 0 0"
        bgColor="rgba(255, 255, 255, 0.9)"
        transition="opacity 0.2s"
        zIndex={Z_INDEX_IMAGE_MODAL}
        sx={{
          ...(isSelectedModal
            ? {
                opacity: 1,
                pointerEvents: 'auto',
              }
            : {
                opacity: 0,
                pointerEvents: 'none',
              }),
        }}
      >
        {isSP && (
          <Box
            onClick={() => setIsSelectedModal(!isSelectedModal)}
            w="100vw"
            h="100dvh"
            pos="absolute"
            inset="0 0 0 0"
          />
        )}
        <Center
          as="ul"
          w="100vw"
          h="100dvh"
          pos="relative"
          sx={{
            ...(isSP && {
              maxH: '70dvh',
            }),
          }}
        >
          {microCMSData[selectedIndex].images.map((item, i) => (
            <Center
              as="li"
              key={item.url}
              flexDir="column"
              w="100%"
              h="100%"
              pos="absolute"
              transition="opacity 0.2s"
              opacity={i === selectedModalIndex ? 1 : 0}
            >
              <Box
                as="img"
                src={`${item.url}?${item.width > item.height ? 'w' : 'h'}=1200`}
                w="100%"
                h="100%"
                objectFit="contain"
                transition="opacity 0.2s"
                opacity={i === selectedModalIndex ? 1 : 0}
              />
            </Center>
          ))}
        </Center>
        <Flex
          justifyContent={{ base: 'space-between', sm: 'flex-start' }}
          alignItems="flex-end"
          w="100vw"
          h="100dvh"
          m="auto"
          pos="absolute"
          inset="0 0 0 0"
          sx={{
            ...(isSP && {
              maxH: '70dvh',
            }),
          }}
        >
          <Center
            textAlign="left"
            h="56px"
            bg="rgba(255, 255, 255, 0.8)"
            p="4px 20px 0"
            fontFamily="en"
            fontSize="1.3rem"
            sx={{
              ...(isSP && {
                ml:"calc((100vw - 70dvh / 3 * 2) / 2)"
              }),
            }}
          >
            {microCMSData[selectedIndex].date.split('T')[0]}
            <br />
            {microCMSData[selectedIndex].place}
            {microCMSData[selectedIndex].prefecture && !isSP && (
              <>, {microCMSData[selectedIndex].prefecture}</>
            )}
          </Center>
          <Center
            gap="6px"
            h="8px"
            pos="absolute"
            inset={{ base: 'auto 0 -24px 0', sm: 'auto 0 24px 0' }}
          >
            {microCMSData[selectedIndex].images.map((item, i) => (
              <Center
                as="button"
                type="button"
                key={'array' + i}
                w="6px"
                h="6px"
                background="white"
                transition="0.2s background, 0.2s width, 0.2s height"
                rounded="full"
                boxShadow="0 0 10px 0 rgba(0, 0, 0, 0.5)"
                pos="relative"
                onClick={() => setSelectedModalIndex(i)}
                _hover={{
                  background: 'black600',
                }}
                sx={{
                  '&::before': {
                    content: "''",
                    display: 'block',
                    w: '8px',
                    h: '8px',
                    rounded: 'full',
                    background: 'transparent',
                    transition: '0.2s background',
                    pos: 'absolute',
                  },
                  ...(i === selectedModalIndex && {
                    '&::before': {
                      content: "''",
                      display: 'block',
                      w: '8px',
                      h: '8px',
                      rounded: 'full',
                      background: 'black600',
                      transition: '0.2s background',
                      pos: 'absolute',
                    },
                  }),
                }}
              />
            ))}
          </Center>
          <Flex
            display={isSelectedModal ? 'flex' : 'none'}
            alignItems="center"
            justifyContent="space-between"
            w="100vw"
            pos="absolute"
            m="auto"
            inset={{ base: '0 0 auto 0', sm: '0 0 0 0' }}
          >
            <Center
              as="button"
              type="button"
              onClick={() => {
                selectedModalIndex === 0
                  ? setSelectedModalIndex(
                      microCMSData[selectedIndex].images.length - 1
                    )
                  : setSelectedModalIndex(selectedModalIndex - 1);
              }}
              textStyle="imageModalArrowButton"
              sx={{
                ...(selectedModalIndex === 0
                  ? {
                      opacity: 0,
                      pointerEvents: 'none',
                    }
                  : {
                      opacity: 1,
                      pointerEvents: 'auto',
                    }),
                '&::before': {
                  content: '""',
                  display: 'block',
                  width: '1px',
                  height: isSP ? '24px' : '40px',
                  background: 'black600',
                  margin: isSP ? '0 0 17px' : '0 0 28px',
                  transition: '0.2s background',
                  position: 'absolute',
                  transform: 'rotateZ(45deg)',
                  boxShadow: '0 0 6px 0 white',
                },
                '&::after': {
                  content: '""',
                  display: 'block',
                  width: '1px',
                  height: isSP ? '24px' : '40px',
                  background: 'black600',
                  margin: isSP ? '16px 0 0' : '28px 0 0',
                  transition: '0.2s background',
                  position: 'absolute',
                  transform: 'rotateZ(135deg)',
                  boxShadow: '0 0 6px 0 white',
                },
              }}
            />
            <Center
              as="button"
              type="button"
              onClick={() => {
                selectedModalIndex + 1 ===
                microCMSData[selectedIndex].images.length
                  ? setSelectedModalIndex(0)
                  : setSelectedModalIndex(selectedModalIndex + 1);
              }}
              textStyle="imageModalArrowButton"
              sx={{
                ...(selectedModalIndex ===
                microCMSData[selectedIndex].images.length - 1
                  ? {
                      opacity: 0,
                      pointerEvents: 'none',
                    }
                  : {
                      opacity: 1,
                      pointerEvents: 'auto',
                    }),
                '&::before': {
                  content: '""',
                  display: 'block',
                  width: '1px',
                  height: isSP ? '24px' : '40px',
                  background: 'black600',
                  margin: isSP ? '0 0 17px' : '0 0 28px',
                  transition: '0.2s background',
                  position: 'absolute',
                  transform: 'rotateZ(135deg)',
                  boxShadow: '0 0 6px 0 white',
                },
                '&::after': {
                  content: '""',
                  display: 'block',
                  width: '1px',
                  height: isSP ? '24px' : '40px',
                  background: 'black600',
                  margin: isSP ? '16px 0 0' : '28px 0 0',
                  transition: '0.2s background',
                  position: 'absolute',
                  transform: 'rotateZ(45deg)',
                  boxShadow: '0 0 6px 0 white',
                },
              }}
            />
          </Flex>
        </Flex>
        {!isSP && (
          <Center
            as="button"
            type="button"
            onClick={() => setIsSelectedModal(!isSelectedModal)}
            w="56px"
            h="56px"
            pos="absolute"
            inset={{ base: '3% 3% auto auto', sm: '10% 10% auto auto' }}
            _hover={{
              '&::before': {
                background: 'black300',
              },
              '&::after': {
                background: 'black300',
              },
            }}
            sx={{
              '&::before': {
                content: '""',
                display: 'block',
                width: '1px',
                height: '64px',
                background: 'black600',
                transition: '0.2s background-color',
                boxShadow: '0 0 10px $white',
                transform: 'rotateZ(45deg)',
              },
              '&::after': {
                content: '""',
                display: 'block',
                width: '1px',
                height: '64px',
                background: 'black600',
                transition: '0.2s background-color',
                boxShadow: '0 0 10px $white',
                transform: 'rotateZ(135deg)',
              },
            }}
          />
        )}
      </Center>
    </>
  );
};

export default Photo;

export const getStaticPaths = async () => {
  const paths = APP_PAGE_YEARS.map((item) => ({
    params: { id: String(item) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const microCMSReturnData = await client.get({
    endpoint: 'data',
    queries: {
      offset: 0,
      limit: 100,
    },
  });

  const path = Number(params.id);
  const microCMSData: MicroCMSArticleType[] =
    microCMSReturnData.contents.filter((item: MicroCMSArticleType) => {
      const contentDate = new Date(item.date);
      return contentDate.getFullYear() === path;
    });

  return {
    props: {
      microCMSData: microCMSData,
    },
  };
};
