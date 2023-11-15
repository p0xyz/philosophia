import { FC } from 'react';
import { Box, Flex, Center, Image } from '@chakra-ui/react';

import { MicroCMSArticleType } from '@/types/microCMS';
import { useWidth } from '@/contexts/useWidth';

type Props = {
  data: MicroCMSArticleType[];
  onOpenModal: (index:number) => void;
};

const ImageList: FC<Props> = ({ data, onOpenModal }) => {
  const { isSP } = useWidth();

  return (
    <Flex
      as="ul"
      flexWrap="wrap"
      justifyContent="flex-start"
      alignItems="center"
      gap={{ base: '2px', sm: '16px' }}
      m="0 auto"
      sx={{
        '@media screen and (min-width: 1361px)': {
          width: `${320 * 4 + 16 * 3}px`,
        },
        '@media screen and (max-width: 1360px)': {
          width: `${320 * 3 + 16 * 2}px`,
        },
        '@media screen and (max-width: 1040px)': {
          width: `${320 * 2 + 16 * 1}px`,
        },
        '@media screen and (max-width: 720px)': {
          width: '320px',
        },
        '@media screen and (max-width: 480px)': {
          width: '100vw',
        },
      }}
    >
      {data.map((item: MicroCMSArticleType, i) => (
        <Center
          as="li"
          key={item.id}
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
          <Box as="button" type="button" w="100%" h="100%">
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
          </Box>
        </Center>
      ))}
    </Flex>
  );
};

export default ImageList;
