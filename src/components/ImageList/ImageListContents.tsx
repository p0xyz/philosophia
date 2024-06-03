import { FC } from 'react';
import { Box, Flex, Center, Image } from '@chakra-ui/react';
import { PhotographType } from '@/types/microCMS';
import { useUserAgent } from '@/contexts/useUserAgent';
import { useWidth } from '@/contexts/useWidth';

type Props = {
  data: PhotographType[];
  onOpenModal: (id: string) => void;
};

const ImageListContents: FC<Props> = ({ data, onOpenModal }) => {
  const { userAgent } = useUserAgent();
  const { isSP } = useWidth();
  const isMobile = userAgent === 'mobile' || isSP;

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
      {data.map((item: PhotographType) => (
        <Center
          as="li"
          key={item.id}
          onClick={() => onOpenModal(item.id)}
          overflow="hidden"
          aspectRatio={1}
          sx={{
            '@media screen and (min-width: 481px)': {
              width: '320px',
              position: 'relative',
              '&::before': {
                content: '""',
                display: 'block',
                width: '100%',
                height: '100%',
                background: '#000000',
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
                img: {
                  transform: 'scale(1.1)',
                },
              },
            },
            '@media screen and (max-width: 480px)': {
              width: '78vw',
              aspectRatio: 1,
              opacity: 1,
              transition: '0.6s opacity',
              '&:hover': {
                opacity: 0.7,
              },
            },
          }}
        >
          <Box as="button" type="button" w="100%" h="100%">
            <Image
              src={`${item.images[0].url}?${
                item.images[0].width > item.images[0].height ? 'w' : 'h'
              }=${isMobile ? 800 : 1200}`}
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

export default ImageListContents;
