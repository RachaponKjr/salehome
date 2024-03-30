'use client'
import Card from '@/components/Card';
import { Box, Divider, Flex, Grid, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'

import { FaSearch } from "react-icons/fa";

import { FaVectorSquare, FaThLarge, FaRegBuilding } from "react-icons/fa";
import { LuHome } from "react-icons/lu";

function Section1({ datafetch }) {
  const [tabs, setTabs] = React.useState(0)
  const [filter, setFilter] = React.useState("ทั้งหมด")
  const [dataFilter, setDataFilter] = React.useState([])

  const newData = Array.from(datafetch)

  function handleClicked({ tabs, filter }) {
    setTabs(tabs)
    setFilter(filter)
    const filteredData = newData.filter((item) => item.detail_product === filter)
    setDataFilter(filteredData)
  }

  // debug
  // console.log(dataFilter)
  // console.log(tabs)
  // console.log(filter)

  return (
    <>
      <Box variant={"h1"} fontSize={"24px"} my={"16px"}>Lorem, ipsum dolor.</Box>
      <Box h="min-content" mb={"16px"} w={"100%"} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'} rounded={"10px"} p={{ base: 2, md: 4 }} >
        {/* ส่วนหัว มี Input กับ Dropdown */}
        <Flex flexDirection={{ base: "column-reverse", md: "row" }} gap={"8px"} justifyContent={"space-between"}>
          {/* Tabs ต่างๆ */}
          <Flex h={'2rem'} overflowX={{ base: 'scroll', md: 'auto' }} borderBottom={"3px solid #EAEAEA"} color={'#AEAEAE'}>
            <Flex h={'100%'} flexDirection={"row"} gap={'8px'} alignItems={"center"} width={"max-content"} whiteSpace={"nowrap"} px={6} py={1} fontSize={{ base: "12px", md: "16px" }} cursor={"pointer"} position={"relative"} {...tabs === 0 && { color: "#333333", _before: { content: "''", position: "absolute", width: "100%", height: "3.5px", bottom: "0", left: "0", bg: "#02685C" } }} onClick={() => handleClicked({ tabs: 0, filter: 'ทั้งหมด' })}>
              <FaThLarge {...tabs === 0 && { color: '#02685C' }} />
              <Text>
                ทั้งหมด
              </Text>
            </Flex>
            <Divider orientation='vertical' borderLeftWidth={"1px"} />
            <Flex h={'100%'} flexDirection={"row"} gap={'8px'} alignItems={"center"} width={"max-content"} whiteSpace={"nowrap"} px={6} py={1} fontSize={{ base: "12px", md: "16px" }} cursor={"pointer"} position={"relative"} {...tabs === 1 && { color: "#333333", _before: { content: "''", position: "absolute", width: "100%", height: "3.5px", bottom: "0", left: "0", bg: "#02685C" } }} onClick={() => handleClicked({ tabs: 1, filter: 'ที่ดิน' })}>
              <FaVectorSquare {...tabs === 1 && { color: '#02685C' }} />
              <Text>
                ที่ดิน
              </Text>
            </Flex>
            <Divider orientation='vertical' borderLeftWidth={"1px"} />
            <Flex h={'100%'} flexDirection={"row"} gap={'8px'} alignItems={"center"} width={"max-content"} whiteSpace={"nowrap"} px={6} py={1} fontSize={{ base: "12px", md: "16px" }} cursor={"pointer"} position={"relative"} {...tabs === 2 && { color: "#333333", _before: { content: "''", position: "absolute", width: "100%", height: "3.5px", bottom: "0", left: "0", bg: "#02685C" } }} onClick={() => handleClicked({ tabs: 2, filter: 'บ้านเดี่ยว 2 ชั้น' })}>
              <LuHome size={18} {...tabs === 2 && { color: '#02685C' }} />
              <Text>
                บ้าน
              </Text>
            </Flex>
            <Divider orientation='vertical' borderLeftWidth={"1px"} />
            <Flex h={'100%'} flexDirection={"row"} gap={'8px'} alignItems={"center"} width={"max-content"} whiteSpace={"nowrap"} px={6} py={1} fontSize={{ base: "12px", md: "16px" }} cursor={"pointer"} position={"relative"} {...tabs === 3 && { color: "#333333", _before: { content: "''", position: "absolute", width: "100%", height: "3.5px", bottom: "0", left: "0", bg: "#02685C" } }} onClick={() => handleClicked({ tabs: 3, filter: 'ทาวน์เฮ้าส์' })}>
              <FaRegBuilding {...tabs === 3 && { color: '#02685C' }} />
              <Text>
                ทาวน์เฮ้าส์
              </Text>
            </Flex>
          </Flex>
          <InputGroup w={{ base: "100%", md: "15rem" }} size={"sm"} m={{ base: 'auto', md: '0' }} mb={{ base: "8px", md: "0px" }}>
            <Input placeholder='Enter amount' />
            <InputRightElement><FaSearch /></InputRightElement>
          </InputGroup>
        </Flex>
        {/* กล่องโชว์ สินค้า ทั้งหมด */}
        <Box w={"100%"} h={"min-content"} my={"8px"}>
          <Grid gridTemplateColumns={{ base: "repeat(2, minmax(0, 1fr))", sm: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}>
            {filter === 'ทั้งหมด' && newData.map((item) => (
              <Card key={item._id} data={item} />
            ))}
            
            {dataFilter.map((item) => (
              <Card key={item._id} data={item} />
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default Section1