import { Box, Container, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

function Contact() {
  return (
    <>
    <Container maxW={"container.xl"}>
        <Box boxShadow={"lg"} p={4}>
            <Grid templateColumns={"repeat(3, 1fr)" } >
                <GridItem colSpan={3} bg={"red.500"}>
                    <h1>test</h1>
                </GridItem>
            </Grid>
        </Box>
    </Container>
    </>
  )
}

export default Contact