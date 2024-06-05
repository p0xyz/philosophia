import { FC, useState } from 'react';
import {
  Box,
  Center,
  Flex,
  ModalBody,
  Modal,
  ModalContent,
  ModalCloseButton,
} from '@chakra-ui/react';
import { PhotographModalPropsType } from '@/types/microCMS';
import { formatDate } from '@/libs/format';
import { useUserAgent } from '@/contexts/useUserAgent';
import { useWidth } from '@/contexts/useWidth';
import {
  IMAGE_WATERMARK_FOR_MOBILE,
  IMAGE_WATERMARK_FOR_PC,
} from '@/constant/common';

type Props = {
  photograph: PhotographModalPropsType;
  index?: number;
  isOpen: boolean;
  onClose: () => void;
};

const PhotographModalBase: FC<Props> = ({
  photograph,
  index,
  isOpen,
  onClose,
}) => {
  const { userAgent } = useUserAgent();
  const { isSP } = useWidth();
  const isMobile = userAgent === 'mobile' || isSP;

  const [selectedIndex, setSelectedIndex] = useState(index ?? 0);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        setSelectedIndex(0);
      }}
      size="full"
    >
      <ModalContent bg="rgba(255, 255, 255, 0.9)">
        <ModalBody
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          gap={{ base: '16px', sm: '24px' }}
          p={0}
        >
          <Center
            as="ul"
            w="100vw"
            h="100dvh"
            pos="relative"
            sx={{
              ...(isMobile && {
                maxH: '70vh',
              }),
            }}
          >
            {photograph.images.map((item, i) => (
              <Center
                as="li"
                key={item.url}
                flexDir="column"
                w="100%"
                h="100%"
                pos="absolute"
                transition="opacity 0.2s"
                opacity={i === selectedIndex ? 1 : 0}
                pointerEvents={i === selectedIndex ? 'auto' : 'none'}
              >
                <Box
                  as="img"
                  src={`${item.url}?${item.width > item.height ? 'w' : 'h'}=${
                    isMobile
                      ? `1000${IMAGE_WATERMARK_FOR_MOBILE}`
                      : `1800${IMAGE_WATERMARK_FOR_PC}`
                  }`}
                  w="100%"
                  h="100%"
                  objectFit="contain"
                  transition="opacity 0.2s"
                  opacity={i === selectedIndex ? 1 : 0}
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
            pointerEvents="none"
            sx={{
              ...(isMobile && {
                maxH: '70vh',
              }),
            }}
          >
            {/* 情報 */}
            {photograph.data && (
              <>
                <Center
                  textAlign="left"
                  h={{ base: '48px', sm: '72px' }}
                  bg="rgba(255, 255, 255, 0.8)"
                  p="4px 20px 0"
                  fontFamily="en"
                  fontSize={{ base: '1.3rem', sm: '1.6rem' }}
                  pointerEvents="auto"
                  sx={{
                    ...(isMobile && {
                      ml: 'calc((100vw - 70vh / 3 * 2) / 2)',
                    }),
                  }}
                >
                  {formatDate(photograph.data.date)}
                  <br />
                  {`${photograph.data.place}${
                    photograph.data.prefecture && !isMobile
                      ? `, ${photograph.data.prefecture}`
                      : ''
                  }`}
                </Center>
              </>
            )}
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
                  selectedIndex === 0
                    ? setSelectedIndex(photograph.images.length - 1)
                    : setSelectedIndex(selectedIndex - 1);
                }}
                textStyle="imageModalArrowButton"
                sx={{
                  ...(selectedIndex === 0
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
                    height: isMobile ? '24px' : '40px',
                    background: 'base.600',
                    margin: isMobile ? '0 0 17px' : '0 0 28px',
                    transition: '0.2s background',
                    position: 'absolute',
                    transform: 'rotateZ(45deg)',
                    boxShadow: '0 0 6px 0 white',
                  },
                  '&::after': {
                    content: '""',
                    display: 'block',
                    width: '1px',
                    height: isMobile ? '24px' : '40px',
                    background: 'base.600',
                    margin: isMobile ? '16px 0 0' : '28px 0 0',
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
                  selectedIndex + 1 === photograph.images.length
                    ? setSelectedIndex(0)
                    : setSelectedIndex(selectedIndex + 1);
                }}
                textStyle="imageModalArrowButton"
                sx={{
                  ...(selectedIndex === photograph.images.length - 1
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
                    height: isMobile ? '24px' : '40px',
                    background: 'base.600',
                    margin: isMobile ? '0 0 17px' : '0 0 28px',
                    transition: '0.2s background',
                    position: 'absolute',
                    transform: 'rotateZ(135deg)',
                    boxShadow: '0 0 6px 0 white',
                  },
                  '&::after': {
                    content: '""',
                    display: 'block',
                    width: '1px',
                    height: isMobile ? '24px' : '40px',
                    background: 'base.600',
                    margin: isMobile ? '16px 0 0' : '28px 0 0',
                    transition: '0.2s background',
                    position: 'absolute',
                    transform: 'rotateZ(45deg)',
                    boxShadow: '0 0 6px 0 white',
                  },
                }}
              />
            </Flex>
            {/* ナビゲーション */}
            {photograph.data && (
              <Center
                gap="6px"
                w="fit-content"
                h="8px"
                m="auto"
                pos="absolute"
                inset={{ base: 'auto 0 -24px 0', sm: 'auto 0 24px 0' }}
              >
                {photograph.images.map((_, i) => (
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
                    onClick={() => setSelectedIndex(i)}
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
                      ...(i === selectedIndex && {
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
            )}
          </Flex>
        </ModalBody>
        <ModalCloseButton
          w="56px"
          h="56px"
          inset={{ base: '5% 3% auto auto', sm: '10% 10% auto auto' }}
          sx={{
            '&:hover': {
              '--close-button-bg': 'transparent',
            },
          }}
        >
          <Center
            w="56px"
            h="56px"
            pos="relative"
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
                height: isMobile ? '48px' : '64px',
                background: 'base.600',
                transition: '0.2s background-color',
                boxShadow: '0 0 10px $white',
                transform: 'rotateZ(45deg)',
              },
              '&::after': {
                content: '""',
                display: 'block',
                width: '1px',
                height: isMobile ? '48px' : '64px',
                background: 'base.600',
                transition: '0.2s background-color',
                boxShadow: '0 0 10px $white',
                transform: 'rotateZ(135deg)',
              },
            }}
          />
        </ModalCloseButton>
      </ModalContent>
    </Modal>
  );
};

export default PhotographModalBase;
