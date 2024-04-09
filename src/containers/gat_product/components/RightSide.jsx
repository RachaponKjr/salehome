import React from 'react'

// icons import
import whatsapp from '@/icons/contact_icons/whatsapp.png'
import line from '@/icons/contact_icons/line.png'
import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
const RightSide = () => {
    return (
        <>
            <Box w={{ base: "100%", sm: "320px", lg: "30%" }} h={"min-content"} p={2}>
                {/* ข้อมูล ผู้ขาย */}
                <Flex w={"100%"} h={"min-content"} bg={'whitesmoke'} alignItems={"center"} boxShadow={"lg"} px={4} py={4} gap={4} rounded={"10px"}>
                    <Avatar />
                    <Box w={"100%"} h={"min-content"}>
                        {/* ชื่อผู้ขาย */}
                        <Text variant={'h4'} color={'black'}> คุณวรรณรัตน์ เกยานนท์</Text>
                    </Box>
                </Flex>
                {/* ช่องทางการติดต่อ */}
                <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'start'} gap={2} my={4}>
                    <Box mx={{base:"0",lg:"auto"}}><Text variant={'h5'} fontSize={'18px'}>ช่องทางติดต่อ</Text></Box>
                    {/* Phone // facebook // Messenger */}
                    <Flex gap={2} flexDirection={'column'} >
                        {/* phone contact */}
                        <Box display={'flex'} gap={4} alignItems={'center'}>
                            <Box w={"48px"} aspectRatio={1} boxShadow={'lg'} display={'flex'} justifyContent={'center'} alignItems={'center'} rounded={'lg'} cursor={'pointer'} color={'#4A90E4'}>
                                {/* <FaPhoneAlt size={25} /> */}
                                <Image src={whatsapp} alt="phonenumber contact" width={35} height={35} />
                            </Box>
                            <Text>081-642-7488</Text>
                        </Box>
                        {/* line id */}
                        <Box display={'flex'} gap={4} alignItems={'center'}>
                            <Box w={"48px"} aspectRatio={1} boxShadow={'lg'} display={'flex'} justifyContent={'center'} alignItems={'center'} rounded={'lg'} cursor={'pointer'} color={'#4A90E4'}>
                                {/* <FaFacebookMessenger size={25} /> */}
                                <Image src={line} alt="line contact" width={35} height={35}/>
                            </Box>
                            <Text>@cfam</Text>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}

export default RightSide