'use client'
import { Box, Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'


const Footer = () => {
    return (
        <Box bg={"#305553"} mb={{base:"64px",md:"0px"}}>
            <Container maxW={'container.xl'}>
                <Flex h={"min-content"} flexDirection={{base:"column",md:"row"}} justifyContent={"center"} py={"16px"}>
                <Text variant={"h6"} textAlign={"center"} color={'white'}>Copyright © 2024 บริษัท บริหารสินทรัพย์ ซีเอฟ เอเชีย จำกัด</Text>
                </Flex>
            </Container>
        </Box>
    )
}

export default Footer