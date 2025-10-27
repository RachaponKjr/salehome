'use client';
import {
  Box,
  Flex,
  Text,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import Image from 'next/image';
import React, { useMemo } from 'react';
import { Link } from '../navigation';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import FlagSelect from './FlagSelect';
import { FiChevronDown } from 'react-icons/fi';

const ButtonTop = dynamic(() => import('./BtnTop'), { ssr: false });
const ButtonContact = dynamic(() => import('./BtnContact'), { ssr: false });
const MobileMenu = dynamic(() => import('./MobileMenu'), { ssr: false });

export default function Navbar({
  homeManu,
  contactManu,
  Payment,
  Product,
  docHome,
}) {
  const pathName = usePathname();
  const current = pathName.replace(/^\/+/, ''); // "" | "payment" | "announcement/option-1" ...

  const hrefOf = (p) => (p ? `/${p}` : '/');

  // ใช้ title ให้เป็นชื่อฟิลด์เดียวกันทั้งหมด (เลี่ยงสับสน tital/title)
  const manu = useMemo(
    () => [
      { title: homeManu, link: '' },
      { title: Product, link: 'product' },
      { title: Payment, link: 'payment' },
      {
        title: docHome,
        link: 'announcement', // parent ไม่ลิงก์
        children: [
          {
            key: '1',
            label: 'ประกาศอัตราดอกเบี้ย ค่าปรับ ค่าบริการและค่าธรรมเนียม',
            link: 'announcement/dokbea',
          },
          {
            key: '2',
            label: 'การคุ้มครองข้อมูลส่วนบุคคล (PDPA)',
            link: 'announcement/pdpa',
          },
          {
            key: '3',
            label: 'งบการเงิน',
            link: 'announcement/money',
          },
        ],
      },
      { title: contactManu, link: 'contact' },
    ],
    [homeManu, Product, Payment, docHome, contactManu]
  );

  // เช็ค active: ถ้าอยู่ใต้ announcement/* ให้ parent active ด้วย
  const isActive = (item) => {
    if (!item.children) return current === item.link;
    const inChild = item.children.some(
      (c) => current === c.link || current.startsWith(`${c.link}/`)
    );
    return (
      current === item.link || inChild || current.startsWith(`${item.link}/`)
    );
  };

  return (
    <>
      {/* แถบ Navbar พื้นหลัง Gradient */}
      <Box
        bgGradient="linear-gradient(90deg, rgba(47,85,83,1) 28%, rgba(49,112,109,1) 98%)"
        boxShadow="md"
        py={4}
      >
        <Flex w="100%" px={0} align="center">
          {/* โลโก้ */}
          <Box ml={10}>
            <Link href="/">
              <Image src="/imgs/logo.png" alt="logo" width={100} height={35} />
            </Link>
          </Box>

          <Spacer />

          {/* เมนูหลัก (เดสก์ท็อป) */}
          <Flex
            as="nav"
            display={{ base: 'none', md: 'flex' }}
            align="center"
            gap={{ md: 2, xl: 4 }}
            ml={4}
            pr={0}
          >
            {manu.map((item, idx) => {
              const active = isActive(item);
              const isLast = idx === manu.length - 1;

              // ---------- เมนูธรรมดา (ไม่มี dropdown) ----------
              if (!item.children) {
                return (
                  <Flex
                    key={item.link || 'home'}
                    as={Link}
                    href={hrefOf(item.link)}
                    role="group"
                    position="relative"
                    align="center"
                    px={3}
                    py={2}
                    pr={isLast ? 0 : 3}
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
                      {item.title}
                    </Text>

                    {/* เส้นวิ่งใต้เมนู */}
                    <Box
                      position="absolute"
                      bottom="0"
                      left="0"
                      h="2px"
                      bg="red.400"
                      w={active ? '100%' : '0%'}
                      _groupHover={{ w: '100%' }}
                      transition="width 0.5s ease"
                    />
                  </Flex>
                );
              }

              // ---------- เมนูที่มี dropdown (ไม่ลิงก์ที่หัวข้อหลัก) ----------
              return (
                <Menu
                  key={item.link}
                  isLazy
                  autoSelect={false}
                  placement="bottom-start"
                >
                  <MenuButton
                    as={Flex}
                    role="group"
                    position="relative"
                    align="center"
                    gap={1}
                    px={3}
                    py={2}
                    pr={isLast ? 0 : 3}
                    borderRadius="md"
                    color="white"
                    cursor="pointer"
                    _hover={{ bg: 'whiteAlpha.200' }}
                    transition="all 0.2s ease"
                  >
                    <Flex alignItems={'center'}>
                      <Text
                        fontSize={{ md: '14px', xl: '16px' }}
                        whiteSpace="nowrap"
                      >
                        {item.title}
                      </Text>
                      <Box ml={1}>
                        <FiChevronDown size={18} />
                      </Box>
                    </Flex>

                    {/* เส้นวิ่งใต้เมนู */}
                    <Box
                      position="absolute"
                      bottom="0"
                      left="0"
                      h="2px"
                      bg="red.400"
                      w={active ? '100%' : '0%'}
                      _groupHover={{ w: '100%' }}
                      transition="width 0.5s ease"
                    />
                  </MenuButton>

                  <MenuList minW="220px" py={2}>
                    {item.children.map((c) => (
                      <MenuItem as={Link} href={hrefOf(c.link)} key={c.key}>
                        {c.label}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              );
            })}
          </Flex>

          {/* ตัวเปลี่ยนภาษา */}
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

      {/* เมนูมือถือ (ถ้าต้องการให้มี submenu บนมือถือ แจ้งมาได้ครับ) */}
      <MobileMenu
        homeManu={homeManu}
        Product={Product}
        Payment={Payment}
        docHome={docHome}
        contactManu={contactManu}
      />
    </>
  );
}
