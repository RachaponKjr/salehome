import { Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'


import { FaRegHeart,FaBullhorn,FaMedal,FaUserCircle,FaTh } from "react-icons/fa";
const MobileMenu = () => {
  return (
    <>
    <Flex bg={'gray.400'} w={'100%'} display={{base:"flex",md:"none"}} h={'3.8rem'} position={'fixed'} bottom={0} zIndex={1000} color={'white'}>
        <Grid templateColumns={'repeat(5, 1fr)'} w={'100%'}>
            <GridItem display={'flex'} flexDirection={"column"} alignItems={"center"}  gap={0.5} pt={2}>
                <FaRegHeart size={25}/>
                <Text fontSize={'10px'} mt={1}>รายการโปรด</Text>
            </GridItem>
            <GridItem display={'flex'} flexDirection={"column"} alignItems={"center"}  gap={0.5} pt={2}>
                <FaBullhorn size={25}/>
                <Text fontSize={'10px'} mt={1}>Looking</Text>
            </GridItem>
            <GridItem display={'flex'} flexDirection={"column"} alignItems={"center"}  gap={0.5} pt={2}>
                <FaMedal size={25}/>
                <Text fontSize={'10px'} mt={1}>ประกาศเเนะนำ</Text>
            </GridItem>
            <GridItem display={'flex'} flexDirection={"column"} alignItems={"center"}  gap={0.5} pt={2}>
                <FaUserCircle size={25}/>
                <Text fontSize={'10px'} mt={1}>AgentClub</Text>
            </GridItem>
            <GridItem display={'flex'} flexDirection={"column"} alignItems={"center"}  gap={0.5} pt={2}>
                <FaTh size={25}/>
                <Text fontSize={'10px'}  mt={1}>เพิ่มเติม</Text>
            </GridItem>
        </Grid>
    </Flex>
    </>
  )
}

export default MobileMenu