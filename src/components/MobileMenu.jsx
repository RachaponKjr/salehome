'use client';
import {
  Flex,
  Grid,
  GridItem,
  Text,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
  HStack,
} from '@chakra-ui/react';
import React, { useMemo } from 'react';
import Image from 'next/image';
import { FiChevronDown } from 'react-icons/fi';
import { Link } from '../navigation';

const toHref = (v) => (v?.startsWith('/') ? v : `/${v || ''}`);

export default function MobileMenu({
  homeManu,
  contactManu,
  Payment,
  Product,
  docHome,
}) {
  const menuWidth = useBreakpointValue({ base: '92vw', sm: '80vw' });
  const itemFont = useBreakpointValue({ base: '13px', sm: '14px' });

  const items = useMemo(
    () => [
      { href: '/', icon: '/icons/nav_icons/home.png', label: homeManu },
      { href: '/payment', icon: '/icons/nav_icons/credit.png', label: Payment },
      { href: '/product', icon: '/icons/nav_icons/sale.png', label: Product },
      {
        icon: '/icons/nav_icons/edit.png',
        label: docHome,
        children: [
          {
            key: '1',
            label: 'ประกาศอัตราดอกเบี้ย ค่าปรับ ค่าบริการและค่าธรรมเนียม',
            href: '/announcement/dokbea',
          },
          {
            key: '2',
            label: 'การคุ้มครองข้อมูลส่วนบุคคล (PDPA)',
            href: '/announcement/pdpa',
          },
          {
            key: '3',
            label: 'งบการเงิน',
            href: '/announcement/money',
          },
        ],
      },
      {
        href: '/contact',
        icon: '/icons/nav_icons/headphone.png',
        label: contactManu,
      },
    ],
    [homeManu, Payment, Product, docHome, contactManu]
  );

  return (
    <Flex
      bgColor="#2F5553"
      w="100%"
      display={{ base: 'flex', md: 'none' }}
      h="75px"
      position="fixed"
      bottom={0}
      zIndex={1000}
      color="white"
    >
      <Grid templateColumns="repeat(5, 1fr)" w="100%" h="100%">
        {items.map((item, i) => (
          <GridItem
            key={`${item.label}-${i}`}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {/* ถ้ามี children ให้แสดงลูกศร FiChevronDown */}
            {item.children ? (
              <Menu isLazy placement="top" closeOnSelect>
                <MenuButton
                  as={Box}
                  display="flex"
                  flexDir="column"
                  alignItems="center"
                  justifyContent="center"
                  cursor="pointer"
                  px={2}
                  py={2}
                  _active={{ opacity: 0.9 }}
                >
                  <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                  >
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={22}
                      height={22}
                    />
                  </Box>

                  {/* ✅ ปรับ layout ของข้อความ + ลูกศรให้อยู่กึ่งกลางกันจริง ๆ */}
                  <Flex align="center" justify="center" mt={1}>
                    <Text fontSize="10px" lineHeight="1" whiteSpace="nowrap">
                      {item.label}
                    </Text>
                    <Box as={FiChevronDown} fontSize="12px" mt="1px" />
                  </Flex>
                </MenuButton>

                {/* Dropdown list */}
                <MenuList
                  w={menuWidth}
                  maxW="95vw"
                  borderRadius="14px"
                  boxShadow="lg"
                  p={2}
                  zIndex={2000}
                  bg="white"
                  color="gray.800"
                >
                  {item.children.map((c) => (
                    <MenuItem
                      as={Link}
                      href={toHref(c.href)}
                      key={c.key}
                      fontSize={itemFont}
                      py={2}
                      whiteSpace="normal"
                      lineHeight="1.4"
                      _hover={{ bg: 'teal.50', color: 'teal.700' }}
                    >
                      {c.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            ) : (
              <Link
                href={toHref(item.href)}
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '8px',
                }}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={22}
                  height={22}
                />
                <Text fontSize="10px" mt={1} noOfLines={1}>
                  {item.label}
                </Text>
              </Link>
            )}
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
}
