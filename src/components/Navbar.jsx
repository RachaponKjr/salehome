import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

import icon from '../imgs/logo.png'

import { BsMegaphone } from "react-icons/bs";
import { FaHeadset,FaEdit } from "react-icons/fa";
import { BiHomeAlt } from "react-icons/bi";
import FlagSelect from './FlagSelect'
import MobileMenu from './MobileMenu';
import BtnTop from './BtnTop';
import BtnContact from './BtnContact';
import Link from 'next/link';

const Navbar = () => {
    const manu = [
        {
            tital: "หน้าเเรก",
            icon: <BiHomeAlt size={20}/>,
            link: "/"
        },
        {
            tital: "บทความเเนะนำ",
            icon: <FaEdit size={20} />,
            link: "/blogs"
        },
        {
            tital: "ติดต่อเรา",
            icon: <FaHeadset size={20}/>,
            link: "/contact"
        },
        {
            tital: "ประกาศเเนะนำ",
            icon: <BsMegaphone size={20}/>,
            link: "/advertise"
        },
    ]
    return (
        <>
            <Box>
                <Box backgroundColor={"#029988"} >
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
                                <Flex gap={2} pr={{ base: "0px", md: "12px" }} display={'flex'} alignItems={'center'} h={"100%"} zIndex={10}>
                                    {/* Select เลือกเปลี่ยนภาษา */}
                                    <FlagSelect />
                                </Flex>
                                {/* ส่วนล่างของเมนู */}
                                <Flex display={{ base: "none", md: "flex" }} gap={4}>
                                    {manu.map((item, index) => (
                                        <Box key={index} px={"12px"} zIndex={0} py={"4px"} display={"flex"} overflow={"hidden"} alignItems={"center"} color={"white"} cursor={"pointer"} gap={"8px"} fontSize={{ md: "12px", xl: "14px" }} position={"relative"} className='nav_hover'>
                                            <Link href={item.link} style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center',gap:'8px'}}>
                                            {item.icon}
                                            <Text>{item.tital}</Text>
                                            </Link>
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