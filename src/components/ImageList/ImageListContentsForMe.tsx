import { FC } from 'react';
import { Box, Flex, Center, Image } from '@chakra-ui/react';
import { PresentsType } from '@/types/microCMS';
import { useUserAgent } from '@/contexts/useUserAgent';
import { useWidth } from '@/contexts/useWidth';

type Props = {
  photographs: PresentsType[];
  onOpenModal: (index: number) => void;
};

const ImageListContentsForMe: FC<Props> = ({ photographs, onOpenModal }) => {
  const { userAgent } = useUserAgent();
  const { isSP } = useWidth();
  const isMobile = userAgent === 'mobile' || isSP;

  return (
    <Flex
      as="ul"
      flexWrap="wrap"
      justifyContent="flex-start"
      alignItems="center"
      m="0 auto"
      sx={{
        '@media screen and (min-width: 961px)': {
          width: `${280 * 3}px`,
        },
        '@media screen and (max-width: 960px)': {
          width: `${280 * 2}px`,
        },
        '@media screen and (max-width: 600px)': {
          width: '100vw',
        },
      }}
    >
      {photographs.map((item,i) => (
        <Center
          as="li"
          key={item.image.url}
          onClick={() => onOpenModal(i)}
          overflow="hidden"
          aspectRatio={1}
          sx={{
            '@media screen and (min-width: 601px)': {
              width: '280px',
              position: 'relative',
              '&::before': {
                content: '""',
                display: 'block',
                width: '100%',
                height: '100%',
                background: '#000000',
                position: 'absolute',
                inset: '0 auto auto 0',
                opacity: 0.6,
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
            '@media screen and (max-width: 600px)': {
              width: '50vw',
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
              src={`${item.image.url}?${
                item.image.width > item.image.height ? 'w' : 'h'
              }=${isMobile ? 1000 : 1200}`}
              // alt={item.alt}
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

export default ImageListContentsForMe;
