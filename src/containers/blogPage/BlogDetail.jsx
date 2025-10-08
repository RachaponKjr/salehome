'use client';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Image as ChakraImage,
} from '@chakra-ui/react';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import React from 'react';

function BlogDetail({ blogId }) {
  // ข้อมูลทั้งหมด (ในอนาคตควรดึงจาก API)
  const allBlogs = {
    1: {
      date: '14 สิงหาคม 2568',
      title: 'มหกรรมแท็กซี่ สร้างวินัยแห่งความเป็นธรรม ปีที่ 2',
      image: '/images/news/event1.jpg',
      content: `กระทรวงยุติธรรม โดยกรมคุ้มครองสิทธิและเสรีภาพ จัดมหกรรมแท็กซี่ช่วยเหลือประชาชน...`,
    },
    // เพิ่มข้อมูลข่าวอื่นๆ
  };

  const blog = allBlogs[blogId];

  if (!blog) {
    return <Box>ไม่พบข่าวสาร</Box>;
  }

  return (
    <>
      <Box bg="white" minH="100vh" py={12}>
        <Container maxW="1000px">
          <VStack spacing={6} align="stretch">
            <VStack spacing={3} align="stretch">
              <Text
                fontSize={{ base: '2xl', md: '4xl' }}
                color="gray.600"
                fontWeight="bold"
                lineHeight="tall"
              >
                {blog.title}
              </Text>
              <Text fontSize="md" color="gray.600" fontWeight="medium">
                {blog.date}
              </Text>
            </VStack>

            <Box
              position="relative"
              w="100%"
              h={{ base: '300px', md: '500px' }}
              borderRadius="lg"
              overflow="hidden"
              bg="gray.100"
            >
              <ChakraImage
                src={blog.image}
                alt={blog.title}
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>

            <Box py={4}>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="gray.700"
                lineHeight="tall"
                whiteSpace="pre-line"
              >
                {blog.content}
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>
    </>
  );
}

export default BlogDetail;
