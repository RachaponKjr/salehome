import { Box, Divider, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

// function import
import { reformatDate } from '@/utils/reformatDate';

// icons import
import bathroom from '@/icons/bathroom.png'
import area from '@/icons/area.png'
import bedroom from '@/icons/bedroom.png'
const LeftSide = ({ res }) => {
    return (
        <>
            <Box w={{ base: "100%", lg: "70%" }} h={"min-content"} >
                <Flex justifyContent={"end"} px={4} flexDirection={"column"} color={"#676767"} gap={4} boxShadow={"lg"} rounded={"10px"} p={4}>
                    {res.location_home}
                    <Text variant={'h2'} fontSize={'28px'} textAlign={"right"} fontWeight={'bold'} color={'#EE0000'}>
                        ราคา {res.price_home}
                    </Text>
                </Flex>
                {/* ข้อมูลการอัพเดต */}
                <Flex gap={4} flexDirection={'column'} mt={4}>
                    {/* หัวเรื่อง Head */}
                    <Text variant={'h3'} fontSize={'18px'}>ข้อมูลการอัพเดตประกาษนี้</Text>
                    {/* รายละเอียด */}
                    <Text variant={'h6'} fontSize={'13px'}>{reformatDate(res.createdAt)}</Text>
                </Flex>
                {/* ข้อมูลอสังหา */}
                <Flex gap={4} flexDirection={'column'} mt={4}>
                    {/* หัวเรื่อง Head */}
                    <Text variant={'h3'} fontSize={'18px'}>ข้อมูลอสังหาฯ</Text>
                    {/* รายละเอียด */}
                    <Grid templateColumns={"repeat(auto-fit, minmax(100px, 150px))"} color={'#676767'} gap={{ base: 1, md: 4 }}>
                        {/* เเสดงขนานห้อง */}
                        <GridItem border={"1px solid #676767"} rounded={"10px"} py={2} px={2} m={1}>
                            <Flex alignItems={"center"} gap={2} h={"100%"}>
                                <Image src={area} alt="image" />
                                <Text variant={'h6'} fontSize={'14px'} mt={2} whiteSpace={'nowrap'}>{res.centimate != null ? res.centimate : '-'}</Text>
                            </Flex>
                        </GridItem>
                        {/* เเสดงจำนวนห้องนอน */}
                        <GridItem border={"1px solid #676767"} rounded={"10px"} py={2} px={3} m={1}>
                            <Flex alignItems={"center"} gap={4} h={"100%"}>
                                <Box w={10} h={10} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                    <Image src={bedroom} alt="image" />
                                </Box>
                                <Text variant={'h6'} fontSize={'14px'} mt={2}>{res.bedroom != null ? `${res.bedroom} ห้อง` : '-'}</Text>
                            </Flex>
                        </GridItem>
                        {/* เเสดงจำนวนห้องน้ำ */}
                        <GridItem border={"1px solid #676767"} rounded={"10px"} py={2} px={3} m={1}>
                            <Flex alignItems={"center"} gap={4} h={"100%"}>
                                <Box w={10} h={10} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                    <Image src={bathroom} alt="image" />
                                </Box>
                                <Text variant={'h6'} fontSize={'14px'} mt={2}>{res.bathroom != null ? `${res.bathroom} ห้อง` : '-'}</Text>
                            </Flex>
                        </GridItem>
                    </Grid>

                </Flex>
                {/* Divider */}
                <Divider my={4} />
                {/* รายละเอียด */}
                <Box h={"min-content"}>
                    <Text variant={'h3'} fontSize={'18px'}>รายละเอียด</Text>
                    <Box mt={2}>
                        <Text variant={'h2'} color={'#676767'} fontSize={'16px'}>{res.detail_home}</Text>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default LeftSide