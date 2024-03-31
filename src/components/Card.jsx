import { Box, Divider, Flex, GridItem, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import location from '@/icons/location.png'
import bathroom from '@/icons/bathroom.png'
import area from '@/icons/area.png'
import bedroom from '@/icons/bedroom.png'

const Card = ({data}) => {
  return (
    <>
    <GridItem w={"100%"} p={{ base: "4px", md: "8px" }} key={data.number_home}>
                <Flex w={"100%"} h={"100%"} flexDirection={"column"} overflow={"hidden"} borderRadius={"10px"} boxShadow={'md'}>
                  {/* รูปภาพใน card */}
                  <Box w={"100%"} h={{ base: "6rem", md: "12rem" }} position={"relative"} bg={"gray.200"} cursor={"pointer"} _hover={{ bg: "gray.300" }}>
                    <Link href={"/product/" + data._id}>
                      <Box position={"relative"} w={"100%"} h={"100%"}>
                      <Image src={`http://18.140.121.108:5500/public/img_all/${data.img_all[0]}`} alt="image" fill priority className='image_hover' />
                      </Box>
                    </Link>
                    <Box boxShadow={"md"} bg={'rgba(52,148,128,0.8)'} position={"absolute"} top={2} left={2} px={4} py={1} rounded={'5px'} zIndex={10}>
                      <Text variant={'h4'} color={'white'} fontSize={{ base: "8px", md: "12px" }}>Sale</Text>
                    </Box>
                  </Box>
                  {/* ข้อมูลของสินค้า */}
                  <Flex flexDirection={"column"} zIndex={10} gap={"4px"} py={1} px={{ base: 1, md: 2 }} bg={"#FAFAFA"} >
                    {/* หัวข้อของสินค้า */}
                    <Link href={"/product/" + data._id} fontSize={{ base: "12px", md: "14px" }} cursor={"pointer"} className='line-clamp1'>
                      <Text variant={'h1'} color={'#00A94F'} fontWeight={'bold'}>
                        {data.name_home}
                      </Text>
                    </Link>
                    {/* ข้อมูลตำเเหน่ง */}
                    <Flex alignItems={"center"} gap={"4px"} my={"4px"} color={'#676767'}>
                      <Image src={location} alt="location" width={20} height={20} />
                      <Text variant={'h2'} fontSize={{ base: "12px", md: "14px" }} className='line-clamp1'>{data.province}</Text>
                    </Flex>
                    <Flex justifyContent={"space-between"} gap={2} flexDirection={{ base: "column", md: "row" }}>
                      <Box color={'#676767'} w={"max-content"} className='line-clamp1'>
                        <Text variant={'h2'} fontSize={{ base: "12px", md: "14px" }}>{data.detail_product}</Text>
                      </Box>
                      {/* รหัสสินค้า:  */}
                      <Box color={'#676767'} gap={2} display={{ base: "none", md: "flex" }}>
                        <Text variant={'h2'} fontSize={{ base: "12px", md: "14px" }} className='line-clamp1'>รหัสสินค้า: {data.number_home}</Text>
                      </Box>
                    </Flex>
                    {/* ขนานของห้อง จำนวนห้องต่างๆ */}
                    <Flex justifyContent={"space-between"} flexDirection={{ base: "column", md: "row" }} mt={"8px"} gap={{ base: "8px", md: "16px" }}>
                      <Flex gap={2} minW={{ base: "100%", md: "max-content" }}>
                        <Flex gap={"8px"} color={'#676767'} alignItems={"center"}>
                          <Image src={bedroom} alt="bathroom" width={"auto"} height={"auto"} />
                          <Text variant={"h6"} fontSize={{ base: "12px", md: "14px" }}>{data.bedroom != null ? `${data.bedroom}` : "-"}</Text>
                        </Flex>
                        <Divider orientation='vertical' />
                        <Flex gap={"8px"} color={'#676767'}>
                          <Image src={bathroom} alt="bathroom" width={"auto"} height={"auto"}  />
                          <Text variant={"h6"} fontSize={{ base: "12px", md: "14px" }}>{data.bathroom != null ? `${data.bathroom}` : "-"}</Text>
                        </Flex>
                      </Flex>
                      <Flex gap={"8px"} color={'#676767'} alignItems={"center"} justifyContent={{ base: "start", md: "end" }} >
                        <Image src={area} alt="bathroom" width={"auto"} height={"auto"} />
                        <Text variant={"h6"} fontSize={{ base: "12px", md: "14px" }} className='line-clamp1'>{data.centimate !== null ? data.centimate : "0000"}</Text>
                      </Flex>
                    </Flex>
                    <Box px={2}>
                      <Divider />
                    </Box>
                    <Flex alignItems={"center"} justifyContent={{ base: "end", md: "space-between" }}>
                      <Box h={"max-content"} w={'max-content'} maxW={'100%'} bg={'#305553'} color={'white'} px={6} py={1} display={{ base: 'none', md: 'flex' }} alignItems={"center"} rounded={"10px"}>
                        <Text variant={'h6'} fontSize={{ base: "12px", md: "14px" }}>ขาย</Text>
                      </Box>
                      <Box my={2} px={2}>
                        <Text variant={'h3'} fontSize={{ base: "14px", md: "16px" }} whiteSpace={"nowrap"} fontWeight={"bold"} textAlign={"right"} color={'#EE0000'}>{data.price_home} บาท</Text>
                      </Box>
                    </Flex>
                  </Flex>
                </Flex>
              </GridItem>
    </>
  )
}

export default Card