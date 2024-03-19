'use client'
import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

function CookieConsent() {
    const [cookieConsent,setCookieConsent] = useState(false)

    function acceptCookie() {
        // add className
        document.getElementById('cookie').classList.add("accept")
        setCookieConsent(true)
    }
    return (
        <Flex justifyContent={"center"} position={"fixed"} bottom={0} w={"100%"} zIndex={{base:1000,sm:100}} py={{base:0,md:2}}>
            <Box bg={'white'} w={'50rem'} h={'min-content'} py={4} px={8} rounded={{base:"0",md:"10px"}} boxShadow={'xl'} className='cookie' id='cookie'>
                {/* HeadText */}
                <Text variant={'h4'} fontWeight={"bold"} fontSize={{base:"16px",sm:"20px"}} color={'#292929'}>เว็บไซต์นี้ใช้คุกกี้</Text>
                {/* BodyText */}
                <Text variant={'h6'} mt={1} color={'#888888'} fontSize={{base:"12px",sm:"16px"}}>เราใช้คุกกี้เพื่อเพิ่มประสิทธิภาพ เเละประสบการณ์ที่ดีในการใช้งานเว็บไซต์ คุณสามารถเลือกตั้งค่าความยินยอมการใช้คุกกี้ได้ โดยคลิก "การตั้งค่าคุกกี้"</Text>
                {/* FooterText */}
                <Flex justifyContent={{base:"start",md:"end"}} flexDirection={{base:"column-reverse",sm:"row"}} alignItems={"center"} mt={{base:2,md:0}} gap={{base:2,md:8}}>
                    {/* setting cookie */}
                    <Text variant={'h6'} color={'#EA834F'} cursor={"pointer"}>การตั้งค่าคุกกี้</Text>
                    {/* BTN */}
                    <Box w={{base:"100%",sm:"20%"}} h={"3rem"} bg={"#EA834F"} cursor={"pointer"} display={'flex'} justifyContent={"center"} alignItems={"center"} rounded={'5px'} _hover={{bg: '#E66F33'}} onClick={acceptCookie}>
                        <Text variant={'h6'} color={'white'}>ยอมรับทั้งหมด</Text>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    )
}

export default CookieConsent