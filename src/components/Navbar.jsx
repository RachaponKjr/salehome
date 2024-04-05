'use client'
import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

import icon from '@/imgs/logo.png'

import Link from 'next/link';

import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'
import FlagSelect from './FlagSelect'

// icons Navbar
import home from "@/icons/nav_icons/home.png"
import edit from "@/icons/nav_icons/edit.png"
import headphone from "@/icons/nav_icons/headphone.png"

const ButtonTop = dynamic(() => import('./BtnTop'), { ssr: false })
const ButtonContact = dynamic(() => import('./BtnContact'), { ssr: false })
const MobileMenu = dynamic(() => import('./MobileMenu'), { ssr: false })
const Navbar = () => {
    const pathName = usePathname()

    const manu = [
        {
            tital: "หน้าเเรก",
            icon: home,
            link: "/"
        },
        {
            tital: "บทความเเนะนำ",
            icon: edit,
            link: "/blogs"
        },
        {
            tital: "ติดต่อเรา",
            icon: headphone,
            link: "/contact"
        },
        // {
        //     tital: "ประกาศเเนะนำ",
        //     icon: <BsMegaphone size={20} {...pathName === "/advertise" ? {color:'#ED1B22'} : ""}/>,
        //     link: "/advertise"
        // },
    ]
    return (
        <>
            <Box>
                <Box bgGradient={"linear(#305553 0%, #162726 49%, #0A1111 100%)"} boxShadow={'md'} py={2}>
                    <Container maxW={"container.xl"}>
                        <Flex py={"8px"} position={"relative"} w={"100%"} flexDirection={{ base: "row" }} justifyContent={"space-between"} alignItems={"center"}>
                            {/* ส่วนของ Logo */}
                            <Flex maxW={"100%"} w={{ base: "160px", sm: "240px", md: "30%" }} position={{ base: "relative", md: "absolute", xl: "relative" }} alignItems={"center"}>
                                <Link href={"/"}>
                                    <Image src={icon} alt="logo" width={'auto'} height={50} />
                                </Link>
                            </Flex>
                            {/* ส่วนเมนูทางด้าน ขวา ของ ขนาด 1024px ขึ้นไป */}
                            <Flex flexDirection={"row-reverse"} w={{ md: "100%", xl: "70%" }} alignItems={'center'} gap={"24px"}>
                                {/* ส่วนบนของเมนู */}
                                <Flex gap={2} alignItems={'center'} h={"100%"} zIndex={10}>
                                    {/* Select เลือกเปลี่ยนภาษา */}
                                    <FlagSelect />
                                </Flex>
                                {/* ส่วนล่างของเมนู */}
                                <Flex display={{ base: "none", md: "flex" }} gap={{md:4,xl:8}}>
                                    {manu.map((item, index) => (
                                        <Flex role='group' key={index} minW={'120px'} zIndex={0} overflow={"hidden"} alignItems={"center"} color={'white'} cursor={"pointer"} gap={"8px"} fontSize={{ md: "12px", xl: "14px" }} position={"relative"} className={`${pathName === item.link ? "nav_active" : "nav_hover"}`}>
                                            <Link href={item.link} style={{margin:'8px 0px' ,width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
                                                <Image src={item.icon} alt="icon" width={25} height={25} />
                                                <Text fontSize={"18px"}>{item.tital}</Text>
                                            </Link>
                                        </Flex>
                                    ))}
                                </Flex>
                            </Flex>
                        </Flex>
                    </Container>
                </Box>
                {/* ปุ่มติดต่อ กับ ปุ่ม เลื่อน ขึ้นด้านบน */}
                <Box position={'fixed'} right={0} bottom={0} width={'64px'} height={'max-content'} display={{ base: "none", md: 'flex' }} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={2} mx={2} py={4} zIndex={999}>
                    {/* ติดต่อ */}
                    <ButtonContact />
                    {/* เลื่อนขึ้นบน */}
                    <ButtonTop />
                </Box>
            </Box>
            {/* เมนู ของส่วนมือถือ อยู่ทางด้านล่าง */}
            <MobileMenu />
        </>
    )
}

export default Navbar