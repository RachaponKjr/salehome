'use client'
import { Box, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Grid, GridItem, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react'

// icons
import { FaTh, FaBan } from 'react-icons/fa';

const DrawerMobile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const loopManu = [
        {
            name: 1,
        },
        {
            name: 2,
        },
        {
            name: 3,
        },
        {
            name: 4,
        },
        {
            name: 5,
        },
        {
            name: 6,
        },
        {
            name: 7,
        },
        {
            name: 8,
        },
    ]
    return (
        <>
            {/* ส่วนที่เเสดงที่ Manu Footer */}
            <GridItem display={'flex'} flexDirection={"column"} alignItems={"center"} _active={{ bg: "gray.500" }} gap={0.5} pt={3} onClick={onOpen}>
                <FaTh size={30} />
                <Text fontSize={'10px'} mt={1.5}>เพิ่มเติม</Text>
            </GridItem>

            <Drawer onClose={onClose} isOpen={isOpen} size={"full"} >
                <DrawerOverlay />
                <DrawerContent py={"32px"}>
                    <DrawerCloseButton size={"lg"} outline={"none"} />
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
                        <Box w={'100%'} h={'max-content'}>
                            {/* ไม่ควรใช้ map 
                            ใช้ map ในส่วนนี้ เพื่อทำให้ code ดูไม่เยอะ */}
                            <Grid templateColumns={"repeat(4, 1fr)"} gap={2}>
                                {
                                    loopManu.map((item, index) => {
                                        return (
                                            <GridItem display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={1}>
                                                {/* Icon  */}
                                                <Box w={"100%"} border={"1px solid black"} aspectRatio={'1/1'} display={'flex'} alignItems={'center'} justifyContent={'center'} rounded={'10px'}>
                                                    <FaBan style={{width: "100%", height: "100%",padding: "0.6rem"}} />
                                                </Box>
                                                <Text variant={'h5'} fontSize={'12px'} w={"100%"} textAlign={'center'} className='line-clamp1'>{item.name}</Text>
                                            </GridItem>
                                        )
                                    })
                                }
                            </Grid>
                        </Box>
                       {/* Divider เส้น กั้นกลาง */}
                       <Box w={'100%'} h={'1px'} bg={'black'} my={2}></Box>
                        <Box w={'100%'} h={'max-content'} mt={4}>
                             {/* ไม่ควรใช้ map 
                            ใช้ map ในส่วนนี้ เพื่อทำให้ code ดูไม่เยอะ */}
                            <Grid templateColumns={'repeat(4, 1fr)'} gap={2}>
                                {
                                    loopManu.map((item, index) => {
                                        return (
                                            <GridItem display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={1}>
                                                {/* Icon  */}
                                                <Box w={"100%"} border={"1px solid black"} aspectRatio={'1/1'} display={'flex'} alignItems={'center'} justifyContent={'center'} rounded={'10px'}>
                                                    <FaBan style={{width: "100%", height: "100%",padding: "0.6rem"}} />
                                                </Box>
                                                <Text variant={'h5'} fontSize={'12px'} w={"100%"} textAlign={'center'} className='line-clamp1'>{item.name}</Text>
                                            </GridItem>
                                        )
                                    })
                                } 
                            </Grid>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default DrawerMobile