import { FC, useState } from 'react';
import { Box, Center, Flex } from '@chakra-ui/react';

import { Z_INDEX_IMAGE_MODAL } from '@/constant/style';

import { useWidth } from '@/contexts/useWidth';

import { PhotographType } from '@/types/microCMS';

type Props = {
  data?: PhotographType;
  isOpen: boolean;
  onClose: () => void;
};

const Modal: FC<Props> = ({ data, isOpen, onClose }) => {
  const { isSP } = useWidth();
  const [selectedModalIndex, setSelectedModalIndex] = useState(0);

  if (!data) {
    return <></>;
  }

  return (
    <Center
      flexDir="column"
      gap={{ base: '16px', sm: '24px' }}
      w="100vw"
      h="100vh"
      pos="fixed"
      inset="0 0 0 0"
      bgColor="rgba(255, 255, 255, 0.9)"
      transition="opacity 0.2s"
      zIndex={Z_INDEX_IMAGE_MODAL}
      sx={{
        ...(isOpen
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
      <Center
        as="ul"
        w="100vw"
        h="100vh"
        pos="relative"
        sx={{
          ...(isSP && {
            maxH: '70vh',
          }),
        }}
      >
        {data.images.map((item, i) => (
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
              src={`${item.url}?${item.width > item.height ? 'w' : 'h'}=${
                isSP ? '800' : 1600
              }`}
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
        h="100vh"
        m="auto"
        pos="absolute"
        inset="0 0 0 0"
        sx={{
          ...(isSP && {
            maxH: '70vh',
          }),
        }}
      >
        {/* 情報 */}
        <Center
          textAlign="left"
          h={{ base: '48px', sm: '72px' }}
          bg="rgba(255, 255, 255, 0.8)"
          p="4px 20px 0"
          fontFamily="en"
          fontSize={{ base: '1.3rem', sm: '1.6rem' }}
          sx={{
            ...(isSP && {
              ml: 'calc((100vw - 70vh / 3 * 2) / 2)',
            }),
          }}
        >
          {data.date.split('T')[0]}
          <br />
          {data.place}
          {data.prefecture && !isSP && <>, {data.prefecture}</>}
        </Center>
        {/* 矢印 */}
        <Flex
          alignItems="center"
          justifyContent="space-between"
          w="100vw"
          h="fit-content"
          pos="absolute"
          m="auto"
          inset={{ base: '0 0 0 0', sm: '0 0 0 0' }}
        >
          <Center
            as="button"
            type="button"
            onClick={() => {
              selectedModalIndex === 0
                ? setSelectedModalIndex(data.images.length - 1)
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
                background: 'base.600',
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
                background: 'base.600',
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
              selectedModalIndex + 1 === data.images.length
                ? setSelectedModalIndex(0)
                : setSelectedModalIndex(selectedModalIndex + 1);
            }}
            textStyle="imageModalArrowButton"
            sx={{
              ...(selectedModalIndex === data.images.length - 1
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
                background: 'base.600',
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
                background: 'base.600',
                margin: isSP ? '16px 0 0' : '28px 0 0',
                transition: '0.2s background',
                position: 'absolute',
                transform: 'rotateZ(45deg)',
                boxShadow: '0 0 6px 0 white',
              },
            }}
          />
        </Flex>
        {/* ナビゲーション */}
        <Center
          gap="6px"
          w="fit-content"
          h="8px"
          m="auto"
          pos="absolute"
          inset={{ base: 'auto 0 -24px 0', sm: 'auto 0 24px 0' }}
        >
          {data.images.map((item, i) => (
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
                background: 'base.600',
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
                    background: 'base.600',
                    transition: '0.2s background',
                    pos: 'absolute',
                  },
                }),
              }}
            />
          ))}
        </Center>
      </Flex>
      <Center
        as="button"
        type="button"
        onClick={() => {
          setSelectedModalIndex(0);
          onClose();
        }}
        w="56px"
        h="56px"
        pos="absolute"
        inset={{ base: '5% 3% auto auto', sm: '10% 10% auto auto' }}
        _hover={{
          '&::before': {
            background: 'base.300',
          },
          '&::after': {
            background: 'base.300',
          },
        }}
        sx={{
          '&::before': {
            content: '""',
            display: 'block',
            width: '1px',
            height: isSP ? '48px' : '64px',
            background: 'base.600',
            transition: '0.2s background-color',
            boxShadow: '0 0 10px $white',
            transform: 'rotateZ(45deg)',
          },
          '&::after': {
            content: '""',
            display: 'block',
            width: '1px',
            height: isSP ? '48px' : '64px',
            background: 'base.600',
            transition: '0.2s background-color',
            boxShadow: '0 0 10px $white',
            transform: 'rotateZ(135deg)',
          },
        }}
      />
    </Center>
  );
};

export default Modal;
