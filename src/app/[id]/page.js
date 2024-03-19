import { Avatar, Box, Container, Divider, Flex, Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react";


import { FaPhoneAlt,FaFacebook,FaFacebookMessenger,FaChevronRight } from "react-icons/fa";
import { TbStairs } from "react-icons/tb";
import { FaBed, FaBath } from "react-icons/fa";
import { BiShapeTriangle } from "react-icons/bi";
export default function Page() {
  return (
    <Container maxW={"container.xl"} py={"8px"}>
      <Box boxShadow={"lg"} rounded={"10px"} p={4}>
        {/* ส่วนหัวข้อของหน้า */}
        <Text variant={"h1"}>หัวข้อหน้า</Text>
        {/* รูปที่ใช้เเสดง */}
        <Box w={"100%"} h={"500px"} my={"16px"}>
          {/* รูปที่ 1 */}
          <Grid
            templateRows={"repeat(3, 1fr)"}
            templateColumns={"repeat(5, 1fr)"}
            h={"100%"}
             gap={2}
          >
            <GridItem rowSpan={3} colSpan={3} bg="whitesmoke"/>
            <GridItem colSpan={2} rowSpan={2} bg="whitesmoke" />
            <GridItem colSpan={1} bg="whitesmoke" />
            <GridItem colSpan={1} bg="whitesmoke" />
          </Grid>
        </Box>
        {/* ส่วนข้อมูล */}
        <Flex gap={3}>
            {/* ฝั่งซ้าย */}
            <Box w={"70%"} h={"500px"} >
                {/* กล่องเเสดงรายละเอียดของสินค้า */}
                <Box w={"100%"} h={"min-content"} p={4} bg={'green'} rounded={"10px"}>
                    <Text variant={"h1"}className="line-clamp">Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</Text>
                <Flex justifyContent={"start"} alignItems={"center"} gap={2} color={"#4A90E4"} my={2}><Text>เพิ่มเติม</Text> <FaChevronRight/></Flex>
                <Flex justifyContent={'end'} color={'black'}>
                    <Text variant={'h4'} fontSize={'24px'} fontWeight={'bold'}>฿3,590,000</Text>
                </Flex>
                </Box>
                {/* ข้อมูลการอัพเดต */}
                <Flex gap={4} flexDirection={'column'} mt={4}>
                    {/* หัวเรื่อง Head */}
                    <Text variant={'h3'} fontSize={'15px'}>ข้อมูลการอัพเดตประกาษนี้</Text>
                    {/* รายละเอียด */}
                    <Text variant={'h6'} fontSize={'13px'}> สร้างเมื่อ 1 นาทีที่แล้ว</Text>
                </Flex>
                {/* ข้อมูลอสังหา */}
                <Flex gap={4} flexDirection={'column'} mt={4}>
                    {/* หัวเรื่อง Head */}
                    <Text variant={'h3'} fontSize={'15px'}>ข้อมูลอสังหาฯ</Text>
                    {/* รายละเอียด */}
                    <Grid templateColumns={"repeat(4, 1fr)"} gap={4}>
                        <GridItem border={"1px solid black"} rounded={"10px"} p={3} m={1}>
                            <Flex alignItems={"center"} gap={4}>
                            <BiShapeTriangle size={40}/>
                            <Text variant={'h6'} fontSize={'16px'} mt={2}> lorem</Text>
                            </Flex>
                        </GridItem>
                        <GridItem border={"1px solid black"} rounded={"10px"} p={3} m={1}>
                            <Flex alignItems={"center"} gap={4}>
                            <TbStairs size={40}/>
                            <Text variant={'h6'} fontSize={'16px'} mt={2}> lorem</Text>
                            </Flex>
                        </GridItem>
                        <GridItem border={"1px solid black"} rounded={"10px"} p={3} m={1}>
                            <Flex alignItems={"center"} gap={4}>
                            <FaBed size={40}/>
                            <Text variant={'h6'} fontSize={'16px'} mt={2}> lorem</Text>
                            </Flex>
                        </GridItem>
                        <GridItem border={"1px solid black"} rounded={"10px"} p={3} m={1}>
                            <Flex alignItems={"center"} gap={4}>
                            <FaBath size={40}/>
                            <Text variant={'h6'} fontSize={'16px'} mt={2}> lorem</Text>
                            </Flex>
                        </GridItem>
                    </Grid> 
                </Flex>
                {/* Divider */}
                <Box w={"100%"} h={"1px"} my={4} bg={"black"}></Box>
            </Box>
            {/* ฝั่งขวา */}
            <Box w={"30%"} h={"500px"} bg={"gray.500"} p={2}>
                {/* ข้อมูล ผู้ขาย */}
                <Flex w={"100%"} h={"min-content"} bg={'red'} px={4} py={4} gap={2} rounded={"10px"}>
                    <Avatar/>
                    <Box w={"100%"} h={"min-content"}>
                        <Text variant={'h4'}>ชื่อผู้ขาย</Text>
                        <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2} justifyContent={'end'} >
                            <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2} cursor={'pointer'} color={'#4A90E4'} >
                            <Text variant={'h5'}>โปรไฟล์ผู้ขาย</Text>
                            <FaChevronRight/>
                            </Box>
                        </Box>
                    </Box>
                </Flex>
                {/* ช่องทางการติดต่อ */}
                <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={2} mt={2}>
                    <Box><Text variant={'h5'} fontSize={'18px'}>ช่องทางติดต่อ</Text></Box>
                    {/* Phone // facebook // Messenger */}
                    <Flex gap={2}>
                        <Box w={"3rem"} aspectRatio={1} boxShadow={'lg'} display={'flex'} justifyContent={'center'} alignItems={'center'} rounded={'lg'} cursor={'pointer'} color={'white'}><FaPhoneAlt size={25}/></Box>
                        <Box w={"3rem"} aspectRatio={1} boxShadow={'lg'} display={'flex'} justifyContent={'center'} alignItems={'center'} rounded={'lg'} cursor={'pointer'} color={'white'}><FaFacebook size={25}/></Box>
                        <Box w={"3rem"} aspectRatio={1} boxShadow={'lg'} display={'flex'} justifyContent={'center'} alignItems={'center'} rounded={'lg'} cursor={'pointer'} color={'white'}><FaFacebookMessenger size={25}/></Box>
                    </Flex>
                    {/* เเจ้งรายงาน */}
                    <Box w={"100%"} h={"min-content"} mt={2} color={'#F25C62'} border={'1px solid #F25C62'} px={2} py={3} rounded={'lg'} cursor={'pointer'} transitionDuration={'.3s'} _hover={{bg:'#F25C62',color:'white'}}>
                        <Text textAlign={'center'}>เเจ้งรายงาน / ประกาศไม่เหมาะสม</Text>
                    </Box>
                </Flex>
            </Box>
        </Flex>
      </Box>
    </Container>
  );
}
