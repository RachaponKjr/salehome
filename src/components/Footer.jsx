// 'use client'
// import { Box, Container, Flex, Text } from '@chakra-ui/react'
// import React from 'react'

// const Footer = () => {
//     return (
//         <Box bg={"#305553"} mb={{base:"64px",md:"0px"}}>
//             <Container maxW={'container.xl'}>
//                 <Flex h={"min-content"} flexDirection={{base:"column",md:"row"}} justifyContent={"center"} py={"16px"}>
//                 <Text variant={"h6"} textAlign={"center"} color={'white'}>Copyright © 2024 บริษัท บริหารสินทรัพย์ ซีเอฟ เอเชีย จำกัด</Text>
//                 </Flex>
//             </Container>
//         </Box>
//     )
// }

// export default Footer
'use client';
import {
  Box,
  Container,
  Flex,
  Text,
  Grid,
  GridItem,
  Image,
} from '@chakra-ui/react';
import { Link } from '../navigation'; // ✅ ใช้ Link จาก navigation เหมือน Navbar
import React from 'react';

const Footer = () => {
  return (
    <Box bg={'#305553'} mb={{ base: '64px', md: '0px' }}>
      <Container maxW={'container.xl'}>
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap={8}
          py={{ base: '32px', md: '48px' }}
          color={'white'}
        >
          {/* Column 1 - เมนู */}
          <GridItem>
            <Box mb={4}>
              <Text
                fontSize={'18px'}
                fontWeight={'bold'}
                color={'#FFF'}
                mb={4}
                pb={2}
                borderBottom={'2px solid #FF4B6E'}
                display={'inline-block'}
              >
                เมนู
              </Text>
            </Box>
            <Flex direction={'column'} gap={2}>
              <Link href="/">
                <Text
                  _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
                >
                  หน้าแรก
                </Text>
              </Link>
              <Link href="/product">
                <Text
                  _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
                >
                  ทรัพย์รอการขาย
                </Text>
              </Link>
              <Link href="/payment">
                <Text
                  _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
                >
                  แบบฟอร์มชำระเงิน
                </Text>
              </Link>
              <Link href="/announcement/Rates_Fees">
                <Text
                  _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
                >
                  ประกาศอัตราดอกเบี้ย ค่าปรับ ค่าบริการและค่าธรรมเนียม
                </Text>
              </Link>
              <Link href="/announcement/FinancialStatements">
                <Text
                  _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
                >
                  งบการเงิน
                </Text>
              </Link>
              <Link href="/pdpa">
                <Text
                  _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
                >
                  การคุ้มครองข้อมูลส่วนบุคคล
                </Text>
              </Link>

              <Link href="/contact">
                <Text
                  _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
                >
                  ติดต่อเรา
                </Text>
              </Link>
            </Flex>
          </GridItem>

          {/* Column 2 - ติดต่อเรา */}
          <GridItem>
            <Box mb={4}>
              <Text
                fontSize={'18px'}
                fontWeight={'bold'}
                color={'#FFF'}
                mb={4}
                pb={2}
                borderBottom={'2px solid #FF4B6E'}
                display={'inline-block'}
              >
                ติดต่อเรา
              </Text>
            </Box>
            <Flex direction={'column'} gap={3}>
              <Flex align={'center'} gap={3}>
                <Box
                  w={'30px'}
                  h={'30px'}
                  rounded={'md'}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <Image src="/imgs/phone_green.png" alt="loading" />
                </Box>
                <Text>02 826 5377</Text>
              </Flex>
              <Flex align={'center'} gap={3}>
                <Box
                  w={'30px'}
                  h={'30px'}
                  rounded={'md'}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <Image src="/imgs/email.png" alt="loading" />
                </Box>
                <Text>cfam@cfasia.co.th</Text>
              </Flex>
              <Flex align={'center'} gap={3}>
                <Box
                  w={'30px'}
                  h={'30px'}
                  rounded={'md'}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <Image src="/imgs/line.png" alt="loading" />
                </Box>
                <Text>@CFAM</Text>
              </Flex>
              <Box mt={2}>
                <Text fontWeight={'bold'} mb={1}>
                  วันและเวลาทำการ
                </Text>
                <Text fontSize={'14px'}>
                  วันจันทร์ - วันศุกร์ เวลา 8.30 น. - 17.30 น.
                </Text>
              </Box>
            </Flex>
          </GridItem>

          {/* Column 3 - ARMA Mobile Application */}
          <GridItem>
            <Box mb={2}>
              <Text
                fontSize={'18px'}
                fontWeight={'bold'}
                color={'#FFF'}
                mb={4}
                pb={2}
                borderBottom={'2px solid #FF4B6E'}
                display={'inline-block'}
              >
                ARMA Mobile Application
              </Text>
            </Box>
            <Flex direction={'column'} gap={3}>
              <Box>
                <a
                  href="https://apps.apple.com/th/app/arma/id6472656294?l=th"
                  target="_blank"
                >
                  <Image src="/imgs/applestore.svg" alt="loading" w={'121px'} />
                </a>
              </Box>
              <Box>
                <a
                  href="https://play.google.com/store/apps/details?id=com.chase.arma&pcampaignid=web_share"
                  target="_blank"
                >
                  <Image src="/imgs/playstore.svg" alt="loading" w={'120px'} />
                </a>
              </Box>

              <Image
                src="/imgs/appstore.png"
                alt="loading"
                width={12}
                height={12}
                rounded={'10px'}
              />
            </Flex>
          </GridItem>
        </Grid>

        {/* Copyright */}
        <Box borderTop={'1px solid rgba(255,255,255,0.2)'} py={4}>
          <Text
            textAlign={'center'}
            color={'white'}
            fontSize={{ base: '12px', md: '14px' }}
          >
            © บริษัท บริหารสินทรัพย์ ซีเอฟ เอเชีย จำกัด
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
