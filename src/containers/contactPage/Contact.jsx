import { Box, Container, Text, Flex, Divider } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image'

import { FaUser,FaPhoneAlt } from "react-icons/fa";
import { FaLine } from "react-icons/fa6";
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
      <Container maxW={"container.xl"} mb={{ base: "16px", md: "104px" }} mt={"16px"} w={"100%"} h={"max-content"}>
        <Flex h={"100%"} flexDirection={"column"} gap={4}>
          <Text variant={"h2"} fontSize={"24px"}>ติดต่อเรา</Text>
          <Flex w={"50rem"} flexDirection={'column'} maxW={"100%"} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'} rounded={"10px"} px={{ base: 6, md: 10 }} py={4} h={"100%"} mx={"auto"}>
            <Flex flexDirection={{base:"column",md:"row"}} w={"100%"} alignItems={'center'} justifyContent={'space-evenly'}>
            <Flex alignItems={'center'} justifyContent={'center'} rounded={'full'} position={'relative'} maxW={"100%"} w={{ base: '100%', md: '20rem' }} h={'15rem'}>
              <Image src={"/imgs/service.png"} alt='service' width={200} height={200} />
            </Flex>
            <Box w={"max-content"} h={"100%"} maxW={"100%"} p={2}>
              <Flex color={'#676767'} fontSize={"18px"} flexDirection={'column'} alignItems={{ base: 'start', md: 'start' }} justifyContent={{ base: 'center', md: 'start' }} w={{base:"100%",md:"max-content"}} maxW={"100%"} gap={4}>
                <Flex gap={4}>
                  {/* Image */}
                  <FaUser size={25} color='#02685C'/>
                  <Text variant={'h4'}> คุณวรรณรัตน์ เกยานนท์</Text>
                </Flex>
                <Flex gap={4}>
                  {/* Image */}
                  <FaPhoneAlt size={25} color='#02685C'/>
                  <Text variant={'h4'}>081-642-7488</Text>
                </Flex>
                <Flex gap={4}>
                  {/* Image */}
                  <FaLine size={25} color='#02685C'/>
                  <Text variant={'h4'}>@cfam</Text>
                </Flex>
                <Flex maxW={"100%"} gap={2}>
                  <Text>เวลาทำการ</Text>
                  <Text>09.00 - 17.00</Text>
                </Flex>
              </Flex>
            </Box>
            </Flex>
            <Flex alignItems={"center"} justifyContent={"center"} position={'relative'} maxW={"100%"} w={"100%"} h={"max-content"} p={5}>
              <Image src={"/imgs/qrcode.jpg"} width={150} height={150} />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </>
  )
}

export default Contact