import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'


import { FaRegHeart, FaBullhorn, FaMedal, FaUserCircle, FaTh } from "react-icons/fa";
import DrawerMobile from './DrawerMobile';
const MobileMenu = () => {
    return (
        <>
            <Flex bg={'gray.400'} w={'100%'} display={{ base: "flex", md: "none" }} h={'4.5rem'} position={'fixed'} bottom={0} zIndex={1000} color={'white'}>
                <Grid templateColumns={'repeat(5, 1fr)'} w={'100%'}>
                    <GridItem display={'flex'} flexDirection={"column"} alignItems={"center"} _active={{ bg: "gray.500" }} gap={0.5} pt={3} position={"relative"}>
                        <Box position={'relative'} w={'min-content'} h={'max-content'} >
                            <FaRegHeart size={30} />
                            {/* กล่องเเสดงว่ามีอะไรใหม่ */}
                            <Box position={'absolute'} top={0} right={-2} bg={'red'} w={'1rem'} h={'1rem'} color={'white'} fontSize={'10px'} textAlign={'center'} rounded={'full'}>N</Box>
                        </Box>
                        <Text fontSize={'10px'} mt={1.5}>รายการโปรด</Text>
                    </GridItem>
                    <GridItem display={'flex'} flexDirection={"column"} alignItems={"center"} _active={{ bg: "gray.500" }} gap={0.5} pt={3}>
                        <FaBullhorn size={30} />
                        <Text fontSize={'10px'} mt={1.5}>Looking</Text>
                    </GridItem>
                    <GridItem display={'flex'} flexDirection={"column"} alignItems={"center"} _active={{ bg: "gray.500" }} gap={0.5} pt={3}>
                        <FaMedal size={30} />
                        <Text fontSize={'10px'} mt={1.5}>ประกาศเเนะนำ</Text>
                    </GridItem>
                    <GridItem display={'flex'} flexDirection={"column"} alignItems={"center"} _active={{ bg: "gray.500" }} gap={0.5} pt={3}>
                        <FaUserCircle size={30} />
                        <Text fontSize={'10px'} mt={1.5}>AgentClub</Text>
                    </GridItem>
                    {/* เมนู เพิ่มเติม ใน เเทบเมนูของขนานโทรศัพท์ */}
                    <DrawerMobile />
                </Grid>
            </Flex>
        </>
    )
}

export default MobileMenu