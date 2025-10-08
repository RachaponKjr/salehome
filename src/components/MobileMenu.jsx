import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import { Link } from '../navigation';

const MobileMenu = ({
  homeManu,
  blogsManu,
  contactManu,
  Payment,
  Product,
  docHome,
}) => {
  return (
    <>
      <Flex
        bgColor={'#2F5553'}
        w="100%"
        display={{ base: 'flex', md: 'none' }}
        h="75px"
        position="fixed"
        bottom={0}
        zIndex={1000}
        color="white"
      >
        <Grid
          templateColumns="repeat(5, 1fr)" // แบ่ง 5 ช่องเท่ากัน
          w="100%"
          h="100%" // ✅ ให้ Grid สูงเท่ากับ Flex
        >
          {/* 373 ถ้าหน้า จอ 373 ปรับลด ลงมากกว่า นี้ */}
          {[
            { href: '/', icon: '/icons/nav_icons/home.png', label: homeManu },
            {
              href: '/payment',
              icon: '/icons/nav_icons/credit.png',
              label: Payment,
            },
            {
              href: '/product',
              icon: '/icons/nav_icons/sale.png',
              label: Product,
            },
            {
              href: '/announcement',
              icon: '/icons/nav_icons/edit.png',
              label: docHome,
            },
            {
              href: '/contact',
              icon: '/icons/nav_icons/headphone.png',
              label: contactManu,
            },
          ].map((item, i) => (
            <GridItem
              key={i}
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="center" // ✅ จัดให้อยู่ตรงกลางแนวตั้ง
              py={2}
            >
              <Link
                href={item.href}
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                />
                <Text fontSize="8px" mt={2}>
                  {item.label}
                </Text>
              </Link>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </>
  );
};

export default MobileMenu;
