import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'

import { FaHeadset, FaEdit } from "react-icons/fa";
import { BiHomeAlt } from "react-icons/bi";

import Link from 'next/link';
const MobileMenu = () => {
    return (
        <>
            <Flex bg={'#02685C'} w={'100%'} display={{ base: "flex", md: "none" }} h={'72px'} position={'fixed'} bottom={0} zIndex={1000} color={'white'}>
                <Grid templateColumns={'repeat(3, 1fr)'} w={'100%'}>
                    <GridItem display={'flex'} flexDirection={"column"} alignItems={"center"} _active={{ bg: "gray.500" }} gap={0.5} pt={2} position={"relative"}>
                            <Link href="/" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <BiHomeAlt size={30} />
                                {/* กล่องเเสดงว่ามีอะไรใหม่ */}
                                {/* <Box position={'absolute'} top={0} right={-2} bg={'red'} w={'16px'} h={'16px'} color={'white'} fontSize={'10px'} textAlign={'center'} rounded={'full'}>N</Box> */}
                                <Text fontSize={'10px'} mt={1.5}>หน้าเเรก</Text>
                            </Link>
                    </GridItem>
                    <GridItem display={'flex'} flexDirection={"column"} alignItems={"center"} _active={{ bg: "gray.500" }} gap={0.5} pt={2} position={"relative"}>
                        <Link href="/blogs" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <FaEdit size={28} />
                            <Text fontSize={'10px'} mt={1.5}>บทความเเนะนำ</Text>
                        </Link>
                    </GridItem>
                    <GridItem display={'flex'} flexDirection={"column"} alignItems={"center"} _active={{ bg: "gray.500" }} gap={0.5} pt={2} position={"relative"}>
                        <Link href="/contact" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <FaHeadset size={28} />
                            <Text fontSize={'10px'} mt={1.5}>ติดต่อเรา</Text>
                        </Link>
                    </GridItem>
                </Grid>
            </Flex>
        </>
    )
}

export default MobileMenu