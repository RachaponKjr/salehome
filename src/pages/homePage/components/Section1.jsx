'use client'
import { Box, Divider, Flex, Grid, Input, InputGroup, InputRightElement} from '@chakra-ui/react'
import React from 'react'

import { FaSearch } from "react-icons/fa";
import ShowItem from './ShowItem';

const Section1 =  () => {
  const [tabs, setTabs] = React.useState(0)

  return (
    <Box h="min-content" my={"16px"} w={"100%"} boxShadow={'lg'} rounded={"10px"} p={4} >
      <Box variant={"h1"} fontSize={"24px"} mb={"16px"}>Lorem, ipsum dolor.</Box>
      {/* ส่วนหัว มี Input กับ Dropdown */}
      <Flex flexDirection={{ base: "column-reverse", md: "row" }} gap={"8px"} justifyContent={"space-between"}>
        {/* Tabs */}
        <Flex h={'2rem'} overflowX={{ base: 'scroll', md: 'auto' }} borderBottom={"3px solid #EAEAEA"} >
          <Box h={'100%'} width={"max-content"} whiteSpace={"nowrap"} px={4} py={1} fontSize={{ base: "12px", md: "16px" }} cursor={"pointer"} position={"relative"} {...tabs === 0 && { _before: { content: "''", position: "absolute", width: "100%", height: "2px", bottom: "0", left: "0", bg: "blue.500" } }} onClick={() => setTabs(0)}>Lorem, ipsum.</Box>
          <Divider orientation='vertical' borderLeftWidth={"1px"} />
          <Box h={'100%'} width={"max-content"} whiteSpace={"nowrap"} px={4} py={1} fontSize={{ base: "12px", md: "16px" }} cursor={"pointer"} position={"relative"} {...tabs === 1 && { _before: { content: "''", position: "absolute", width: "100%", height: "2px", bottom: "0", left: "0", bg: "blue.500" } }} onClick={() => setTabs(1)}>Lorem, ipsum.</Box>
          <Divider orientation='vertical' borderLeftWidth={"1px"} />
          <Box h={'100%'} width={"max-content"} whiteSpace={"nowrap"} px={4} py={1} fontSize={{ base: "12px", md: "16px" }} cursor={"pointer"} position={"relative"} {...tabs === 2 && { _before: { content: "''", position: "absolute", width: "100%", height: "2px", bottom: "0", left: "0", bg: "blue.500" } }} onClick={() => setTabs(2)}>Lorem, ipsum.</Box>
          <Divider orientation='vertical' borderLeftWidth={"1px"} />
          <Box h={'100%'} width={"max-content"} whiteSpace={"nowrap"} px={4} py={1} fontSize={{ base: "12px", md: "16px" }} cursor={"pointer"} position={"relative"} {...tabs === 3 && { _before: { content: "''", position: "absolute", width: "100%", height: "2px", bottom: "0", left: "0", bg: "blue.500" } }} onClick={() => setTabs(3)}>Lorem, ipsum.</Box>
        </Flex>
        <InputGroup w={{ base: "100%", md: "15rem" }} size={"sm"} m={{ base: 'auto', md: '0' }} mb={{ base: "8px", md: "0px" }}>
          <Input placeholder='Enter amount' />
          <InputRightElement><FaSearch /></InputRightElement>
        </InputGroup>
      </Flex>
      {/* กล่องโชว์ สินค้า ทั้งหมด */}
      <Box w={"100%"} h={"min-content"} my={"8px"}>
        {/* Tabs ที่ 1 */}
        {tabs === 0 && (
          <Grid gridTemplateColumns={{ base: "repeat(2, minmax(0, 1fr))", sm: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }} gap={{ base: "4px", md: "16px" }}>
            <ShowItem/>
          </Grid>
        )}


      </Box>
    </Box>
  )
}

export default Section1