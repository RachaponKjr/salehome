'use client'
import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


function Blogs({ homeManu, blogManu }) {
  const router = usePathname()
  return (
    <>
      <Head>
        <link rel="alternate" hrefLang="th" href="https://www.cfasia.co.th/th/blogs" />
        <link rel="alternate" hrefLang="en" href="https://www.cfasia.co.th/en/blogs" />
        <link rel="canonical" href={`https://www.cfasia.co.th${router}`} />
      </Head>
      <Box w={"100%"} h={'max-content'} py={"8px"} boxShadow={'rgba(0, 0, 0, 0.16) 0px 1px 4px;'} >
        <Container maxW={"container.xl"} h={"100%"}>
          <Flex w={"100%"} gap={2} alignItems={"center"} h={"100%"}>
            <Link href={"/"}>
              {homeManu}
            </Link>
            <p>/</p>
            <Link href={"/blogs"} color='red'>
              <Text color={'#02685C'}>
                {blogManu}
              </Text>
            </Link>
          </Flex>
        </Container>
      </Box>
      <Container maxWidth={"container.xl"}>
        <Flex flexDirection={"column"} gap={4} boxShadow={'rgba(0, 0, 0, 0.16) 0px 1px 4px;'} rounded={"10px"} mt={4} bgColor={"white"} p={{ base: 3, md: 6 }}>
          {/* รูปภาพ ที่จะเเสดง */}
          <Box w={"100%"} aspectRatio={{ base: 16 / 9, md: 7.5 / 3 }} position={'relative'}>
            <Image src={"/img2.jpg"} alt="image" fill style={{ objectFit: 'cover' }} />
            {/* <Box bgImage={"url('/img2.jpg')"} bgSize={"contain"} bgPosition={'center'} bgRepeat={'no-repeat'} w={"100%"} h={'100%'}></Box> */}
          </Box>
          <Box>
            {/* หัวข้อ */}
            <Text variant={"h1"} fontSize={"20px"} color={"#676767"}>เส้นทางสุขภาพหนี้ที่ดี 7 วิธีปลดหนี้อย่างมีสุข</Text>
            {/* เนื้อหา */}
            <Box w={"100%"} h={'max-content'} mt={4}>
              <Text variant={"h2"} lineHeight={"28px"} textAlign={{ base: "start", md: "justify" }} color={"#676767"} fontSize={{ base: "14px", md: "16px" }}>
                1.ตรวจสอบสภาพการเงินและกําหนดเป้าหมายที่เหมาะสม
                ก่อนที่จะตัดสินใจว่าจะทําอะไรกับหนี้ ควรทําาการตรวจสอบ สภาพการเงินของคุณให้ดี
                กําหนดเป้าหมายการปลดหนี้ที่เหมาะสมและทันสมัยที่สุด ซึ่ง
                สามารถทําได้โดยการทํางบประมาณการรายรับรายจ่ายและ
                การตรวจสอบหนี้ทั้งหมด <br />
                2.สร้างแผนการชําระหนี้ที่ยืดหยุ่น
                แผนการชําระหนี้ที่ยืดหยุ่นสามารถช่วยให้คุณมีความสามารถ
                ในการจัดการการเงินของคุณได้ดีขึ้น
                การทําแผนเหล่านี้จะช่วยให้คุณมีมุมมองที่ชัดเจนเกี่ยวกับวิธี
                การลดหนี้อย่างมีระบบ<br />
                3.ตรวจสอบและปรับทรัพย์สิน
                ทรัพย์สินที่คุณมีอาจจะเป็นเครื่องมือที่สามารถ
                ใช้ในการลดหนี้ การตรวจสอบและปรับทรัพย์สินเพื่อให้เหมาะ
                สมกับแผนการปลดหนี้ของคุณ<br />
                4.พิจารณาหารายได้เสริม
                การหาทางที่จะเพิ่มรายได้เสริมสามารถช่วยให้คุณมีเงินมาช่วย ในการชําระหนี้ นอกจากงานที่ทําประจํา คุณสามารถพิจารณา ทางเลือกอื่น ๆ เช่น งานพาร์ทไทม์หรือธุรกิจของตัวเอง<br />
                5.ควบคุมการใช้จ่าย
                การควบคุมการใช้จ่ายเป็นสิ่งสําคัญในการปลดหนี้ การทํารายการรายจ่ายอย่างรอบคอบและการลดค่าใช้จ่ายที่ไม่ จําเป็นจะช่วยให้คุณมีเงินเก็บสะสมไว้ในการชําระหนี้<br />
                6.สร้างฟันเฟืองการเงิน
                การสร้างฟันเฟืองการเงินเป็นการป้องกันอันดับในการเสี่ยง
                ทางการเงิน การเตรียมตัวกับการสร้างฟันเฟืองจะช่วยให้คุณ
                สามารถรับมือกับภาวะฉุกเฉินทางการเงิน<br />
                7.รวบรวมกําลังใจและสนับสนุน
                การมีกําลังใจและสนับสนุนจากครอบครัวและเพื่อนๆ มีความ
                สําคัญมากในการผ่านวิกฤตการเงิน
                พูดคุยกับคนที่คุณไว้วางใจเพื่อหาคําปรึกษาและสนับสนุนที่
                จําเป็น<br />
                ในปี 2024 นี้ ไม่ว่าคุณจะเริ่มต้นการปลดหนี้หรือกําลังต่อสู้กับ มัน การจัดการหนี้อย่างมีสุขสามารถทําให้คุณเดินทางไปสู่
                สุขภาพการเงินที่ดีและความปลอดภัยทางการเงิน
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  )
}

export default Blogs