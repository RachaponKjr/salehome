'use client'
import Card from '@/components/Card';
import { Box, Divider, Flex, Grid, GridItem, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import { FaSearch } from "react-icons/fa";

import { FaVectorSquare, FaThLarge, FaRegBuilding } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { LuHome } from "react-icons/lu";

import area from "@/icons/tab_icons/area.svg"
import building from "@/icons/tab_icons/building.svg"
import Image from 'next/image';

function Section1({ datafetch }) {
  const newData = Array.from(datafetch)
  const [tabs, setTabs] = useState(0)
  const [filter, setFilter] = useState("ทั้งหมด")
  const [query, setQuery] = useState('');
  const [resQuery,setResQuery] = useState(newData)

  // search data with query
  useEffect(() => {
    if (query !== ''){
      const resSearch = newData.filter((item) => item.name_home.includes(query))
      setResQuery(resSearch)
    } else if(filter === "ทั้งหมด"){
      setResQuery(newData)
    }else{
      const filteredData = newData.filter((item) => item.detail_product === filter)
      console.log(filteredData)
      setResQuery(filteredData)
    }
  }, [query,filter])

  function handleClicked({ tabs, filter }) {
    setTabs(tabs)
    setQuery('')
    setFilter(filter)
  }

  // debug
  // console.log(dataFilter)
  // console.log(tabs)
  // console.log(filter)
  // console.log(resQuery)
  // console.log(query)

  return (
    <>
      <Box variant={"h1"} fontSize={"24px"} my={"16px"}>Lorem, ipsum dolor.</Box>
      <Box h="min-content" mb={"16px"} w={"100%"} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'} rounded={"10px"} p={{ base: 2, md: 4 }} >
        {/* ส่วนหัว มี Input กับ Dropdown */}
        <Flex flexDirection={{ base: "column-reverse", md: "row" }} gap={"8px"} alignItems={"center"} justifyContent={"space-between"}>
          {/* Tabs ต่างๆ */}
          <Flex h={'max-content'} w={{ base: "100%", lg: "auto" }} overflowX={{ base: 'scroll', lg: 'none' }} overflow={{base:'none',lg:'hidden'}} flexDirection={'row'} gap={{ base: "4px", md: "8px" }} alignItems={{ base: "center", md: "flex-start" }} position={"hidden"} borderBottom={"3px solid #EAEAEA"} color={'#AEAEAE'}>
            <Flex h={'100%'} flexDirection={"row"} gap={'16px'} alignItems={"center"} width={"max-content"} whiteSpace={"nowrap"} px={{base:4,md:8}} py={2} fontSize={{ base: "12px", md: "16px" }} cursor={"pointer"} position={"relative"} {...tabs === 0 && { color: "#333333",boxShadow:'rgba(0, 0, 0, 0.16) 0px 1px 4px;', _before: { content: "''", position: "absolute", width: "100%", height: "3.5px", bottom: "0", left: "0", bg: "#305553" } }} onClick={() => handleClicked({ tabs: 0, filter: 'ทั้งหมด' })}>
              <FaThLarge size={25} {...tabs === 0 && { color: '#305553' }} />
              <Text>
                ทั้งหมด
              </Text>
            </Flex>
            <Divider orientation='vertical' borderLeftWidth={"1px"} />
            <Flex h={'100%'} flexDirection={"row"} gap={'16px'} alignItems={"center"} width={"max-content"} whiteSpace={"nowrap"} px={{base:4,md:8}} py={2} fontSize={{ base: "12px", md: "16px" }} cursor={"pointer"} position={"relative"} {...tabs === 1 && { color: "#333333",boxShadow:'rgba(0, 0, 0, 0.16) 0px 1px 4px;', _before: { content: "''", position: "absolute", width: "100%", height: "3.5px", bottom: "0", left: "0", bg: "#305553" } }} onClick={() => handleClicked({ tabs: 1, filter: 'ที่ดิน' })}>
              <FaVectorSquare size={25} {...tabs === 1 && { color: '#305553' }} />
              <Text>
                ที่ดิน
              </Text>
            </Flex>
            <Divider orientation='vertical' borderLeftWidth={"1px"} />
            <Flex h={'100%'} flexDirection={"row"} gap={'16px'} alignItems={"center"} width={"max-content"} whiteSpace={"nowrap"} px={{base:4,md:8}} py={2} fontSize={{ base: "12px", md: "16px" }} cursor={"pointer"} position={"relative"} {...tabs === 2 && { color: "#333333",boxShadow:'rgba(0, 0, 0, 0.16) 0px 1px 4px;', _before: { content: "''", position: "absolute", width: "100%", height: "3.5px", bottom: "0", left: "0", bg: "#305553" } }} onClick={() => handleClicked({ tabs: 2, filter: 'บ้านเดี่ยว 2 ชั้น' })}>
              <LuHome size={25} {...tabs === 2 && { color: '#305553' }} />
              <Text>
                บ้าน
              </Text>
            </Flex>
            <Divider orientation='vertical' borderLeftWidth={"1px"} />
            <Flex h={'100%'} flexDirection={"row"} gap={'16px'} alignItems={"center"} width={"max-content"} whiteSpace={"nowrap"} px={{base:4,md:8}} py={2} fontSize={{ base: "12px", md: "16px" }} cursor={"pointer"} position={"relative"} {...tabs === 3 && { color: "#333333",boxShadow:'rgba(0, 0, 0, 0.16) 0px 1px 4px;', _before: { content: "''", position: "absolute", width: "100%", height: "3.5px", bottom: "0", left: "0", bg: "#305553" } }} onClick={() => handleClicked({ tabs: 3, filter: 'ทาวน์เฮ้าส์' })}>
              <FaRegBuilding size={25} {...tabs === 3 && { color: '#305553' }} />
              <Text>
                ทาวน์เฮ้าส์
              </Text>
            </Flex>
          </Flex>
          <InputGroup w={{ base: "100%", md: "320px" }} size={"md"} m={{ base: 'auto', md: '0' }}  mb={{ base: "8px", md: "0px" }} >
            <Input focusBorderColor='#305553' placeholder='Search' type='text' value={query} onChange={(e) => setQuery(e.target.value)} />
            <InputRightElement cursor={"pointer"} bg={'#305553'} color={'white'}><FaSearch /></InputRightElement>
          </InputGroup>
        </Flex>
        {/* กล่องโชว์ สินค้า ทั้งหมด */}
        <Box w={"100%"} h={"min-content"} my={"16px"}>
          <Grid gridTemplateColumns={{ base: "repeat(2, minmax(0, 1fr))", sm: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}>
            {resQuery.length === 0 ? (
              <GridItem h={'400px'} w={"100%"} gridColumn={{ base: "1 / 3", md: "1 / 5" }} placeContent={"center"}>
                <Text variant={'h3'} fontSize={{ base: "14px", md: "16px" }} textAlign={"center"}>ไม่พบรายการค้นหา...</Text>
              </GridItem>
            ) : resQuery.map((item) => (
              <Card key={item._id} data={item} />
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default Section1