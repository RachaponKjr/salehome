'use client';
import { Box, Flex, Text, Spacer } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { Link } from '../navigation';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import FlagSelect from './FlagSelect';

const ButtonTop = dynamic(() => import('./BtnTop'), { ssr: false });
const ButtonContact = dynamic(() => import('./BtnContact'), { ssr: false });
const MobileMenu = dynamic(() => import('./MobileMenu'), { ssr: false });

export default function Navbar({
  homeManu,
  blogsManu,
  contactManu,
  Payment,
  Product,
  docHome,
}) {
  const pathName = usePathname();
  const current = pathName.replace(/^\/+/, ''); // "" (home) | "payment" | ...

  // รายการเมนู (ไม่มีไอคอนแล้ว)
  const manu = [
    { tital: homeManu, link: '' },
    { tital: Product, link: 'product' },
    { tital: Payment, link: 'payment' },
    // { tital: blogsManu, link: 'blogs' },
    { tital: docHome, link: 'announcement' },
    { tital: contactManu, link: 'contact' },
  ];

  const hrefOf = (p) => (p ? `/${p}` : '/');

  return (
    <>
      {/* แถบ Navbar พื้นหลัง Gradient */}
      <Box
        bgGradient="linear-gradient(90deg, rgba(47,85,83,1) 28%, rgba(49,112,109,1) 98%)"
        boxShadow="md"
        py={4}
      >
        {/* ใช้ Flex ให้เต็มจอ — ไม่มี Container เพื่อเลี่ยง padding ซ้าย/ขวา */}
        <Flex w="100%" px={0} align="center">
          {/* โลโก้ชิดซ้าย (ขยับซ้าย/ขวาด้วย ml ได้) */}
          <Box ml={10}>
            <Link href="/">
              <Image src="/imgs/logo.png" alt="logo" width={100} height={35} />
            </Link>
          </Box>

          <Spacer />

          {/* เมนูหลัก (เดสก์ท็อป) — วางก่อน FlagSelect เพื่อให้เมนูชิดขวาสุดได้จริง */}
          <Flex
            as="nav"
            display={{ base: 'none', md: 'flex' }}
            align="center"
            gap={{ md: 2, xl: 4 }} // ✅ ปรับช่องว่างระหว่างเมนูตรงนี้
            ml={4}
            pr={0} // ✅ ไม่มี padding ด้านขวา
          >
            {manu.map((item, idx) => {
              const active = current === item.link;
              const isLast = idx === manu.length - 1;

              return (
                <Flex
                  key={item.link || 'home'}
                  as={Link}
                  href={hrefOf(item.link)}
                  role="group" // ✅ ใช้กับ _groupHover ของเส้นใต้
                  position="relative" // ✅ ให้เส้นใต้วาง absolute ได้
                  align="center"
                  px={3}
                  py={2}
                  pr={isLast ? 0 : 3} // ✅ เอา padding ขวาออกจากอันสุดท้ายเพื่อชิดขวา
                  borderRadius="md"
                  color="white"
                  cursor="pointer"
                  _hover={{ bg: 'whiteAlpha.200' }}
                  transition="all 0.2s ease"
                >
                  <Text
                    fontSize={{ md: '14px', xl: '16px' }}
                    whiteSpace="nowrap"
                  >
                    {item.tital}
                  </Text>

                  {/* เส้นวิ่งใต้เมนูแบบ FlagSelect */}
                  <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    h="2px"
                    bg="red.400" // ✅ เปลี่ยนสีได้ตามต้องการ
                    w={active ? '100%' : '0%'} // ✅ หน้าที่ active ให้เส้นเต็ม 100%
                    _groupHover={{ w: '100%' }} // ✅ hover แล้วขยายเต็ม
                    transition="width 0.5s ease"
                  />
                </Flex>
              );
            })}
          </Flex>

          {/* ตัวเปลี่ยนภาษา — อยู่ริมขวาสุด */}
          <Flex align="center" ml={6} mr={6}>
            <FlagSelect />
          </Flex>
        </Flex>
      </Box>

      {/* ปุ่มลอยขวาล่าง */}
      <Box
        position="fixed"
        right={0}
        bottom={0}
        w="64px"
        display={{ base: 'none', md: 'flex' }}
        flexDir="column"
        align="center"
        gap={2}
        mx={2}
        py={4}
        zIndex={999}
      >
        <ButtonContact />
        <ButtonTop />
      </Box>

      {/* เมนูมือถือ */}
      <MobileMenu
        homeManu={homeManu}
        // blogsManu={blogsManu}
        Product={Product}
        Payment={Payment}
        docHome={docHome}
        contactManu={contactManu}
      />
    </>
  );
}
