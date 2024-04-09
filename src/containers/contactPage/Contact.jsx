import { Box, Container, Text, Flex,Divider } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image'

// icons import
import service from '@/imgs/service.png'
import whatsapp from '@/icons/contact_icons/whatsapp.png'
import line from '@/icons/contact_icons/line.png'
import qrcode from '@/imgs/qrcode.jpg'
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
      <Container maxW={"container.xl"} mb={{base:"16px",md:"104px"}} mt={"16px"} w={"100%"} h={"max-content"}>
        <Flex h={"100%"} flexDirection={"column"} gap={4}>
          <Text variant={"h2"} fontSize={"24px"}>ติดต่อเรา</Text>
          <Flex w={"max-content"} flexDirection={{base:"column",md:"row"}} maxW={"100%"} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'} rounded={"10px"} px={{ base: 6, md: 10 }} py={{ base: 2, md: 4 }} gap={{base:"none",md:4}} h={"100%"} mx={"auto"} bg={'white'}>
            <Flex alignItems={'center'} justifyContent={'center'} rounded={'full'} position={'relative'} maxW={"100%"} w={{base:'100%',md:'20rem'}} h={'15rem'}>
              <Image src={service} alt='service' width={200} height={200} />
            </Flex>
            <Box w={"25rem"} h={"100%"}  maxW={"100%"} p={2}>
              <Flex color={'#676767'} fontSize={"18px"} flexDirection={'column'} alignItems={{base:'center',md:'start'}} justifyContent={{base:'center',md:'start'}} w={"100%"} maxW={"100%"} gap={2}>
                <Flex gap={2}>
                  {/* Image */}
                  <Box position={"relative"} maxW={"100%"} w={"max-content"} h={"100%"}>
                    <Image src={whatsapp} width={30} height={30} />
                  </Box>
                  <Text variant={'h4'}>เบอร์โทร : xxxxxxxx</Text>
                </Flex>
                <Flex gap={2}>
                  {/* Image */}
                  <Box position={"relative"} maxW={"100%"} w={"max-content"} h={"100%"}>
                    <Image src={line} width={30} height={30} />
                  </Box>
                  <Text variant={'h4'}>Line : xxxxxxxx</Text>
                </Flex>
                <Flex maxW={"100%"} gap={2}>
                  <Text>เวลาทำการ</Text>
                  <Text>09.00 - 17.00</Text>
                </Flex>
              </Flex>
              <Flex alignItems={{base:'center',md:'end'}} justifyContent={{base:'center',md:'end'}} p={2} position={'relative'} maxW={"100%"} w={"100%"} h={{base:"10rem",md:"15rem"}}>
                <Image src={qrcode} width={150} height={150}/>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </>
  )
}

export default Contact