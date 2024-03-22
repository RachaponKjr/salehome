import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

import icon from '../imgs/logo.png'

import { IoIosAddCircle } from "react-icons/io";
import { FaPaperPlane } from "react-icons/fa";
import FlagSelect from './FlagSelect'
import MobileMenu from './MobileMenu';
import BtnTop from './BtnTop';
import BtnContact from './BtnContact';
import Link from 'next/link';

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
    ]
    return (
        <>
            <Box>
                <Box backgroundColor={"gray.500"}>
                    <Container maxW={"container.xl"}>
                        <Flex py={"8px"} position={"relative"} w={"100%"} display={"flex"} flexDirection={{ base: "row" }} justifyContent={"space-between"} alignItems={"center"}>
                            {/* ส่วนของ Logo */}
                            <Box maxW={"100%"} w={{ base: "10rem", sm: "15rem", md: "30%" }} position={{ base: "relative", md: "absolute", xl: "relative" }} display={"flex"} alignItems={"center"}>
                                <Link href={"/"}>
                                <Image src={icon} alt="logo" width={"100%"} height={60} />
                                </Link>
                            </Box>
                            {/* ส่วนเมนูทางด้าน ขวา ของ ขนาด 1024px ขึ้นไป */}
                            <Flex flexDirection={"column"} w={{ md: "100%", xl: "70%" }} alignItems={'end'} gap={"8px"}>
                                {/* ส่วนบนของเมนู */}
                                <Flex gap={2} pr={{ base: "0px", md: "12px" }} display={'flex'} alignItems={'center'} h={"100%"}>
                                    {/* Select เลือกเปลี่ยนภาษา */}
                                    <FlagSelect />
                                </Flex>
                                {/* ส่วนล่างของเมนู */}
                                <Flex display={{ base: "none", md: "flex" }} gap={4}>
                                    {maun.map((item, index) => (
                                        <Box key={index} px={"12px"} py={"4px"} display={"flex"} overflow={"hidden"} alignItems={"center"} color={"white"} cursor={"pointer"} gap={"4px"} fontSize={{ md: "12px", xl: "14px" }} position={"relative"} className='nav_hover'>
                                            <IoIosAddCircle size={25}/>
                                            <Text>{item.tital}</Text>
                                        </Box>
                                    ))}
                                </Flex>
                            </Flex>
                        </Flex>
                    </Container>
                </Box>
                {/* ปุ่มติดต่อ กับ ปุ่ม เลื่อน ขึ้นด้านบน */}
                <Box position={'fixed'} right={0} bottom={0} width={'4rem'} height={'max-content'} display={{base:"none",md:'flex'}} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={2} mx={2} py={4}  zIndex={999}> 
                    {/* ติดต่อ */}
                    <BtnContact/>
                    {/* เลื่อนขึ้นบน */}
                    <BtnTop/>
                </Box>
            </Box>
            {/* เมนู ของส่วนมือถือ อยู่ทางด้านล่าง */}
            <MobileMenu />
        </>
    )
}

export default Navbar