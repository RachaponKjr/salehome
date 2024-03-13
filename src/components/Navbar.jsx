import { Box, Container, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

import icon from '../imgs/logo.png'

import { IoIosAddCircle } from "react-icons/io";
import FlagSelect from './FlagSelect'
import MobileMenu from './MobileMenu';

const Navbar = () => {
    const maun = [
        {
            tital: "หน้าเเรก",
        },
        {
            tital: "ค้นหาด่วน",
        },
        {
            tital: "รายการ ขาย เช่า",
        },
        {
            tital: "ประกาศเเนะนำ",
        },
        {
            tital: "ขายราคาทุน",
        },
        {
            tital: "AgentClub",
        },
        {
            tital: "Looking",
        }
    ]
    return (
        <>
            <Box>
                <Box backgroundColor={"gray.500"}>
                    <Container maxW={"container.xl"}>
                        <Flex py={"8px"} position={"relative"} w={"100%"} display={"flex"} flexDirection={{ base: "row" }} justifyContent={"space-between"}>
                            {/* ส่วนของ Logo */}
                            <Box maxW={"100%"} w={{ base: "10rem", sm: "15rem", md: "30%" }} position={{ base: "relative", md: "absolute", xl: "relative" }} display={"block"} justifyContent={"center"} alignItems={"center"}><Image src={icon} alt="logo" width={"100%"} height={100} /></Box>
                            {/* ส่วนเมนูทางด้าน ขวา ของ ขนาด 1024px ขึ้นไป */}
                            <Flex flexDirection={"column"} w={{ md: "100%", xl: "70%" }} alignItems={'end'} gap={"8px"}>
                                {/* ส่วนบนของเมนู */}
                                <Flex gap={2} pr={{ base: "0px", md: "12px" }} display={'flex'} alignItems={'center'} h={"100%"}>
                                    {/* Select เลือกเปลี่ยนภาษา */}
                                    <FlagSelect />
                                    <Flex gap={2} display={{ base: "none", md: "flex" }}>
                                        <Box fontSize={{ md: "12px", xl: "14px" }} py={"4px"}>|</Box>
                                        <Box color={"white"} fontSize={{ md: "12px", xl: "14px" }} py={"4px"} cursor={"pointer"}>คู่มือการใช้งาน</Box>
                                        <Box fontSize={{ md: "12px", xl: "14px" }} py={"4px"}>|</Box>
                                        <Box color={"white"} fontSize={{ md: "12px", xl: "14px" }} py={"4px"} cursor={"pointer"}>ติดต่อเรา</Box>
                                    </Flex>
                                </Flex>
                                {/* ส่วนล่างของเมนู */}
                                <Flex display={{ base: "none", md: "flex" }}>
                                    {maun.map((item, index) => (
                                        <Box key={index} px={"12px"} py={"4px"} display={"flex"} alignItems={"center"} color={"white"} borderRadius={"20px"} cursor={"pointer"} fontSize={{ md: "12px", xl: "14px" }} _hover={{ bg: "blue.500" }}>{item.tital}</Box>
                                    ))}
                                    <Box px={"12px"} py={"4px"} gap={1} border={"2px solid white"} bg={"#F5A623"} color={"white"} borderRadius={"20px"} cursor={"pointer"} fontSize={{ md: "12px", xl: "14px" }} display={"flex"} alignItems={"center"} _hover={{ bg: "white", color: "#F5A623" }}>
                                        <IoIosAddCircle size={18} />
                                        <Box as="p">ลงประกาศ</Box>
                                    </Box>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Container>
                </Box>
            </Box>
            {/* เมนู ของส่วนมือถือ อยู่ทางด้านล่าง */}
            <MobileMenu />
        </>
    )
}

export default Navbar