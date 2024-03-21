'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { Avatar, Box, Container, Divider, Flex, Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react";

import { FaPhoneAlt, FaFacebook, FaFacebookMessenger, FaChevronRight } from "react-icons/fa";
import { FaBed, FaBath } from "react-icons/fa";
import { BiShapeTriangle } from "react-icons/bi";
import { GetData } from '@/utils/getApi';
import { useParams } from 'next/navigation';
import { reformatDate } from '@/utils/reformatDate';
function HomeGet() {
    const params = useParams();
    const [res, setRes] = useState([])
    const optimizedFetch = useMemo(() => fetch(`http://18.140.121.108:5500/getsalehome/${params.id}`, { method: 'GET', next: { revalidate: 0 } }), [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await optimizedFetch
                const resData = await res.json()
                const { data } = resData
                setRes(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
        return () => {
            setRes([])
        }
    }, [])
    console.log(res)

    return (
        <>
            <Container maxW={"container.xl"} py={"8px"}>
                <Box boxShadow={"lg"} rounded={"10px"} p={4}>
                    {/* ส่วนหัวข้อของหน้า */}
                    <Text variant={"h1"}>{res.name_home}</Text>
                    {/* รูปที่ใช้เเสดง */}
                    <Box w={"100%"} h={"500px"} my={"16px"}>
                        {/* รูปที่ 1 */}
                        <Grid
                            templateRows={{base:"repeat(3, 1fr)",md:"repeat(3, 1fr)"}}
                            templateColumns={{base:"repeat(3, 1fr)",md:"repeat(5, 1fr)"}}
                            h={"100%"}
                            gap={2}
                        >
                            <GridItem rowSpan={{base:2,md:3}} colSpan={{base:3,md:3}} >
                            </GridItem>
                            <GridItem colSpan={{base:1,md:2}} rowSpan={{base:1,md:2}} bg="whitesmoke" />
                            <GridItem colSpan={1} bg="whitesmoke" />
                            <GridItem colSpan={1} bg="whitesmoke" />
                        </Grid>
                    </Box>
                    {/* ส่วนข้อมูล */}
                    <Flex gap={3} flexDirection={{ base: "column", lg: "row" }}>
                        {/* ฝั่งซ้าย */}
                        <Box w={{ base: "100%", lg: "70%" }} h={"min-content"} >
                            {/* กล่องเเสดงรายละเอียดของสินค้า */}
                            <Box w={"100%"} h={"min-content"} p={4} boxShadow={"lg"} rounded={"10px"}>
                                <Text variant={"h1"} className="line-clamp">{res.location_home}</Text>
                                <Flex gap={2} color={"#4A90E4"} my={2} ><Text variant={'h6'} display={'flex'} alignItems={'center'} gap={1} cursor={'pointer'}>เพิ่มเติม <FaChevronRight /></Text> </Flex>
                                <Flex justifyContent={'end'} color={'black'}>
                                    <Text variant={'h4'} fontSize={'24px'} fontWeight={'bold'}>{res.price_home} บาท</Text>
                                </Flex>
                            </Box>
                            {/* ข้อมูลการอัพเดต */}
                            <Flex gap={4} flexDirection={'column'} mt={4}>
                                {/* หัวเรื่อง Head */}
                                <Text variant={'h3'} fontSize={'15px'}>ข้อมูลการอัพเดตประกาษนี้</Text>
                                {/* รายละเอียด */}
                                <Text variant={'h6'} fontSize={'13px'}>{reformatDate(res.createdAt)}</Text>
                            </Flex>
                            {/* ข้อมูลอสังหา */}
                            <Flex gap={4} flexDirection={'column'} mt={4}>
                                {/* หัวเรื่อง Head */}
                                <Text variant={'h3'} fontSize={'15px'}>ข้อมูลอสังหาฯ</Text>
                                {/* รายละเอียด */}
                                <Grid templateColumns={"repeat(auto-fit, minmax(100px, 150px))"}  gap={{base:1,md:4}}>
                                    <GridItem border={"1px solid black"} rounded={"10px"} py={2} px={2} m={1}>
                                        <Flex alignItems={"center"} gap={2} h={"100%"}>
                                            <BiShapeTriangle size={'30px'}/>
                                            <Text variant={'h6'} fontSize={'14px'} mt={2} whiteSpace={'nowrap'}>{res.centimate != null ? res.centimate : '-'}</Text>
                                        </Flex>
                                    </GridItem>
                                    <GridItem border={"1px solid black"} rounded={"10px"} py={2} px={3} m={1}>
                                        <Flex alignItems={"center"} gap={4} h={"100%"}>
                                            <Box w={5} h={5}>
                                            <FaBed size={'30px'}/>
                                            </Box>
                                            <Text variant={'h6'} fontSize={'14px'} mt={2}>{res.bedroom != null ? `${res.bedroom} ห้อง` : '-'}</Text>
                                        </Flex>
                                    </GridItem>
                                    <GridItem border={"1px solid black"} rounded={"10px"} py={2} px={3} m={1}>
                                        <Flex alignItems={"center"} gap={4} h={"100%"}>
                                            <FaBath size={'30px'}/>
                                            <Text variant={'h6'} fontSize={'14px'} mt={2}>{res.bathroom != null ? `${res.bathroom} ห้อง` : '-'}</Text>
                                        </Flex>
                                    </GridItem>
                                </Grid>
                            </Flex>
                            {/* Divider */}
                            <Divider my={4} />
                            {/* รายละเอียด */}
                            <Box h={"min-content"}>
                                <Text variant={'h3'} fontSize={'15px'}>รายละเอียด</Text>
                                <Box mt={2}>
                                    <Text>{res.detail_home}</Text>
                                </Box>
                            </Box>
                        </Box>
                        {/* Divider V */}
                        <Divider orientation='vertical' h={'500px'} display={{ base: "none", lg: "block" }} />
                        {/* ฝั่งขวา */}
                        <Box w={{ base: "100%", sm: "20rem", lg: "30%" }} h={"min-content"} p={2}>
                            {/* ข้อมูล ผู้ขาย */}
                            <Flex w={"100%"} h={"min-content"} bg={'whitesmoke'} boxShadow={"lg"} px={4} py={4} gap={2} rounded={"10px"}>
                                <Avatar />
                                <Box w={"100%"} h={"min-content"}>
                                    <Text variant={'h4'} color={'black'}>ชื่อผู้ขาย</Text>
                                    <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2} justifyContent={'end'} >
                                        <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2} cursor={'pointer'} color={'#4A90E4'} >
                                            <Text variant={'h5'}>โปรไฟล์ผู้ขาย</Text>
                                            <FaChevronRight />
                                        </Box>
                                    </Box>
                                </Box>
                            </Flex>
                            {/* ช่องทางการติดต่อ */}
                            <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={2} mt={2}>
                                <Box><Text variant={'h5'} fontSize={'18px'}>ช่องทางติดต่อ</Text></Box>
                                {/* Phone // facebook // Messenger */}
                                <Flex gap={2} >
                                    <Box w={"3rem"} aspectRatio={1} boxShadow={'lg'} display={'flex'} justifyContent={'center'} alignItems={'center'} rounded={'lg'} cursor={'pointer'} color={'#4A90E4'}><FaPhoneAlt size={25} /></Box>
                                    <Box w={"3rem"} aspectRatio={1} boxShadow={'lg'} display={'flex'} justifyContent={'center'} alignItems={'center'} rounded={'lg'} cursor={'pointer'} color={'#4A90E4'}><FaFacebook size={25} /></Box>
                                    <Box w={"3rem"} aspectRatio={1} boxShadow={'lg'} display={'flex'} justifyContent={'center'} alignItems={'center'} rounded={'lg'} cursor={'pointer'} color={'#4A90E4'}><FaFacebookMessenger size={25} /></Box>
                                </Flex>
                                {/* เเจ้งรายงาน */}
                                <Box w={"100%"} h={"min-content"} mt={2} color={'#F25C62'} border={'1px solid #F25C62'} px={2} py={3} rounded={'lg'} cursor={'pointer'} transitionDuration={'.3s'} _hover={{ bg: '#F25C62', color: 'white' }}>
                                    <Text textAlign={'center'}>เเจ้งรายงาน / ประกาศไม่เหมาะสม</Text>
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </Container>
        </>
    )
}

export default HomeGet