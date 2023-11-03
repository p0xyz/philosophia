import { Box, Center, Flex, HStack, Image, Text } from '@chakra-ui/react';
import { NextPage } from 'next';

import Layout from '@/components/Layout';

import { APP_OTHER_LINKS, APP_NAME } from '@/constant/app';

const About: NextPage = () => {
  const Name = () => (
    <Box>
      <Text fontFamily="nav" fontSize="1.6rem">
        All photo by
      </Text>
      <HStack gap="8px">
        <Text as="span" fontSize="2.2rem" fontWeight="bold">
          {APP_NAME}
        </Text>
        <Text
          as="span"
          color="black600"
          fontFamily="nav"
          fontSize="1.6rem"
          lineHeight="1.6rem"
        >
          - Amateur photographer
        </Text>
      </HStack>
    </Box>
  );
  const Description = () => (
    <Text fontSize="1.3rem" lineHeight="2.5rem">
      22歳 関西圏で写真を撮ります。
      <br />
      使用機材：Canon EOS RP / Canon EOS Kiss X3
    </Text>
  );
  const OtherLink = () => (
    <Flex as="ul" flexDir="column" gap="8px">
      {APP_OTHER_LINKS.map((item, i) => (
        <Box as="li" key={item.url + i}>
          <Flex
            as="a"
            href={item.url}
            target="_blank"
            w="max-content"
            opacity={1}
            transition="0.3s opacity"
          >
            <Image
              src={item.svg}
              alt={item.text}
              w="16px"
              m="0 4px 0 0"
              opacity={1}
            />
            <Text as="span" fontFamily="nav">
              {item.text}
            </Text>
          </Flex>
        </Box>
      ))}
    </Flex>
  );
  const Icon = () => (
    <Center w="304px" aspectRatio={1}>
      <Image
        src="/img/icon.jpg"
        alt={APP_NAME}
        w="100%"
        h="100%"
        objectFit="cover"
      />
    </Center>
  );
  const Component = () => (
    <Flex
      sx={{
        '@media screen and (min-width: 801px)': {
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '80vw',
          maxWidth: '800px',
          minHeight: '55vh',
          margin: '0 auto',
        },
        '@media screen and (max-width: 800px)': {
          flexWrap: 'wrap',
          justifyContent: 'center',
        },
      }}
    >
      <Flex
        flexDir="column"
        gap="16px"
        sx={{
          '@media screen and (max-width: 800px)': {
            margin: '40px 0 0',
            order: 2,
            width: '100vw',
            padding: '0 10%',
          },
        }}
      >
        <Name />
        <Description />
        <OtherLink />
      </Flex>
      <Icon />
    </Flex>
  );

  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export default About;
