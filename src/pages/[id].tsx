import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Box, Center, Flex, Text } from '@chakra-ui/react';

import Contents from '@/components/Contents';
import PageTransition from '@/components/PageTransition';

import { imgPath, thumbnailPath, years } from '@/constant/data';

import { client } from '@/libs/client';

import { ImgType } from '@/types/microCMS';

type Props = {
  data: ImgType[];
  index: number;
};

const Photo: NextPage<Props> = ({ data, index }) => {
  const [selected, setSelected] = useState<number>(0);
  const [selectedItem, setSelectedItem] = useState<ImgType>(data[0]);
  const [array, setArray] = useState<number[]>([]);
  const [isModal, setIsModal] = useState<boolean>(false);

  useEffect(() => {
    setSelectedItem(data[selected]);
    setArray(Array.from(Array(data[selected].img).keys()));
  }, [selected]);

  const modalFunc = (i: number) => {
    setIsModal(!isModal);
    setSelected(i);
  };

  const Thumbnail = () => (
    <Flex
      as={'ul'}
      flexWrap={'wrap'}
      alignItems={'center'}
      w={'fit-content'}
      m={'0 auto'}
      sx={{
        '@media screen and (min-width: 481px)': {
          gap: '16px',
        },
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
          justifyContent: 'flex-start',
          gap: '3px',
          width: '100vw',
          li: {
            width: 'calc((100vw - 3px) / 2)',
            height: 'calc((100vw - 3px) / 2)',
          },
        },
      }}
    >
      {data.map((item, i) => (
        <Center
          as={'li'}
          key={item.contentId + item.alt}
          onClick={() => modalFunc(i)}
          overflow={'hidden'}
          sx={{
            '@media screen and (max-width: 480px)': {
              width: '200px',
              height: '200px',
              opacity: 1,
              transition: '0.6s opacity',
              '&:hover': {
                opacity: 0.7,
              },
            },
            '@media screen and (min-width: 481px)': {
              width: '320px',
              height: '320px',
              position: 'relative',
              '&::before': {
                content: '""',
                display: 'block',
                width: '100%',
                height: '100%',
                background: 'black800',
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: 0.7,
                transition: '0.2s opacity',
                mixBlendMode: 'hue',
                zIndex: 2,
              },
              '&:hover': {
                '&::before': {
                  opacity: 0,
                },
              },
            },
          }}
          _hover={{
            img: {
              transform: 'scale(1.1)',
            },
          }}
        >
          <Box
            as={'img'}
            src={`${thumbnailPath}img_thumbnail_${item.contentId}.jpg`}
            alt={item.alt}
            w={'100%'}
            h={'100%'}
            transform={'scale(1)'}
            objectFit={'cover'}
            transition={'0.6s transform'}
          />
        </Center>
      ))}
    </Flex>
  );

  const Modal = () => {
    const [index, setIndex] = useState(0);

    const selectIndex = (i: number) => {
      setIndex(i);
    };

    const next = () => {
      index + 1 === array.length ? setIndex(0) : setIndex(index + 1);
    };
    const prev = () => {
      index === 0 ? setIndex(array.length - 1) : setIndex(index - 1);
    };

    const Back = () => {
      return (
        <Center
          onClick={() => modalFunc(0)}
          w={'56px'}
          h={'56px'}
          zIndex={60}
          pos={'absolute'}
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
      );
    };

    return (
      <>
        {isModal && (
          <Center
            flexDir={'column'}
            gap={{ base: '16px', sm: '24px' }}
            w={'100vw'}
            h={'100vh'}
            pos={'fixed'}
            inset={'0 0 0 0'}
            bgColor={'rgba(255, 255, 255, 0.9)'}
            zIndex={50}
          >
            <Back />
            {/* Img */}
            <Center
              as={'ul'}
              w={{ base: '100vw', sm: '80vw', md: '60vw' }}
              h={{
                base: '60vh',
                sm: 'calc(80vw / 3 * 2)',
                md: 'calc(60vw / 3 * 2)',
              }}
              pos={'relative'}
            >
              {array.map((item, i) => (
                <Center
                  as={'li'}
                  key={item + 'img'}
                  flexDir={'column'}
                  w={'100%'}
                  h={'100%'}
                  pos={'absolute'}
                  transition={'opacity 0.2s'}
                  opacity={item === index ? 1 : 0}
                >
                  <Box
                    as={'img'}
                    src={`${imgPath}img_${selectedItem.contentId}_${
                      item < 9 ? '0' + (item + 1) : '' + item + 1
                    }.jpg`}
                    w={'100%'}
                    h={'100%'}
                    objectFit={'contain'}
                    transition={'opacity 0.2s'}
                    opacity={item === index ? 1 : 0}
                  />
                </Center>
              ))}
            </Center>
            {/* Data */}
            <Flex
              display={{ base: 'grid', sm: 'flex' }}
              w={{ base: '90vw', sm: '80vw', md: '60vw' }}
              sx={{
                '@media screen and (min-width: 481px)': {
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '1.5rem',
                  minHeight: '48px',
                },
                '@media screen and (max-width: 480px)': {
                  gridTemplateColumns: '50% 50%',
                  gridTemplateRows: 'auto auto',
                  gap: '24px 0',
                  fontSize: '1.3rem',
                },
              }}
            >
              <Text
                sx={{
                  '@media screen and (min-width: 481px)': {
                    width: '20%',
                  },
                  '@media screen and (max-width: 480px)': {
                    gridColumn: 1,
                    gridRow: 2,
                  },
                }}
              >
                {selectedItem.date.split('T')[0]}
              </Text>
              <Center
                gap={'12px'}
                sx={{
                  '@media screen and (max-width: 480px)': {
                    gridColumn: '1/3',
                    gridRow: 1,
                  },
                }}
              >
                {array.map((item, i) => (
                  <Box
                    w={'12px'}
                    h={'12px'}
                    background={'black300'}
                    transition={'0.2s background'}
                    borderRadius={'9999px'}
                    onClick={() => selectIndex(i)}
                    _hover={{
                      cursor: 'pointer',
                      background: 'black600',
                    }}
                    sx={{
                      ...(i === index && {
                        background: 'black600',
                      }),
                    }}
                  />
                ))}
              </Center>
              <Text
                textAlign={'right'}
                sx={{
                  '@media screen and (min-width: 481px)': {
                    width: '20%',
                  },
                  '@media screen and (max-width: 480px)': {
                    gridColumn: 2,
                    gridRow: 2,
                  },
                }}
              >
                {selectedItem.place}, {selectedItem.prefecture}
              </Text>
            </Flex>
            {/* Operation */}
            <Flex
              alignItems={'center'}
              justifyContent={'space-between'}
              w={{ base: '100vw', sm: '95vw' }}
              h={{ base: 'auto', sm: '100vh' }}
              pos={'absolute'}
              zIndex={'50'}
              m={'auto'}
              inset={'0 0 0 0'}
            >
              <Center
                onClick={() => prev()}
                textStyle={'modalArrow'}
                sx={{
                  '&::before': {
                    content: '""',
                    display: 'block',
                    width: '1px',
                    height: '40px',
                    background: 'black600',
                    margin: '0 0 28px',
                    transition: '0.2s background',
                    position: 'absolute',
                    transform: 'rotateZ(45deg)',
                  },
                  '&::after': {
                    content: '""',
                    display: 'block',
                    width: '1px',
                    height: '40px',
                    background: 'black600',
                    margin: '28px 0 0',
                    transition: '0.2s background',
                    position: 'absolute',
                    transform: 'rotateZ(135deg)',
                  },
                }}
              />
              <Center
                onClick={() => next()}
                textStyle={'modalArrow'}
                sx={{
                  '&::before': {
                    content: '""',
                    display: 'block',
                    width: '1px',
                    height: '40px',
                    background: 'black600',
                    margin: '0 0 28px',
                    transition: '0.2s background',
                    position: 'absolute',
                    transform: 'rotateZ(135deg)',
                  },
                  '&::after': {
                    content: '""',
                    display: 'block',
                    width: '1px',
                    height: '40px',
                    background: 'black600',
                    margin: '28px 0 0',
                    transition: '0.2s background',
                    position: 'absolute',
                    transform: 'rotateZ(45deg)',
                  },
                }}
              />
            </Flex>
          </Center>
        )}
      </>
    );
  };

  const Component = () => (
    <>
      <PageTransition component={<Thumbnail />} />
      <Modal />
    </>
  );

  return <Contents path={index} component={<Component />} />;
};

export default Photo;

export const getStaticPaths = async () => {
  const paths = years.map((item) => ({ params: { id: item + '' } }));

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
  const microCMSData = await client.get({
    endpoint: 'data',
    queries: {
      offset: 0,
      limit: 100,
    },
  });

  const path = Number(params.id);
  const index = years.findIndex((item: number) => item === path);
  const data = microCMSData.contents.filter(
    (item: ImgType) => item.year[0].year === path
  );
  return {
    props: {
      data: data,
      index: index,
    },
  };
};
