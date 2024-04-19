import { Box, Container, Text, Flex, Divider } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image'

import { FaPhoneAlt } from "react-icons/fa";
import { FaLine } from "react-icons/fa6";
import { GiRotaryPhone } from "react-icons/gi";
import GoogleMapBox from './GoogleMap';
function Contact() {
  return (
    <>
      <Box w={"100%"} h={'max-content'} py={"8px"} boxShadow={"lg"} >
        <Container maxW={"container.xl"} h={"100%"}>
          <Flex w={"100%"} gap={2} alignItems={"center"} h={"100%"}>
            <Link href={"/"}>
              หน้าเเรก
            </Link>
            <p>/</p>
            <Link href={"/contact"} color='red'>
              <Text color={'#02685C'}>
                Contact
              </Text>
            </Link>
          </Flex>
        </Container>
      </Box>
      <Container maxW={"container.xl"} mb={{ base: "16px",md:"28px" ,lg: "254px" }} mt={"16px"} w={"100%"} h={"max-content"}>
        <Flex h={"100%"} flexDirection={"column"} gap={4}>
          <Text variant={"h2"} fontSize={"24px"}>ติดต่อเรา</Text>
          <Flex w={"60rem"} maxW={"100%"} boxShadow={'rgba(0, 0, 0, 0.16) 0px 1px 4px;'} rounded={"10px"} px={{ base: 6, md: 2, lg: 10 }} py={6} h={"100%"} mx={"auto"}>
            <Flex flexDirection={{ base: "column-reverse", md: "row" }} w={"100%"} h={"100%"} gap={2}>
              <Box maxW={"100%"} w={"600px"} aspectRatio={'1/1'}>
                <GoogleMapBox />
              </Box>
              <Flex minW={"min-content"} flexDirection={'column'} gap={6} p={{ base: 0, md: 4 }}>
                {/* ส่วนหัวของหัวข้อ */}
                <Flex flexDirection={'column'} gap={4}>
                  <Text variant={'h6'} fontWeight={"bold"} textColor={'#2F5553'} fontSize={{ base: "14px", md: "18px" }}>ที่อยู่</Text>
                  <Text>1/755 หมู่ที่ 17 ซอยพหลฏยธิน 60 ถนนพหลโยธิน ตำบลคูคต อำเภอลำลูกกา จังหวัดปทุมธานี </Text>
                </Flex>
                {/* ส่นล่างที่มีqrcord */}
                <Flex h={"100%"} flexDirection={{ base: "column", sm: "row" }} gap={2} justifyContent={"row"}>
                  <Flex flexDirection={'column'} gap={6} w={{base:"100%",md:"50%"}}>
                    <Flex flexDirection={'column'} gap={4}>
                      <Text variant={'h6'} fontWeight={"bold"} textColor={'#2F5553'} fontSize={{ base: "14px", md: "18px" }}>ช่องทางติดต่อ</Text>
                      <Flex flexDirection={'column'} gap={3}>
                        <Text>คุณวรรณรัตน์ เกยานนท์</Text>
                        <Flex alignItems={'center'} gap={2}>
                          <FaPhoneAlt size={20}/><Text ml={4}>081-642-7488</Text>
                        </Flex>
                        <Flex alignItems={'center'} gap={2}>
                          <GiRotaryPhone size={29}/><Text ml={2}>02-821-1055</Text>
                        </Flex>
                        <Flex alignItems={'center'} gap={2}>
                          <FaLine size={25}/>
                        <Text ml={3}> @CFAM</Text>
                        </Flex>
                      </Flex>
                    </Flex>
                    <Flex flexDirection={'column'} gap={4}>
                      <Text variant={'h6'} fontWeight={"bold"} textColor={'#2F5553'} fontSize={{ base: "14px", md: "18px" }}>เวลาทำการ</Text>
                      <Text>09.00 - 17.00</Text>
                    </Flex>
                  </Flex>
                  <Flex my={{ base: 2, sm: 0 }} flexDirection={'column'} mx={'auto'} w={"max-content"} h={"100%"} rounded={"20px"} justifyContent={"start"} alignItems={"center"} p={4}>
                    <Image src="/imgs/qrcode.jpg" alt="Qrcode_line" width={180} height={180} />
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </>
  )
}

export default Contact