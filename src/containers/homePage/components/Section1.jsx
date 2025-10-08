'use client';
import Card from '@/components/Card';
import Image from 'next/image';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  keyframes,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Section2 from './Section2';

function Section1() {
  const MotionBox = motion(Box);
  const MotionText = motion(Text); // ✅ เพิ่มตัวนี้เพื่อทำ typewriter

  const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.8; }
`;

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  // ✅ variants สำหรับ typewriter
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.04, // หน่วงต่ออักขระ (ยิ่งน้อยยิ่งเร็ว)
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: '0.25em' },
    visible: { opacity: 1, y: '0em' },
  };

  // ✅ ข้อความที่จะทำเอฟเฟกต์
  const content =
    'บริษัท บริหารสินทรัพย์ ซีเอฟ เอเชีย จำกัด\nประกอบธุรกิจบริหารจัดการสินทรัพย์ด้อยคุณภาพ';

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (!el) return;
    const headerOffset = 80; // ถ้ามี navbar fixed สูง ~80px
    const y =
      el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <>
      <Flex fontSize={'24px'}>
        {/* Hero Section */}
        <Box
          minH="80dvh"
          w="full"
          bg="white"
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
        >
          {/* Background Image with Blur */}
          <Box
            position="absolute"
            top={0}
            left={0}
            w="full"
            h="full"
            // bgImage="url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80')"
            bgImage="url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1920&q=80')"
            bgSize="cover"
            bgPosition="center center"
            bgRepeat="no-repeat"
            filter="grayscale(100%)"
            opacity={0.4}
            zIndex={0}
          />

          {/* Overlay ขาวโปร่งแสง */}
          <Box
            position="absolute"
            top={0}
            left={0}
            w="full"
            h="full"
            bg="white"
            opacity={0.7}
            zIndex={0}
          />

          {/* Floating Background Circle - Green (มุมล่างซ้าย) */}
          <Box
            position="absolute"
            w="400px"
            h="400px"
            bgGradient="radial(circle, rgba(0,112,111,0.15) 0%, transparent 70%)"
            borderRadius="50%"
            bottom="-150px"
            left="-150px"
            zIndex={1}
            animation="floatReverse 4s ease-in-out infinite"
            sx={{
              '@keyframes floatReverse': {
                '0%, 100%': { transform: 'translateY(0px) scale(1)' },
                '50%': { transform: 'translateY(30px) scale(1.1)' },
              },
            }}
          />

          {/* เนื้อหา */}
          <MotionBox
            textAlign="center"
            color="gray.700"
            zIndex={2}
            px={4}
            {...fadeInUp}
          >
            <Box
              textAlign="center"
              mb={4}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              gap={4}
              flexDirection={{ base: 'column', md: 'row' }}
            >
              <Text fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}>
                ยินดีต้อนรับสู่
              </Text>
              <Image
                src="/imgs/cfam.png"
                alt="loading"
                width={150}
                height={150}
              />
            </Box>

            {/* ✅ ตรงนี้คือส่วนที่ทำให้เกิดเอฟเฟกต์ typewriter */}
            <MotionText
              fontSize={{ base: 'sm', md: 'lg', lg: 'lg' }}
              mb={10}
              color="gray.600"
              fontWeight="medium"
              variants={sentence}
              initial="hidden"
              animate="visible"
              whiteSpace="pre-line" // ให้ \n ขึ้นบรรทัดใหม่
            >
              {content.split('').map((char, idx) => (
                <motion.span key={idx} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </MotionText>

            <Button
              size="lg"
              bgGradient="linear(to-r, #FF8E00, #00706F)"
              color="white"
              px={12}
              py={6}
              borderRadius="full"
              fontWeight="bold"
              boxShadow="0 10px 30px rgba(255,142,0,0.3)"
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: '0 15px 40px rgba(255,142,0,0.4)',
              }}
              transition="all 0.6s"
              onClick={scrollToAbout}
            >
              เกี่ยวกับเรา
            </Button>
          </MotionBox>
        </Box>
      </Flex>
      <Box>
        <Section2 />
      </Box>
    </>
  );
}

export default Section1;
