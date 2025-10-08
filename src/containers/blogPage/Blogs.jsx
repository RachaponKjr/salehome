'use client';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Image as ChakraImage,
  Text,
  VStack,
  Card,
  CardBody,
  Divider,
  Flex,
} from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function Blogs({ homeManu, blogManu }) {
  const router = usePathname();
  const newsData = [
    {
      id: 1,
      date: '14 สิงหาคม 2568',
      title: 'มหกรรมแท็กซี่ สร้างวินัยแห่งความเป็นธรรม ปีที่ 2',
      image: '/images/news/event1.jpg',
      description: 'กิจกรรมสร้างวินัยแห่งความเป็นธรรมสำหรับผู้ขับขี่แท็กซี่',
    },
    {
      id: 2,
      date: '29 กรกฎาคม 2568',
      title: 'แจ้งการเปิดบริการช่องทางการชำระเงินไลส์',
      image: '/images/news/payment.jpg',
      description: 'เปิดบริการช่องทางการชำระเงินใหม่ผ่านระบบไลส์',
    },
    {
      id: 3,
      date: '13 มิถุนายน 2568',
      title: 'มหกรรมแท็กซี่ สร้างวินัยแห่งความเป็นธรรม ปีที่ 2',
      image: '/images/news/event2.jpg',
      description: 'กิจกรรมพิเศษสำหรับพัฒนาคุณภาพบริการแท็กซี่',
    },
    {
      id: 4,
      date: '4 มิถุนายน 2568',
      title: 'มหกรรมแท็กซี่ สร้างวินัยแห่งความเป็นธรรม ปีที่ 4',
      image: '/images/news/event4.jpg',
      description: 'กิจกรรมพิเศษสำหรับพัฒนาคุณภาพบริการแท็กซี่',
    },
  ];
  return (
    <>
      <Head>
        <link
          rel="alternate"
          hrefLang="th"
          href="https://www.cfasia.co.th/th/blogs"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://www.cfasia.co.th/en/blogs"
        />
        <link rel="canonical" href={`https://www.cfasia.co.th${router}`} />
      </Head>
      <Box
        w={'100%'}
        h={'max-content'}
        py={'8px'}
        boxShadow={'rgba(0, 0, 0, 0.16) 0px 1px 4px;'}
      >
        <Container maxW={'container'} h={'100%'}>
          <Flex w={'100%'} gap={2} alignItems={'center'} h={'100%'}>
            <Link href={'/'}>{homeManu}</Link>
            <p>/</p>
            <Link href={'/blogs'} color="red">
              <Text color={'#02685C'}>{blogManu}</Text>
            </Link>
          </Flex>
        </Container>
      </Box>
      <Box bg="white" minH="100vh" py={12}>
        <Container maxW="1400px">
          <VStack spacing={2} mb={12}>
            <Text
              fontSize={{ base: '3xl', md: '5xl' }}
              color="gray.700"
              fontWeight="bold"
              textAlign="center"
            >
              ข่าวสารบริษัท
            </Text>
            <Divider
              w="80px"
              borderWidth="2px"
              borderColor="red.500"
              opacity={1}
            />
          </VStack>

          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
            spacing={8}
            justifyItems="center"
          >
            {newsData.map((news) => (
              <Link key={news.id} href={`/blogs/${news.id}`} passHref>
                <Card
                  overflow="hidden"
                  transition="all 0.3s"
                  _hover={{
                    transform: 'translateY(-8px)',
                    shadow: 'xl',
                  }}
                  cursor="pointer"
                  borderRadius="lg"
                  bg="white"
                  border="1px solid"
                  borderColor="gray.200"
                  w="100%"
                  maxW="350px"
                >
                  <Box position="relative" w="100%" h="240px" bg="gray.100">
                    <ChakraImage
                      src={news.image}
                      alt={news.title}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      fallbackSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%235B21B6'%3E%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E%3C/text%3E%3C/svg%3E"
                      loading="lazy"
                    />
                  </Box>
                  <CardBody p={6}>
                    <VStack align="stretch" spacing={3}>
                      <Text fontSize="sm" color="gray.600" fontWeight="medium">
                        {news.date}
                      </Text>
                      <Text
                        fontSize="lg"
                        color="gray.700"
                        lineHeight="tall"
                        noOfLines={2}
                      >
                        {news.title}
                      </Text>
                    </VStack>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}

export default Blogs;
