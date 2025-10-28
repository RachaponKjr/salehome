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
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import React, { useMemo } from 'react';
import { Link } from '../navigation';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import FlagSelect from './FlagSelect';
import { FiChevronDown, FiMenu } from 'react-icons/fi';
import MobileDrawer from '../components/MobileMenu'; // ✅ เพิ่มไฟล์ใหม่นี้

const ButtonTop = dynamic(() => import('./BtnTop'), { ssr: false });
const ButtonContact = dynamic(() => import('./BtnContact'), { ssr: false });
// ❌ ถ้าจะเลิกใช้ bottom bar เดิม ให้คอมเมนต์ออก
// const MobileMenu = dynamic(() => import('./MobileMenu'), { ssr: false });

export default function Navbar({
  homeManu,
  contactManu,
  Payment,
  Product,
  docHome,
  pdpa,
}) {
  const pathName = usePathname();
  const current = pathName.replace(/^\/+/, ''); // "" | "payment" | ...

  const hrefOf = (p) => (p ? `/${p}` : '/');

  const manu = useMemo(
    () => [
      { title: homeManu, link: '' },
      { title: Product, link: 'product' },
      { title: Payment, link: 'payment' },
      {
        title: docHome,
        link: 'announcement',
        children: [
          {
            key: '1',
            label: 'ประกาศอัตราดอกเบี้ย ค่าปรับ ค่าบริการและค่าธรรมเนียม',
            link: 'announcement/Rates_Fees',
          },
          {
            key: '2',
            label: 'งบการเงิน',
            link: 'announcement/FinancialStatements',
          },
        ],
      },
      { title: pdpa, link: 'pdpa' },
      { title: contactManu, link: 'contact' },
    ],
    [homeManu, Product, Payment, docHome, contactManu, pdpa]
  );

  const isActive = (item) => {
    if (!item.children) return current === item.link;
    const inChild = item.children.some(
      (c) => current === c.link || current.startsWith(`${c.link}/`)
    );
    return (
      current === item.link || inChild || current.startsWith(`${item.link}/`)
    );
  };

  // สำหรับ Drawer มือถือ
  const drawerDisclosure = useDisclosure();

  return (
    <>
      {/* แถบ Navbar */}
      <Box
        bgGradient="linear-gradient(90deg, rgba(47,85,83,1) 28%, rgba(49,112,109,1) 98%)"
        boxShadow="md"
        py={4}
        position="sticky"
        top={0}
        zIndex={1000}
      >
        <Flex w="100%" px={0} align="center">
          {/* ปุ่ม Hamburger (มือถือ) */}
          <Box display={{ base: 'block', md: 'none' }} pl={2}>
            <IconButton
              aria-label="Open menu"
              icon={<FiMenu size={22} />}
              variant="ghost"
              color="white"
              _hover={{ bg: 'whiteAlpha.200' }}
              onClick={drawerDisclosure.onOpen}
            />
          </Box>

          {/* โลโก้ */}
          {/* <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Link href="/">
              <Image src="/imgs/logo.png" alt="logo" width={100} height={35} />
            </Link>
          </Box> */}

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

              if (!item.children) {
                return (
                  <Flex
                    key={item.link || 'home'}
                    as={Link}
                    href={hrefOf(item.link)}
                    role="group"
                    position="relative"
                    align="center"
                    px={1}
                    py={2}
                    pr={isLast ? 0 : 3}
                    borderRadius="md"
                    color="white"
                    cursor="pointer"
                    _hover={{ bg: 'whiteAlpha.200' }}
                    transition="all 0.2s ease"
                  >
                    <Text
                      fontSize={{ md: '12px', xl: '14px' }}
                      whiteSpace="nowrap"
                    >
                      {item.title}
                    </Text>
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
                    <Flex alignItems="center">
                      <Text
                        fontSize={{ md: '12px', xl: '14px' }}
                        whiteSpace="nowrap"
                      >
                        {item.title}
                      </Text>
                      <Box ml={1}>
                        <FiChevronDown size={18} />
                      </Box>
                    </Flex>
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

          {/* เปลี่ยนภาษา (เดสก์ท็อป) */}
          <Flex align="center" ml={6} mr={{ base: 2, md: 6 }}>
            <Box
              display={{ base: 'none', md: 'block' }}
              fontSize={{ md: '12px', xl: '14px' }}
            >
              <FlagSelect />
            </Box>
          </Flex>
        </Flex>
      </Box>

      {/* ปุ่มลอยขวาล่าง (เดสก์ท็อป) */}
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

      {/* Drawer มือถือ */}
      <MobileDrawer
        isOpen={drawerDisclosure.isOpen}
        onClose={drawerDisclosure.onClose}
        manu={manu}
        hrefOf={hrefOf}
        current={current}
      />

      {/* ❌ เลิกใช้ bottom bar เดิม */}
      {/* <MobileMenu ... /> */}
    </>
  );
}
