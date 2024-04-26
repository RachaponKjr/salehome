import { Box, Divider, Flex, GridItem, Text } from '@chakra-ui/react'
import Image from 'next/image'
import {Link} from '../navigation';
import React from 'react'

const Card = ({ data }) => {
  return (
    <>
      <GridItem w={"100%"} p={{ base: "4px", md: "8px" }} key={data.number_home}>
        <Flex w={"100%"} h={"100%"} flexDirection={"column"} overflow={"hidden"} borderRadius={"10px"} boxShadow={'md'}>
          {/* รูปภาพใน card */}
          <Box w={"100%"} h={{ base: "96px", md: "192px" }} position={"relative"} cursor={"pointer"} overflow={"hidden"}>
            <Link href={"/product/" + data._id}>
              <Box position={"relative"} w={"100%"} h={"100%"}>
                <Image src={`https://www.cfasia.co.th/public/img_all/${data.img_all[0]}`} alt={`ขาย ${data.detail_product} ที่อยู่ในจังหวัด ${data.province}`} fill priority className='image_hover' />
              </Box>
            </Link>
            <Flex display={{ base: 'flex', md: 'none' }} justifyContent={"center"} alignItems={"center"} w={"max-content"} h={"max-content"} bg={'#02685C'} opacity={0.8} position={"absolute"} top={2} left={2} px={4} py={1} rounded={'5px'} zIndex={10}>
              <Text color={'white'} variant={'h4'} fontSize={"14px"}>Sale</Text>
            </Flex>
          </Box>
          {/* ข้อมูลของสินค้า */}
          <Link href={"/product/" + data._id} cursor={"pointer"} >
            <Flex flexDirection={"column"} zIndex={10} gap={"4px"} py={1} px={{ base: 1, md: 2 }} bg={"#FAFAFA"} >
              {/* หัวข้อของสินค้า */}
              <Text className='line-clamp1' variant={'h1'} color={'#02685C'} mb={1} fontSize={{ base: "12px", md: "14px" }} fontWeight={'bold'}>
                {data.name_home}
              </Text>
              {/* ข้อมูลตำเเหน่ง */}
              <Flex alignItems={"center"} gap={"4px"} my={"4px"} color={'#676767'}>
                <Image src={"/icons/location.png"} alt="location" width={20} height={20} />
                <Text variant={'h2'} fontSize={{ base: "12px", md: "14px" }} className='line-clamp1'>{data.province}</Text>
              </Flex>
              <Flex justifyContent={"space-between"} gap={2} flexDirection={{ base: "column", md: "row" }}>
                <Box color={'#676767'} w={"max-content"} className='line-clamp1'>
                  <Text variant={'h2'} color={'#676767'} fontSize={{ base: "12px", md: "14px" }}>{data.detail_product}</Text>
                </Box>
                {/* รหัสสินค้า:  */}
                <Box color={'#676767'} gap={2} display={{ base: "none", md: "flex" }}>
                  <Text variant={'h2'} fontSize={{ base: "12px", md: "14px" }} className='line-clamp1'>รหัสสินค้า: {data.number_home}</Text>
                </Box>
              </Flex>
              {/* ขนานของห้อง จำนวนห้องต่างๆ */}
              <Flex justifyContent={"space-between"} flexDirection={{ base: "column", md: "row" }} mt={"8px"} gap={{ base: "8px", md: "16px" }}>
                <Flex gap={2} minW={{ base: "100%", md: "max-content" }}>
                  <Flex gap={"8px"} color={'#676767'} alignItems={"center"}>
                    <Image src={"/icons/bedroom.png"} alt="bedroom" width={"25"} height={"25"} />
                    <Text variant={"h6"} fontSize={{ base: "12px", md: "14px" }}>{data.bedroom != null ? `${data.bedroom}` : "-"}</Text>
                  </Flex>
                  <Divider orientation='vertical' />
                  <Flex gap={"8px"} color={'#676767'} alignItems={"center"}>
                    <Image src={"/icons/bathroom.png"} alt="bathroom" width={"25"} height={"25"} />
                    <Text variant={"h6"} fontSize={{ base: "12px", md: "14px" }}>{data.bathroom != null ? `${data.bathroom}` : "-"}</Text>
                  </Flex>
                </Flex>
                <Flex gap={"8px"} color={'#676767'} alignItems={"center"} justifyContent={{ base: "start", md: "end" }} >
                  <Image src={"/icons/area.png"} alt="bathroom" width={"27"} height={"27"} />
                  <Text variant={"h6"} fontSize={{ base: "12px", md: "14px" }} className='line-clamp1'>{data.centimate !== null ? data.centimate : "0000"}</Text>
                </Flex>
              </Flex>
              <Box px={2} my={{base:1.5,md:4}}>
                <Box w={"100%"} h={'0.8px'} bg={"#FF8E0D"} opacity={0.4}></Box>
              </Box>
              <Flex mb={{ base: 0, md: 2 }} alignItems={"center"} justifyContent={{ base: "end", md: "space-between" }}>
                <Box className='btn-animetion' role='group' _hover={{ ringColor: "#02685C" }} overflow={"hidden"} transitionDuration={"1s"} h={"max-content"} w={'max-content'} maxW={'100%'} ring={"2px"} ringColor={"#F74354"} px={6} py={1} display={{ base: 'none', md: 'flex' }} alignItems={"center"} rounded={"10px"}>
                  <Text _groupHover={{ color: "white" }} zIndex={10} variant={'h6'} color={'#F74354'} transitionDuration={"0.2s"} fontSize={{ base: "12px", md: "14px" }}>Sale</Text>
                </Box>
                <Box my={2} px={2}>
                  <Text variant={'h3'} fontSize={{ base: "14px", md: "16px" }} whiteSpace={"nowrap"} fontWeight={"bold"} textAlign={"right"} color={'#676767'}>{data.price_home} บาท</Text>
                </Box>
              </Flex>
            </Flex>
          </Link>
        </Flex>
      </GridItem>
    </>
  )
}

export default Card