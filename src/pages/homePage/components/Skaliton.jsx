import { Box, Flex, Grid, GridItem, Skeleton } from '@chakra-ui/react'
import React from 'react'

function Skaliton() {
    return (
        <Grid gridTemplateColumns={{ base: "repeat(2, minmax(0, 1fr))", sm: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}>
            {[...Array(12)].map((_, i) => (
                <GridItem w={"100%"} h={"100%"} p={{ base: "4px", md: "8px" }} >
                    <Skeleton height={'20rem'} rounded={"10px"}/>
                </GridItem>
            ))}
        </Grid>
    )
}

export default Skaliton