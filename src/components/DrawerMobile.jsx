'use client'
import { Box, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, GridItem, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react'
import { FaTh } from 'react-icons/fa';

const DrawerMobile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();


    return (
        <>
            {/* ส่วนที่เเสดงที่ Manu Footer */}
            <GridItem display={'flex'} flexDirection={"column"} alignItems={"center"} _active={{ bg: "gray.500" }} gap={0.5} pt={3} onClick={onOpen}>
                <FaTh size={30} />
                <Text fontSize={'10px'} mt={1.5}>เพิ่มเติม</Text>
            </GridItem>

            <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
                <DrawerOverlay />
                <DrawerContent py={"32px"}>
                    <DrawerCloseButton size={"lg"}/>
                    {/* ส่วนหัวของ Drawer ประกอบไปด้วย login / register */}
                    <DrawerHeader>
                        {/* ปุ่ม เข้าสู่ระบบ / สมัครสมาชิก */}
                        <Flex justifyContent={"center"}>
                            <Box w={'100%'} minW={"6rem"} maxW={"12rem"} bg={'gray.300'} py={2} textAlign={'center'} rounded={'lg'}>
                                <Text fontSize={'16px'}>เข้าสู่ระบบ</Text>
                            </Box>
                            {/* line horizontal */}
                            <Box w={"1px"} bg={'black'} mx={2}></Box>
                            <Box w={'100%'} minW={"6rem"} maxW={"12rem"} bg={'gray.300'} py={2} textAlign={'center'} rounded={'lg'}>
                                <Text fontSize={'16px'}>สมัครสมาชิก</Text>
                            </Box>
                        </Flex>
                    </DrawerHeader>
                    <DrawerBody>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, beatae possimus. Eligendi, commodi facilis recusandae sit odio voluptatibus ab error?</p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default DrawerMobile