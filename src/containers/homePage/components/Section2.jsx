'use client';
import Image12 from 'next/image';
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  Image,
  VStack,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function Section2() {
  return (
    <Box py={{ base: 16, md: 24 }} bg="white" position="relative">
      <Container maxW="container.xl">
        {/* Header */}
        <VStack spacing={2} mb={16} textAlign="center" id="about">
          <Text fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}>
            เกี่ยวกับเรา
          </Text>
          <Box
            w="80px"
            h="4px"
            bgGradient="linear(to-r, #FF8E00, #00706F)"
            borderRadius="full"
          />
        </VStack>

        {/* Content Grid */}
        <Grid
          templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
          gap={{ base: 8, lg: 16 }}
          alignItems="center"
        >
          {/* Left Side - Text Content */}
          <GridItem>
            <VStack align="start" spacing={6}>
              <Text
                fontSize={{ base: '1xl', md: '2xl' }}
                color="#FF8E00"
                lineHeight="tall"
              >
                บริษัท บริหารสินทรัพย์ ซีเอฟ เอเชีย จำกัด
              </Text>

              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="FFB800"
                lineHeight="tall"
              >
                บริษัท บริหารสินทรัพย์ ซีเอฟ เอเชีย จำกัด
                ประกอบธุรกิจบริหารจัดการสินทรัพย์ด้อยคุณภาพ
              </Text>

              {/* ARMA Mobile Application Section */}
              <Box
                p={6}
                bg="gray.50"
                borderRadius="xl"
                borderLeft="4px solid"
                borderColor="#00706F"
                w="full"
              >
                <HStack spacing={3} mb={3}>
                  <Box
                    w="40px"
                    h="40px"
                    bg="white"
                    borderRadius="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    boxShadow="sm"
                  >
                    <Image12
                      src="/imgs/appstore.png"
                      alt="loading"
                      width={100}
                      height={100}
                    />
                  </Box>
                  <Heading fontSize="xl" color="gray.800">
                    ARMA Mobile Application
                  </Heading>
                </HStack>

                <Text fontSize="md" color="gray.600" lineHeight="tall">
                  แอปพลิเคชันที่ลูกค้าสามารถตรวจสอบยอดหนี้ค้างชำระ
                  ประวัติการชำระด้วยตนเอง รวมถึงสามารถขอเอกสารต่างๆ เช่น
                  หนังสือปิดบัญชี หนังสือเจือจำนองในการชำระ ในเสร็จรับเงิน
                  หรือเอกสารอื่นที่เกี่ยวข้องได้ มีฟังก์ชันแชทที่สามารถตั้งคำถาม
                  และเสนอการใช้งาน ได้ทั้งระบบ iOS และ Android
                </Text>
              </Box>
            </VStack>
          </GridItem>

          {/* Right Side - Image */}
          <GridItem>
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                position="relative"
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
                  alt="Business meeting"
                  w="full"
                  h={{ base: '300px', md: '500px' }}
                  objectFit="cover"
                />

                {/* Gradient Overlay */}
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  w="full"
                  h="full"
                  bgGradient="linear(to-br, rgba(255,142,0,0.1), rgba(0,112,111,0.1))"
                />
              </Box>
            </MotionBox>
          </GridItem>
        </Grid>
      </Container>

      {/* Decorative Elements */}
      <Box
        position="absolute"
        top="10%"
        right="5%"
        w="200px"
        h="200px"
        bgGradient="radial(circle, rgba(255,142,0,0.08) 0%, transparent 70%)"
        borderRadius="50%"
        zIndex={0}
        display={{ base: 'none', lg: 'block' }}
      />

      <Box
        position="absolute"
        bottom="20%"
        left="5%"
        w="150px"
        h="150px"
        bgGradient="radial(circle, rgba(0,112,111,0.08) 0%, transparent 70%)"
        borderRadius="50%"
        zIndex={0}
        display={{ base: 'none', lg: 'block' }}
      />
    </Box>
  );
}
