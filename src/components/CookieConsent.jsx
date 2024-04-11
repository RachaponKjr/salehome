'use client'
import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

function CookieConsent() {
    const [cookies, setCookies] = useState(true)
    function cookieConsentFC() {
        const d = new Date();
        d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = "cookie=True;" + expires + ";path=/";
        setCookies(true)
    }
    useEffect(()=>{
        const cookietest = document.cookie
        if(cookietest === "cookie=True"){
            setCookies(true)
        }else{
            setCookies(false)
        }
    },[])
    return (
        <>
        <Flex display={cookies ? "none" : "flex"} justifyContent={"center"} position={"fixed"} bottom={0} w={"100%"} zIndex={{ base: 1000, sm: 1000 }} py={{ base: 0, md: 2 }} className='cookie'>
            <Box bg={'white'} w={'800px'} h={'min-content'} py={4} px={8} rounded={{ base: "0", md: "10px" }} boxShadow={'xl'}>
                {/* HeadText */}
                <Text variant={'h4'} fontWeight={"bold"} fontSize={{ base: "16px", sm: "20px" }} color={'#292929'}>เว็บไซต์นี้ใช้คุกกี้</Text>
                {/* BodyText */}
                <Text variant={'h6'} mt={1} color={'#888888'} fontSize={{ base: "12px", sm: "16px" }}>เว็บไซต์นี้มีการจัดเก็บคุกกี้เพื่อเพิ่มประสิทธิภาพในการใช้งานของท่าน และการมอบบริการที่ดีที่สุดจากเรา กรุณากดยอมรับคุณสามารถเรียนรู้เพิ่มเติมเกี่ยวกับการใช้งานคุกกี้ของเราได้ที่ นโยบายการใช้คุกกี้</Text>
                {/* FooterText */}
                <Flex justifyContent={{ base: "start", md: "end" }} flexDirection={{ base: "column-reverse", sm: "row" }} alignItems={"center"} mt={{ base: 2, md: 0 }} gap={{ base: 2, md: 8 }}>
                    {/* setting cookie */}
                    <Text variant={'h6'} color={'#02685C'} cursor={"pointer"}>การตั้งค่าคุกกี้</Text>
                    {/* BTN */}
                    <Box w={{ base: "100%", sm: "20%" }} h={"48px"} bg={'#02685C'} cursor={"pointer"} display={'flex'} justifyContent={"center"} alignItems={"center"} rounded={'5px'} onClick={cookieConsentFC} >
                        <Text variant={'h6'} color={'white'}>ยอมรับทั้งหมด</Text>
                    </Box>
                </Flex>
            </Box>
        </Flex>
        </>
    )
}

export default CookieConsent