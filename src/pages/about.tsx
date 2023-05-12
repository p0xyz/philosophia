import { Box, Center, Flex, Link, Text } from '@chakra-ui/react';
import { NextPage } from 'next';

import Contents from '@/components/Contents';

import { links, name } from '@/libs/const';

const About: NextPage = () => {
  const PATH = 'about';

  const Name = () => (
    <Box>
      <Text fontFamily={'nav'} fontSize={'1.6rem'}>
        All photo by
      </Text>
      <Flex alignItems={'center'} gap={'8px'}>
        <Text as={'span'} fontSize={'2.2rem'} fontWeight={'bold'}>
          {name}
        </Text>
        <Text
          as={'span'}
          color={'black600'}
          fontFamily={'nav'}
          fontSize={'1.6rem'}
          lineHeight={'1.6rem'}
        >
          - Amateur photographer
        </Text>
      </Flex>
    </Box>
  );
  const Description = () => (
    <Text lineHeight={'2.5rem'}>
      21歳 関西圏で写真を撮ります。
      <br />
      使用機材：Canon EOS RP / Canon EOS Kiss X3
    </Text>
  );
  const Sns = () => (
    <Flex as={'ul'} flexDir={'column'} gap={'8px'}>
      {links.map((item, i) => (
        <Box as={'li'} key={item.url + i}>
          <Flex
            as={'a'}
            href={item.url}
            target={'_blank'}
            w={'max-content'}
            opacity={1}
            transition={'0.3s opacity'}
          >
            <Center as={'figure'} w={'16px'} m={'0 4px 0 0'} opacity={1}>
              <Box as={'img'} src={`/img/icon_${item.svg}.svg`} />
            </Center>
            <Text as={'span'} fontFamily={'nav'}>
              {item.text}
            </Text>
          </Flex>
        </Box>
      ))}
    </Flex>
  );
  const Icon = () => (
    <Center w={'304px'} h={'304px'}>
      <Box
        as={'img'}
        src={'/img/icon.jpg'}
        alt={name}
        w={'100%'}
        h={'100%'}
        objectFit={'cover'}
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
        flexDir={'column'}
        gap={'16px'}
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
        <Sns />
      </Flex>
      <Icon />
    </Flex>
  );

  return <Contents path={PATH} component={<Component />} />;
};

export default About;
