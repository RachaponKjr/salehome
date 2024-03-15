import { Box, Divider, Flex, Grid, GridItem, Input, InputGroup, InputRightElement, Select, Text } from '@chakra-ui/react'
import Image from 'next/image';
import React from 'react'

import { FaSearch, FaBed, FaBath } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { IoNavigate, IoLocationSharp } from "react-icons/io5";
import { BiShapeTriangle } from "react-icons/bi";
import { TbStairs } from "react-icons/tb";

import House from '../../../imgs/House.jpg'
import { mummyData } from '@/mummyData';

const Section1 = () => {
  return (
    <Box h="min-content" my={"16px"} w={"100%"} >
      {/* ส่วนหัว มี Input กับ Dropdown */}
      <Flex flexDirection={"row"} gap={"8px"} justifyContent={"end"}>
        <InputGroup w={"15rem"} size={"sm"}>
          <Input placeholder='Enter amount' />
          <InputRightElement><FaSearch /></InputRightElement>
        </InputGroup>
        <Select placeholder='Select option' w={"10rem"} size={"sm"}>
          <option value='option1'>Option 1</option>
          <option value='option1'>Option 1</option>
        </Select>
      </Flex>
      {/* กล่องโชว์ สินค้า ทั้งหมด */}
      <Box w={"100%"} h={"min-content"} my={"8px"}>
        <Grid gridTemplateColumns={{ base: "repeat(2, minmax(0, 1fr))", sm: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }} gap={{ base: "4px", md: "8px" }}>
          {mummyData.map((item, index) => (
            <GridItem w={"100%"} h={'min-content'} p={{ base: "4px", md: "8px" }} key={index}>
              <Flex w={"100%"} h={"100%"} flexDirection={"column"} overflow={"hidden"} borderRadius={"10px"} boxShadow={'md'}>
                {/* รูปภาพใน card */}
                <Box w={"100%"} h={{ base: "6rem", md: "12rem" }} position={"relative"} bg={"gray.200"} cursor={"pointer"} _hover={{ bg: "gray.300" }}>
                  <Image src={House} alt="image" fill className='image_hover' />
                  {/* ราคาของสินค้า */}
                  <Flex flexDirection={"column"} w={"100%"} h={"max-content"} bg={"rgba(0,0,0,0.5)"} py={"4px"} lineHeight={"1.2"} zIndex={2} px={{ base: 1, md: 2 }} position={"absolute"} bottom={0} display={"flex"} justifyContent={"end"} alignItems={"end"}>
                    {item.discount && <Text variant={"h1"} fontSize={{ base: "10px", md: "16px" }} color={"#c4c4c4"}><s>{item.discount}</s></Text>}
                    <Text variant={"h1"} fontSize={{ base: "12px", md: "20px" }} color={"white"}>{item.price}{item.listing_type === "rent" ? " / m." : ""}</Text>
                  </Flex>
                </Box>
                {/* ข้อมูลของสินค้า */}
                <Flex flexDirection={"column"} zIndex={10} gap={"4px"} py={1} px={{ base: 1, md: 2 }} bg={"#FAFAFA"} >
                  {/* หัวข้อของสินค้า */}
                  <Text variant={"h1"} fontSize={{ base: "12px", md: "14px" }} cursor={"pointer"} className='line-clamp' h={{ base: "36px", md: "2.5rem" }}>{item.title}</Text>
                  {/* เวลาเเก้ไข กับ จำนวนการคลิก */}
                  <Flex justifyContent={"space-between"} alignItems={'center'} w={'100%'} my={"4px"}>
                    <Box display={'flex'} flexDirection={'row'} w={'max-content'} alignItems={'center'} gap={'4px'}>
                      <FaPenToSquare size={12} />
                      <Text variant={"h6"} fontSize={{ base: "8px", md: "12px" }}>{item.last_updated}</Text>
                    </Box>
                    <Box display={'flex'} flexDirection={'row'} w={'max-content'} alignItems={'center'} gap={'4px'}>
                      <IoNavigate size={12} />
                      <Text variant={"h6"} fontSize={{ base: "8px", md: "12px" }}>100 Click</Text>
                    </Box>
                  </Flex>
                  {/* ข้อมูลตำเเหน่ง */}
                  <Box display={"flex"} alignItems={"center"} gap={"4px"} my={"4px"}>
                    <IoLocationSharp size={15} />
                    <Text variant={'h6'} fontSize={{ base: "8px", md: "12px" }} className='line-clamp1'>{item.location}</Text>
                  </Box>
                  {/* เส้นกัน */}
                  <Box px={2}>
                    <Divider />
                  </Box>
                  {/* ขนานของห้อง จำนวนห้องต่างๆ */}
                  <Grid gridTemplateColumns={"repeat(2, 1fr)"} rowGap={"4px"} my={"4px"}>
                    {/* ขนานของห้อง */}
                    <GridItem>
                      <Box display={'flex'} gap={"4px"}>
                        <BiShapeTriangle size={15} />
                        <Text variant={"h6"} fontSize={{ base: "8px", md: "12px" }}>{item.floor_area}</Text>
                      </Box>
                    </GridItem>
                    {/* จำนวนชั้น */}
                    <GridItem>
                      <Box display={'flex'} gap={"4px"}>
                        <TbStairs size={15} />
                        <Text variant={"h6"} fontSize={{ base: "8px", md: "12px" }}>{item.number_of_floors} ชั้น</Text>
                      </Box>
                    </GridItem>
                    {/* จำนวนห้องนอน */}
                    <GridItem>
                      <Box display={'flex'} gap={"4px"}>
                        <FaBed size={15} />
                        <Text variant={"h6"} fontSize={{ base: "8px", md: "12px" }}>{item.number_of_rooms} ห้องนอน</Text>
                      </Box>
                    </GridItem>
                    {/* จำนวนห้องน้ำ */}
                    <GridItem>
                      <Box display={'flex'} gap={"4px"}>
                        <FaBath size={15} />
                        <Text variant={"h6"} fontSize={{ base: "8px", md: "12px" }}>{item.number_of_bathrooms} ห้องน้ำ</Text>
                      </Box>
                    </GridItem>
                  </Grid>
                </Flex>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default Section1