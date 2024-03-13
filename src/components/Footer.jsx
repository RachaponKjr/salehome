import { Box, Container, Flex, Grid, GridItem, Input, InputGroup, InputRightAddon, InputRightElement, ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa'

const Footer = () => {
    return (
        <Box bg={"gray.500"}>
            <Container maxW={'container.xl'}>
                <Flex h={"min-content"} flexDirection={{base:"column",md:"row"}} py={"16px"}>
                    {/* ฝั่่งทางด้านซ้ายของ footer */}
                    <Flex flexDirection={"column"} gap={"8px"} w={{base:"100%",md:"70%"}}>
                        {/* หัวข้อ */}
                        <Box as='h6' color={"white"} fontSize={"16px"}>ประกาศหาประเภททรัพย์</Box>
                        {/* list ของ หัวข้อนั้นๆ */}
                        {/* ตรง Box สามารถ เปลี่ยนเป็น Link ได้ */}
                        <UnorderedList display={"flex"} flexDirection={"row"} gap={"16px"} color={"white"}>
                            <Grid templateColumns={{base:"repeat(auto-fill, minmax(130px, 1fr))",md:"repeat(auto-fill, minmax(150px, 1fr))"}} justifyContent={"space-between"} w={"100%"} gap={2} fontSize={{base:"12px",md:"14px"}}>
                                <GridItem>
                                    <ListItem>
                                        <Box as='h6' cursor={"pointer"} w={"max-content"}>Lorem, ipsum dolor.</Box>
                                    </ListItem>
                                </GridItem>
                                <GridItem>
                                    <ListItem>
                                        <Box as='h6' cursor={"pointer"} w={"max-content"}>Lorem, ipsum dolor.</Box>
                                    </ListItem>
                                </GridItem>
                                <GridItem>
                                    <ListItem>
                                        <Box as='h6' cursor={"pointer"} w={"max-content"}>Lorem, ipsum dolor.</Box>
                                    </ListItem>
                                </GridItem>
                                <GridItem>
                                    <ListItem>
                                        <Box as='h6' cursor={"pointer"} w={"max-content"}>Lorem, ipsum dolor.</Box>
                                    </ListItem>
                                </GridItem>
                                <GridItem>
                                    <ListItem>
                                        <Box as='h6' cursor={"pointer"} w={"max-content"}>Lorem, ipsum dolor.</Box>
                                    </ListItem>
                                </GridItem>
                                <GridItem>
                                    <ListItem>
                                        <Box as='h6' cursor={"pointer"} w={"max-content"}>Lorem, ipsum dolor.</Box>
                                    </ListItem>
                                </GridItem>
                                <GridItem>
                                    <ListItem>
                                        <Box as='h6' cursor={"pointer"} w={"max-content"}>Lorem, ipsum dolor.</Box>
                                    </ListItem>
                                </GridItem>
                            </Grid>
                        </UnorderedList>

                    </Flex>
                    {/* ฝั่่งทางด้านขวาของ footer */}
                    <Box w={{base:"100%",md:"30%"}} mt={{base:"16px",md:"0px"}}>
                        {/* หัวข้อ */}
                        <Box as='h6' color={"white"} w={"100%"} fontSize={"16px"} mb={"8px"} >เมนูหลัก</Box>
                        {/* ตรง Box สามารถ เปลี่ยนเป็น Link ได้ */}
                        <UnorderedList display={"flex"} flexDirection={"row"}  color={"white"}>
                            <Grid templateColumns={{base:"repeat(auto-fill, minmax(130px, 1fr))",md:"repeat(auto-fill, minmax(150px, 1fr))"}} w={"100%"} gap={1} fontSize={{base:"12px",md:"14px"}} mb={"16px"}>
                                <GridItem>
                                    <ListItem>
                                        <Box as='h6' cursor={"pointer"} w={"max-content"}>Lorem, ipsum dolor.</Box>
                                    </ListItem>
                                </GridItem>
                                <GridItem>
                                    <ListItem>
                                        <Box as='h6' cursor={"pointer"} w={"max-content"}>Lorem, ipsum dolor.</Box>
                                    </ListItem>
                                </GridItem>
                                <GridItem>
                                    <ListItem>
                                        <Box as='h6' cursor={"pointer"} w={"max-content"}>Lorem, ipsum dolor.</Box>
                                    </ListItem>
                                </GridItem>
                                <GridItem>
                                    <ListItem>
                                        <Box as='h6' cursor={"pointer"} w={"max-content"}>Lorem, ipsum dolor.</Box>
                                    </ListItem>
                                </GridItem>
                                <GridItem>
                                    <ListItem>
                                        <Box as='h6' cursor={"pointer"} w={"max-content"}>Lorem, ipsum dolor.</Box>
                                    </ListItem>
                                </GridItem>
                            </Grid>
                        </UnorderedList>
                        {/* หัวข้อ */}
                        <Box as='h6' color={"white"} fontSize={"16px"} my={"8px"} w={"100%"} >ติดตามข่าวสารใหม่ๆกับเรา</Box>
                        <Box w={"200px"}>
                            {/* Inputส่งเมล */}
                        <InputGroup size={'sm'}>
                            <Input placeholder='อีเมล' _placeholder={{ color: 'white' }} />
                            <InputRightAddon cursor={"pointer"}>
                                ส่ง
                            </InputRightAddon>
                        </InputGroup>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}

export default Footer