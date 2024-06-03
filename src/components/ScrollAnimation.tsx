import { FC } from 'react';
import { Box, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const animationKeyframes = keyframes`
  0% { height: 0; top: 0; opacity: 0; }
  30% { height: 80px; opacity: 1; }
  100% { height: 0; top: 120px; opacity: 0; }
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;

const ScrollAnimation: FC = () => (
  <Box pos="fixed" inset="75vh 5vw auto auto">
    <Box
      as={motion.div}
      animation={animation}
      w="2px"
      h="80px"
      bg="base.600"
      pos="relative"
      top="0"
      opacity="0"
    />
  </Box>
);

export default ScrollAnimation;
