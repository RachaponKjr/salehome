import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

function Blogs() {
    return (
        <>
            <Container maxWidth={"container.xl"}>
                <Flex flexDirection={"column"} gap={4} boxShadow={"lg"} p={4}>
                    {/* รูปภาพ ที่จะเเสดง */}
                    <Box w={"100%"} aspectRatio={4 / 1} bg={'gray.100'} position={'relative'}>

                    </Box>
                    <Box>
                        {/* หัวข้อ */}
                        <Text variant={"h1"} fontSize={"20px"}>หัวข้อ</Text>
                        {/* เนื้อหา */}
                        <Box w={"100%"} h={'max-content'} mt={4}>
                            <Text variant={"h6"}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officia numquam, cumque necessitatibus molestiae quidem dignissimos iure ab voluptates cum est et neque dolore dolores aliquid iusto repellat amet pariatur earum, quam accusamus similique veritatis. Est quas eum aspernatur minus ex cumque pariatur odio, iure dolores molestias molestiae debitis ducimus magni qui? Nulla veniam ad quos corrupti, molestiae temporibus dicta aliquid ducimus accusantium quam suscipit voluptas accusamus dignissimos facere, nemo aspernatur rerum corporis perferendis eaque officiis! Eius veniam autem cum dignissimos nobis praesentium, dolorem adipisci minus iste aliquid. Porro soluta in dignissimos, maxime aut aperiam, rem temporibus a inventore vitae autem ad eveniet ex sapiente similique quas totam? Laborum deleniti eos repellat numquam amet nemo ducimus eligendi est, reiciendis aliquam cum voluptatibus, nesciunt modi placeat sed at! In ipsum eaque suscipit maiores accusantium voluptatibus optio nobis ipsam animi sed vero non, eveniet dicta, repudiandae voluptates ducimus nemo a ullam id architecto. Repudiandae minus distinctio consequuntur maiores perspiciatis, fugit, sapiente omnis facilis sequi provident neque mollitia quos atque placeat pariatur ducimus aut. Eius pariatur ullam debitis dolore sunt accusantium rerum dicta sint. Harum magnam, deleniti maxime excepturi fuga quia tenetur aliquam molestias sunt! Necessitatibus laborum animi, voluptatem totam delectus cupiditate iste!</Text>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </>
    )
}

export default Blogs