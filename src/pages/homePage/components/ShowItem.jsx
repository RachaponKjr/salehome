'use client'
import { Box, Divider, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

import location from '../../../icons/location.png'
import bathroom from '../../../icons/bathroom.png'
import area from '../../../icons/area.png'
import bedroom from '../../../icons/bedroom.png'


function ShowItem(props) {
    const data = props.data
    const search = props.search
    const [newData, setNewData] = React.useState([])

    useEffect(() => {
        filterData()
    }, [data])
    // fillter data
    function filterData() {
        if (search) {
            const newData = data.filter((item) => {
                if (item.detail_product === search) {
                    return item
                } else if (search === 'ทั้งหมด') {
                    return item
                }
            })
            setNewData(newData)
            console.log(newData)
        }
    }
    // debug
    // console.log(props.data)
    // console.log(props)
    // console.log(data)
    return (
        <>
            <Grid gridTemplateColumns={{ base: "repeat(2, minmax(0, 1fr))", sm: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}>
                {newData.map((item) => (
                    <GridItem w={"100%"} p={{ base: "4px", md: "8px" }} key={item.number_home}>
                        <Flex w={"100%"} h={"100%"} flexDirection={"column"} overflow={"hidden"} borderRadius={"10px"} boxShadow={'md'}>
                            {/* รูปภาพใน card */}
                            <Box w={"100%"} h={{ base: "6rem", md: "12rem" }} position={"relative"} bg={"gray.200"} cursor={"pointer"} _hover={{ bg: "gray.300" }}>
                                <Link href={"/product/" + item._id}>
                                    <Image src={`http://18.140.121.108:5500/public/img_all/${item.img_all[0]}`} alt="image" fill className='image_hover' />
                                </Link>
                                <Box boxShadow={"md"} bg={'rgba(52,148,128,0.8)'} position={"absolute"} top={2} left={2} px={4} py={1} rounded={'5px'} zIndex={10}>
                                    <Text variant={'h4'} color={'white'} fontSize={{ base: "8px", md: "12px" }}>Sale</Text>
                                </Box>
                            </Box>
                            {/* ข้อมูลของสินค้า */}
                            <Flex flexDirection={"column"} zIndex={10} gap={"4px"} py={1} px={{ base: 1, md: 2 }} bg={"#FAFAFA"} >
                                {/* หัวข้อของสินค้า */}
                                <Link href={"/product/" + item._id} fontSize={{ base: "12px", md: "14px" }} cursor={"pointer"} className='line-clamp1'>
                                    <Text variant={'h1'} color={'#00A94F'} fontWeight={'bold'}>
                                        {item.name_home}
                                    </Text>
                                </Link>
                                {/* ข้อมูลตำเเหน่ง */}
                                <Box display={"flex"} alignItems={"center"} gap={"4px"} my={"4px"} color={'#676767'}>
                                    <Image src={location} alt="location" width={20} height={20} />
                                    <Text variant={'h2'} fontSize={{ base: "12px", md: "14px" }} className='line-clamp1'>{item.province}</Text>
                                </Box>
                                <Flex justifyContent={"space-between"} gap={2} flexDirection={{ base: "column", md: "row" }}>
                                    <Box color={'#676767'} w={"max-content"} className='line-clamp1'>
                                        <Text variant={'h2'} fontSize={{ base: "12px", md: "14px" }}>{item.detail_product}</Text>
                                    </Box>
                                    {/* รหัสสินค้า:  */}
                                    <Box color={'#676767'} gap={2} display={{ base: "none", md: "flex" }}>
                                        <Text variant={'h2'} fontSize={{ base: "12px", md: "14px" }} w={"100%"} className='line-clamp1'>รหัสสินค้า: {item.number_home}</Text>
                                    </Box>
                                </Flex>
                                {/* ขนานของห้อง จำนวนห้องต่างๆ */}
                                <Flex justifyContent={"space-between"} flexDirection={{ base: "column", md: "row" }} mt={"8px"} gap={{ base: "8px", md: "16px" }}>
                                    <Flex gap={2} minW={{ base: "100%", md: "max-content" }}>
                                        <Box display={'flex'} gap={"8px"} color={'#676767'} alignItems={"center"}>
                                            <Image src={bedroom} alt="bathroom" width={25} height={20} />
                                            <Text variant={"h6"} fontSize={{ base: "12px", md: "14px" }}>{item.bedroom != null ? `${item.bedroom}` : "-"}</Text>
                                        </Box>
                                        <Divider orientation='vertical' />
                                        <Box display={'flex'} gap={"8px"} color={'#676767'}>
                                            <Image src={bathroom} alt="bathroom" width={25} height={20} alignItems={"center"} />
                                            <Text variant={"h6"} fontSize={{ base: "12px", md: "14px" }}>{item.bathroom != null ? `${item.bathroom}` : "-"}</Text>
                                        </Box>
                                    </Flex>
                                    <Box display={'flex'} w={'100%'} gap={"8px"} color={'#676767'} alignItems={"center"} justifyContent={{ base: "start", md: "end" }} >
                                        <Image src={area} alt="bathroom" width={25} height={20} />
                                        <Text variant={"h6"} fontSize={{ base: "12px", md: "14px" }} className='line-clamp1'>{item.centimate !== null ? item.centimate : "0000"}</Text>
                                    </Box>
                                </Flex>
                                <Box px={2}>
                                    <Divider />
                                </Box>
                                <Box my={2} px={2}>
                                    <Text variant={'h3'} fontSize={{ base: "14px", md: "20px" }} whiteSpace={"nowrap"} fontWeight={"bold"} textAlign={"right"} color={'#EE0000'}>{item.price_home} บาท</Text>
                                </Box>
                            </Flex>
                        </Flex>
                    </GridItem>
                ))
                }
            </Grid>
        </>
    )
}

export default ShowItem