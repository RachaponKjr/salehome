'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import Image from 'next/image';

// chakra import
import { Avatar, Box, Container, Divider, Flex, Grid, GridItem, Img, Text } from "@chakra-ui/react";

// components import
import Loading from '@/components/Loading';

// icons import
import { FaPhoneAlt, FaFacebook, FaFacebookMessenger, FaChevronRight } from "react-icons/fa";
import bathroom from '../../../icons/bathroom.png'
import area from '../../../icons/area.png'
import bedroom from '../../../icons/bedroom.png'


// function import
import { chacklenghts } from '@/utils/chacklenghts';
import { reformatDate } from '@/utils/reformatDate';

// lib import Gallery
import { mapImages } from '@/utils/mapImages';
import Carousel from '@/components/Carousel';

function HomeGet() {
    // ดึง Params
    const params = useParams();
    const [res, setRes] = useState([])
    const [loading, setLoading] = useState(false)
    const [selectImg, setSelectImg] = useState(null)

    //เรียกใช้ function
    const chacklenght = useCallback(chacklenghts(res), [res])
    // mapimages
    const images = useCallback(mapImages(res), [res])
    useEffect(() => {
        setLoading(false)
        const fetchData = async () => {
            setLoading(false)
            // ดึงข้อมูล
            try {
                const res = await fetch(`http://18.140.121.108:5500/getsalehome/${params.id}`, {
                    method: 'GET',
                    next: { revalidate: 0 }
                })
                const jsonData = await res.json()
                const { data } = jsonData
                setRes(data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(true)
            }
        }
        fetchData()
        return () => {
            setRes([])
        }
    }, [])


    // debug
    // console.log(chacklenght)
    // console.log(images)
    console.log(res)
    return (
        <>
            {
                // load ระหว่างรอ fetch ข้อมูล
                !loading ? <Loading /> :
                    (
                        <>
                            <Container maxW={"container.xl"} py={"8px"}>
                                <Box boxShadow={"lg"} rounded={"10px"} p={4}>
                                    {/* ส่วนหัวข้อของหน้า */}
                                    <Text variant={"h1"} fontSize={"24px"} fontWeight={"bold"} mb={"16px"}>{res.name_home}</Text>
                                    {/* รูปที่ใช้เเสดง */}
                                    <Box w={"100%"} h={"500px"} my={"16px"} position={"relative"}>
                                        {/* รูปที่ 1 */}
                                        <Grid
                                            templateRows={{ base: "repeat(3, 1fr)", md: "repeat(3, 1fr)" }}
                                            templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(5, 1fr)" }}
                                            h={"100%"}
                                            gap={2}
                                        >
                                            <GridItem rowSpan={{ base: 2, md: 3 }} colSpan={{ base: 3, md: 3 }} overflow={"hidden"} onClick={() => setSelectImg(0)}>
                                                <Box w={"100%"} h={"100%"} position={"relative"} cursor={"pointer"}>
                                                    <Image src={`http://18.140.121.108:5500/public/img_all/${res.img_all[0]}`} alt="image" layout="fill" objectFit="cover" />
                                                </Box>
                                            </GridItem>
                                            <GridItem colSpan={{ base: 1, md: 2 }} rowSpan={{ base: 1, md: 2 }} overflow={"hidden"} onClick={() => setSelectImg(1)}>
                                                <Box w={"100%"} h={"100%"} position={"relative"} cursor={"pointer"}>
                                                    <Image src={`http://18.140.121.108:5500/public/img_all/${res.img_all[1]}`} alt="image" layout="fill" objectFit="cover" />
                                                </Box>
                                            </GridItem>
                                            <GridItem colSpan={1} overflow={"hidden"} >
                                                <Box w={"100%"} h={"100%"} position={"relative"} cursor={"pointer"} onClick={() => setSelectImg(2)}>
                                                    <Image src={`http://18.140.121.108:5500/public/img_all/${res.img_all[2]}`} alt="image" layout="fill" objectFit="cover" />
                                                </Box>
                                            </GridItem>
                                            <GridItem colSpan={1} overflow={"hidden"} >
                                                {res.img_all[3] ? <Box w={"100%"} h={"100%"} position={"relative"} cursor={"pointer"} onClick={() => setSelectImg(3)}>
                                                    <Image src={`http://18.140.121.108:5500/public/img_all/${res.img_all[3]}`} alt="image" layout="fill" objectFit="cover" />
                                                    {chacklenght
                                                        ? <Box position={'absolute'} w={'100%'} h={'100%'} bg={'rgba(0,0,0,0.5)'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                                            <Text color={'white'} fontSize={24}>+{chacklenght} รูป</Text>
                                                        </Box>
                                                        : null}
                                                </Box> : null}
                                            </GridItem>
                                        </Grid>
                                    </Box>
                                    {/* ส่วนข้อมูล */}
                                    <Flex gap={3} flexDirection={{ base: "column", lg: "row" }}>
                                        {/* ฝั่งซ้าย */}
                                        <Box w={{ base: "100%", lg: "70%" }} h={"min-content"} >
                                            <Flex justifyContent={"end"} px={4} flexDirection={"column"} gap={4} boxShadow={"lg"} rounded={"10px"} p={4}>
                                                {res.location_home}
                                                <Text variant={'h2'} fontSize={'28px'} textAlign={"right"} fontWeight={'bold'}>
                                                    ราคา {res.price_home}
                                                </Text>
                                            </Flex>
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
                                                <Grid templateColumns={"repeat(auto-fit, minmax(100px, 150px))"} gap={{ base: 1, md: 4 }}>
                                                    {/* เเสดงขนานห้อง */}
                                                    <GridItem border={"1px solid black"} rounded={"10px"} py={2} px={2} m={1}>
                                                        <Flex alignItems={"center"} gap={2} h={"100%"}>
                                                            <Image src={area} alt="image" />
                                                            <Text variant={'h6'} fontSize={'14px'} mt={2} whiteSpace={'nowrap'}>{res.centimate != null ? res.centimate : '-'}</Text>
                                                        </Flex>
                                                    </GridItem>
                                                    {/* เเสดงจำนวนห้องนอน */}
                                                    <GridItem border={"1px solid black"} rounded={"10px"} py={2} px={3} m={1}>
                                                        <Flex alignItems={"center"} gap={4} h={"100%"}>
                                                            <Box w={10} h={10} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                                                <Image src={bedroom} alt="image" />
                                                            </Box>
                                                            <Text variant={'h6'} fontSize={'14px'} mt={2}>{res.bedroom != null ? `${res.bedroom} ห้อง` : '-'}</Text>
                                                        </Flex>
                                                    </GridItem>
                                                    {/* เเสดงจำนวนห้องน้ำ */}
                                                    <GridItem border={"1px solid black"} rounded={"10px"} py={2} px={3} m={1}>
                                                        <Flex alignItems={"center"} gap={4} h={"100%"}>
                                                            <Image src={bathroom} alt="image" />
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
                                            <Flex w={"100%"} h={"min-content"} bg={'whitesmoke'} alignItems={"center"} boxShadow={"lg"} px={4} py={4} gap={4} rounded={"10px"}>
                                                <Avatar />
                                                <Box w={"100%"} h={"min-content"}>
                                                    {/* ชื่อผู้ขาย */}
                                                    <Text variant={'h4'} color={'black'}> Lorem, ipsum dolor.</Text>
                                                </Box>
                                            </Flex>
                                            {/* ช่องทางการติดต่อ */}
                                            <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'start'} gap={2} my={4}>
                                                <Box mx={"auto"}><Text variant={'h5'} fontSize={'18px'}>ช่องทางติดต่อ</Text></Box>
                                                {/* Phone // facebook // Messenger */}
                                                <Flex gap={2} flexDirection={'column'} >
                                                    {/* phone contact */}
                                                    <Box display={'flex'} gap={4} alignItems={'center'}>
                                                        <Box w={"3rem"} aspectRatio={1} boxShadow={'lg'} display={'flex'} justifyContent={'center'} alignItems={'center'} rounded={'lg'} cursor={'pointer'} color={'#4A90E4'}>
                                                            <FaPhoneAlt size={25} />
                                                        </Box>
                                                        <Text>xxx-xxxxxxx</Text>
                                                    </Box>
                                                    {/* Email contact */}
                                                    <Box display={'flex'} gap={4} alignItems={'center'}>
                                                        <Box w={"3rem"} aspectRatio={1} boxShadow={'lg'} display={'flex'} justifyContent={'center'} alignItems={'center'} rounded={'lg'} cursor={'pointer'} color={'#4A90E4'}><FaFacebook size={25} /></Box>
                                                        <Text>xxxx@gmail.com</Text>
                                                    </Box>
                                                    {/* line id */}
                                                    <Box display={'flex'} gap={4} alignItems={'center'}>
                                                        <Box w={"3rem"} aspectRatio={1} boxShadow={'lg'} display={'flex'} justifyContent={'center'} alignItems={'center'} rounded={'lg'} cursor={'pointer'} color={'#4A90E4'}><FaFacebookMessenger size={25} /></Box>
                                                        <Text>@xxxx.xx</Text>
                                                    </Box>
                                                </Flex>
                                            </Flex>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Container>
                            {
                                selectImg === null ? null : <Carousel images={images} selectImg={selectImg} setSelectImg={setSelectImg} />
                            }

                        </>
                    )
            }
        </>
    )
}

export default HomeGet