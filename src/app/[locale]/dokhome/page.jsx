'use client';
import { Box, Container, Text, Flex } from '@chakra-ui/react';

export default function page() {
  return (
    <>
      <Box h="calc(100vh - 9rem)">
        <Box>
          <iframe src="/rtrt.pdf" style={{ height: '100%', width: '100%' }} />
        </Box>
      </Box>
    </>
  );
}
