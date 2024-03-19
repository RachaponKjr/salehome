'use client'
import { Box, Divider, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useMemo } from 'react'
import { BiShapeTriangle } from 'react-icons/bi'
import { FaBath, FaBed } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'


function ShowItem() {
    const [data, setData] = React.useState([])
    const optimizedFetch = useMemo(() => fetch('http://18.140.121.108:5500/getsalehome', { method: 'GET' ,next: { revalidate: 0 } }), [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await optimizedFetch
                const jsonData = await res.json()
                const { data } = jsonData
                setData(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()

        return () => {
            setData([])
        }
    }, [])
    return (
        <>
            {data.map((item, index) => (
                <GridItem w={"100%"} p={{ base: "4px", md: "8px" }} key={item.number_home}>
                    <Flex w={"100%"} h={"100%"} flexDirection={"column"} overflow={"hidden"} borderRadius={"10px"} boxShadow={'md'}>
                        {/* รูปภาพใน card */}
                        <Box w={"100%"} h={{ base: "6rem", md: "12rem" }} position={"relative"} bg={"gray.200"} cursor={"pointer"} _hover={{ bg: "gray.300" }}>
                            <Link href={"/" + item.number_home}>
                                {/* <Image src={} alt="image" fill className='image_hover' /> */}
                            </Link>
                        </Box>
                        {/* ข้อมูลของสินค้า */}
                        <Flex flexDirection={"column"} zIndex={10} gap={"4px"} py={1} px={{ base: 1, md: 2 }} bg={"#FAFAFA"} >
                            {/* หัวข้อของสินค้า */}
                            <Link href={"/" + item.number_home} fontSize={{ base: "12px", md: "14px" }} cursor={"pointer"} className='line-clamp'>
                                <Text variant={'h1'}>
                                    {item.name_home}
                                </Text>
                            </Link>
                            {/* รหัสสินค้า:  */}
                            <Box>
                                <Text variant={'h2'} fontSize={{ base: "8px", md: "12px" }}>รหัสสินค้า: {item.number_home}</Text>
                            </Box>
                            {/* ข้อมูลตำเเหน่ง */}
                            <Box display={"flex"} alignItems={"center"} gap={"4px"} my={"4px"}>
                                <IoLocationSharp size={15} />
                                <Text variant={'h2'} fontSize={{ base: "8px", md: "12px" }} className='line-clamp1'>{item.province}</Text>
                            </Box>
                            {/* ข้อมูลสินค้า */}
                            <Box>
                                <Text variant={'h6'} fontSize={{ base: "8px", md: "12px" }} className='line-clamp2'>{item.detail_home}</Text>
                            </Box>

                            {/* เส้นกัน */}
                            <Box px={2}>
                                <Divider />
                            </Box>
                            {/* ขนานของห้อง จำนวนห้องต่างๆ */}
                            <Grid gridTemplateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap={"2px"} my={"4px"} alignItems={"center"}>
                                {/* ขนานของห้อง */}
                                <GridItem >
                                    <Box display={'flex'} gap={"2px"}>
                                        <BiShapeTriangle size={15} />
                                        <Text variant={"h6"} wordBreak={"break-all"} whiteSpace={"nowrap"} fontSize={{ base: "8px", md: "12px" }}>{item.centimate !== null ? item.centimate : "-"}</Text>
                                    </Box>
                                </GridItem>
                                {/* จำนวนห้องนอน */}
                                <GridItem ml={2}>
                                    <Box display={'flex'} gap={"4px"}>
                                        <FaBed size={15} />
                                        <Text variant={"h6"} fontSize={{ base: "8px", md: "12px" }}>{item.bedroom != null ? `${item.bedroom} ห้อง` : "-"}</Text>
                                    </Box>
                                </GridItem>
                                {/* จำนวนห้องน้ำ */}
                                <GridItem>
                                    <Box display={'flex'} gap={"4px"}>
                                        <FaBath size={15} />
                                        <Text variant={"h6"} fontSize={{ base: "8px", md: "12px" }}>{item.bathroom != null ? `${item.bathroom} ห้องน้ำ` : "-"}</Text>
                                    </Box>
                                </GridItem>
                            </Grid>
                            <Box px={2}>
                                <Divider />
                            </Box>
                            <Box my={2} px={2}>
                                <Text variant={'h3'} fontSize={{ base: "12px", md: "18px" }} textAlign={"right"}>{item.price_home} บาท</Text>
                            </Box>
                        </Flex>
                    </Flex>
                </GridItem>
            ))}
        </>
    )
}

export default ShowItem