'use client';
import { Box } from '@chakra-ui/react';
import React from 'react';
// ใช้ Link / usePathname ของ next-intl/navigation ที่ห่อ next/navigation
import { Link, usePathname } from '../navigation';
import { useLocale } from 'next-intl';

const FlagSelect = () => {
  const locale = useLocale(); // 'th' | 'en'
  const pathname = usePathname(); // path ปัจจุบัน เช่น /payment?id=123

  const nextLocale = locale === 'en' ? 'th' : 'en'; // ภาษาปลายทาง
  const label = nextLocale.toUpperCase(); // แสดง TH/EN ตามภาษาปลายทาง

  return (
    <Box role="group" position="relative" px="8px" py="4px" color="white">
      <Link
        href={pathname} // คง path เดิม
        locale={nextLocale} // สลับภาษา
        style={{ cursor: 'pointer' }}
        aria-label={`Switch to ${label}`}
        title={`Switch to ${label}`}
      >
        {label}
      </Link>

      <Box
        position="absolute"
        bottom={0}
        left={0}
        bg="red"
        w="0%"
        h="2px"
        transitionDuration="0.3s"
        _groupHover={{ width: '100%' }}
      />
    </Box>
  );
};

export default FlagSelect;
