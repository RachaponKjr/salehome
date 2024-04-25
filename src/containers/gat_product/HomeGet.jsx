'use client'
import React, { useCallback, useState } from 'react'
import Image from 'next/image';
import dynamic from 'next/dynamic';

// chakra import
import { Box, Container, Divider, Flex, Grid, GridItem, Text } from "@chakra-ui/react";

// function import
import { chacklenghts } from '@/utils/chacklenghts';

// lib import Gallery
import { mapImages } from '@/utils/mapImages';
import Carousel from '@/components/Carousel';

export const LeftSide = dynamic(() => import('./components/LeftSide'), { ssr: false })
export const RightSide = dynamic(() => import('./components/RightSide'), { ssr: false })

function HomeGet({ datafetch }) {
    // ดึง data
    const res = datafetch?.data
    const [selectImg, setSelectImg] = useState(null)
    //เรียกใช้ function
    const chacklenght = useCallback(chacklenghts(res), [res])
    // mapimages
    const images = useCallback(mapImages(res), [res])

    // debug
    // console.log(chacklenght)
    // console.log(images)
    // console.log(res)
    return (
        <>
            <Container maxW={"container.xl"} py={"8px"}>
                {/* ส่วนหัวข้อของหน้า */}
                <Text variant={"h1"} fontSize={"24px"} fontWeight={"bold"} my={"16px"} color={'#676767'}>{res.name_home}</Text>
                <Box boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'} rounded={"10px"} mb={"16px"} p={4}>
                    {/* รูปที่ใช้เเสดง */}
                    <Box w={"100%"} h={"500px"} my={"16px"} position={"relative"}>
                        {/* รูปที่ 1 */}
                        <Grid
                            templateRows={{ base: "repeat(3, 1fr)", md: "repeat(3, 1fr)" }}
                            templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(5, 1fr)" }}
                            h={"100%"}
                            gap={2}
                        >
                            <GridItem rowSpan={{ base: 2, md: 3 }} colSpan={{ base: 3, md: 3 }} overflow={"hidden"} rounded={{ base: "none", md: "10px 0 0 10px" }} onClick={() => setSelectImg(0)}>
                                <Box w={"100%"} h={"100%"} position={"relative"} cursor={"pointer"}>
                                    <Image src={`http://18.140.121.108:5500/public/img_all/${res.img_all[0]}`} alt={`รูปภาพ + ${res.detail_product}`} fill style={{objectFit:'cover'}} />
                                </Box>
                            </GridItem>
                            <GridItem colSpan={{ base: 1, md: 2 }} rowSpan={{ base: 1, md: 2 }} overflow={"hidden"} rounded={{ base: "none", md: "0 10px 0 0" }} onClick={() => setSelectImg(1)}>
                                <Box w={"100%"} h={"100%"} position={"relative"} cursor={"pointer"}>
                                    <Image src={`http://18.140.121.108:5500/public/img_all/${res.img_all[1]}`} alt={`รูปภาพ + ${res.detail_product}`} fill style={{objectFit:'cover'}} />
                                </Box>
                            </GridItem>
                            <GridItem colSpan={1} overflow={"hidden"} >
                                <Box w={"100%"} h={"100%"} position={"relative"} cursor={"pointer"} onClick={() => setSelectImg(2)}>
                                    <Image src={`http://18.140.121.108:5500/public/img_all/${res.img_all[2]}`} alt={`รูปภาพ + ${res.detail_product}`} fill style={{objectFit:'cover'}} />
                                </Box>
                            </GridItem>
                            <GridItem colSpan={1} overflow={"hidden"} rounded={{ base: "none", md: "0 0 10px 0" }}>
                                {res.img_all[3] ? <Box w={"100%"} h={"100%"} position={"relative"} cursor={"pointer"} onClick={() => setSelectImg(3)}>
                                    <Image src={`http://18.140.121.108:5500/public/img_all/${res.img_all[3]}`} alt={`รูปภาพ + ${res.detail_product}`} fill style={{objectFit:'cover'}} />
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
                        <LeftSide res={res} />
                        {/* Divider V */}
                        <Divider orientation='vertical' h={'500px'} display={{ base: "none", lg: "block" }} />
                        {/* ฝั่งขวา */}
                        <RightSide />
                    </Flex>
                </Box>
            </Container>
            <Box>
            {
                selectImg === null ? null : <Carousel images={images} selectImg={selectImg} setSelectImg={setSelectImg} />
            }
            </Box>
        </>
    )
}

export default HomeGet