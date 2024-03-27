import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'


import { BsBuildings,BsMegaphone } from "react-icons/bs";
import { BiHomeAlt,BiSearchAlt2 } from "react-icons/bi";
const MobileMenu = () => {
    return (
        <>
            <Flex bg={'#02685C'} w={'100%'} display={{ base: "flex", md: "none" }} h={'4.5rem'} position={'fixed'} bottom={0} zIndex={1000} color={'white'}>
                <Grid templateColumns={'repeat(4, 1fr)'} w={'100%'}>
                    <GridItem display={'flex'} flexDirection={"column"} alignItems={"center"} _active={{ bg: "gray.500" }} gap={0.5} pt={3} position={"relative"}>
                        <Box position={'relative'} w={'min-content'} h={'max-content'} >
                            <BiHomeAlt size={30} />
                            {/* กล่องเเสดงว่ามีอะไรใหม่ */}
                            <Box position={'absolute'} top={0} right={-2} bg={'red'} w={'1rem'} h={'1rem'} color={'white'} fontSize={'10px'} textAlign={'center'} rounded={'full'}>N</Box>
                        </Box>
                        <Text fontSize={'10px'} mt={1.5}>หน้าเเรก</Text>
                    </GridItem>
                    <GridItem display={'flex'} flexDirection={"column"} alignItems={"center"} _active={{ bg: "gray.500" }} gap={0.5} pt={3}>
                        <BiSearchAlt2 size={30} />
                        <Text fontSize={'10px'} mt={1.5}>ค้นหาด่วน</Text>
                    </GridItem>
                    <GridItem display={'flex'} flexDirection={"column"} alignItems={"center"} _active={{ bg: "gray.500" }} gap={0.5} pt={3}>
                        <BsBuildings size={30} />
                        <Text fontSize={'10px'} mt={1.5}>รายการ ขาย เช่า</Text>
                    </GridItem>
                    <GridItem display={'flex'} flexDirection={"column"} alignItems={"center"} _active={{ bg: "gray.500" }} gap={0.5} pt={3}>
                        <BsMegaphone size={30} />
                        <Text fontSize={'10px'} mt={1.5}>ประกาศเเนะนำ</Text>
                    </GridItem>
                </Grid>
            </Flex>
        </>
    )
}

export default MobileMenu