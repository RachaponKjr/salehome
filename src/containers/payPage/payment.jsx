'use client';

import {
  Box,
  Container,
  Flex,
  Heading,
  Input,
  Button,
  Text,
  VStack,
  HStack,
  useToast,
  Image as CImage,
  Spinner,
  Divider,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useMemo, useState, useRef } from 'react';
import { IoQrCodeOutline } from 'react-icons/io5';
import { IoMdDownload } from 'react-icons/io';

// const API_BASE =
//   (typeof process !== 'undefined' &&
//     process.env?.NEXT_PUBLIC_API_BASE?.replace(/\/+$/, '')) ||
//   'http://localhost:5140';

const API_BASE = 'http://18.140.121.108:5120';

// ===== Build payload (ตาม C# ที่ให้มา) =====
function buildBillBarcodePayload({
  taxId13,
  customerId,
  personalId,
  amount = 0,
}) {
  const tax = String(taxId13 || '').trim();
  const r1 = String(customerId || '').trim();
  const r2 = String(personalId || '').trim();
  const amt = String(amount || 0).trim();
  return '|' + tax + '00' + '\r' + r1 + '\r' + r2 + '\r' + amt; // ใช้ \r
}

// ===== Normalize backend fields =====
function normalizeItem(item) {
  if (!item) return null;
  return {
    personalId: item.PersonalID || item.personalId || null,
    customerId: item.CustomerID || item.customerId || null,
    companyTaxId: item.CompanyTaxID || item.companyTaxId || '0105546031394',
    amount: item.amount != null ? Number(item.amount) : 0,
    contractNo: item.ContractNo || item.contractNo || item.CustomerID || '',
    productName: item.TProductName || item.productName || '',
    buyFromName: item.TBuyFromName || item.buyFromName || '',
  };
}

// ===== แปลง response เป็น list items =====
function extractItems(json) {
  if (!json) return [];
  if (Array.isArray(json)) return json;
  if (Array.isArray(json.data)) return json.data;
  return [json];
}

function Payment({ homeManu, Payment: paymentText }) {
  const router = usePathname();
  const toast = useToast();

  const inputRef = useRef(null);

  // input
  const [nationalId, setNationalId] = useState('');

  // loading & view state
  const [loading, setLoading] = useState(false);

  // search results (กรณีพบหลายสัญญา)
  const [results, setResults] = useState([]); // raw list (ยังไม่ normalize)
  const normalizedResults = useMemo(
    () => results.map(normalizeItem).filter(Boolean),
    [results]
  );

  const [pickedIndex, setPickedIndex] = useState(null); // index ของสัญญาที่เลือก

  // QR output
  const [qrDataUrl, setQrDataUrl] = useState(null);
  const [qrString, setQrString] = useState(null);
  const [picked, setPicked] = useState(null); // เก็บข้อมูลสัญญาที่สร้าง QR แล้ว

  // ----- actions -----
  const resetAll = () => {
    setNationalId('');
    setResults([]);
    setPickedIndex(null);
    setQrDataUrl(null);
    setQrString(null);
    setPicked(null);
    setLoading(false);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleSearch = async () => {
    // เคลียร์/ตรวจสอบ input
    const id = (nationalId || '').replace(/\D/g, '');
    if (id.length !== 13) {
      toast({
        title: 'หมายเลขบัตรประชาชนไม่ถูกต้อง',
        description: 'กรุณากรอกเลขบัตรประชาชน 13 หลัก',
        status: 'warning',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
      return;
    }

    setLoading(true);
    // ล้างสถานะก่อนค้นหา
    setResults([]);
    setPickedIndex(null);
    setQrDataUrl(null);
    setQrString(null);
    setPicked(null);

    try {
      const res = await fetch(`${API_BASE}/getpay/${id}`, {
        cache: 'no-store',
        mode: 'cors',
        headers: { 'ngrok-skip-browser-warning': 'true' },
      });

      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(`API ${res.status}: ${text || 'fetch failed'}`);
      }

      const json = await res.json();
      const items = extractItems(json).filter(Boolean);

      if (items.length === 0) {
        toast({
          title: 'ไม่พบข้อมูลสัญญา',
          description: 'กรุณาตรวจสอบเลขบัตรประชาชนใหม่อีกครั้ง ขอบคุณค่ะ/ครับ',
          status: 'info',
          duration: 3000,
          isClosable: true,
          position: 'top',
        });
        return;
      }

      // ⭐ เก็บผลไว้เสมอ เพื่อให้ UI รู้ว่ามีกี่รายการ
      setResults(items);

      if (items.length === 1) {
        // ⭐ พบ 1 รายการ → เลือกอัตโนมัติ + gen QR
        setPickedIndex(0);
        await generateQrFromItem(items[0]);
        toast({
          title: 'พบ 1 รายการ',
          description: 'สร้าง QR Code ให้เรียบร้อยแล้ว',
          status: 'success',
          duration: 2000,
          isClosable: true,
          position: 'top',
        });
        return;
      }

      // >1 รายการ → ให้ผู้ใช้เลือกก่อน
      toast({
        title: `พบ ${items.length} รายการ`,
        description: 'โปรดเลือกสัญญาที่ต้องการ แล้วกด "สร้าง QR Code"',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    } catch (err) {
      console.error(err);
      toast({
        title: 'เกิดข้อผิดพลาด',
        description: err?.message || 'ไม่สามารถดึงข้อมูลได้',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
    } finally {
      setLoading(false);
    }
  };

  // ชื่อองค์กรสำหรับหัวรูป (แก้ได้ หรือใช้ env ก็ได้)
  const COMPANY_TITLE = 'บริษัท บริหารสินทรัพย์ ซีเอฟ เอเชีย จำกัด';

  function downloadQrImage() {
    if (!qrDataUrl) {
      toast({
        title: 'ยังไม่มี QR Code',
        description: 'กรุณาค้นหาและสร้าง QR Code ก่อน',
        status: 'warning',
        position: 'top',
      });
      return;
    }

    // หาข้อมูลที่เลือก (กรณีมีหลายสัญญา)
    const selected = normalizedResults[pickedIndex ?? 0] || null;
    const contractNo =
      picked?.customerId || selected?.customerId || selected?.contractNo || '';

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = qrDataUrl;

    img.onload = function () {
      const qrW = img.naturalWidth || 300;
      const qrH = img.naturalHeight || 300;

      // ===== layout base =====
      const padding = 48;
      const gapHrTop = 24;
      const gapText = 36;
      const footerH = 34;

      const Cw = Math.max(520, qrW + padding * 2);

      // เตรียม ctx ชั่วคราวเพื่อคำนวณฟอนต์หัวเรื่อง
      const tmp = document.createElement('canvas').getContext('2d');
      const maxHeaderWidth = Cw - padding * 2;
      const fit = fitFontSize(tmp, COMPANY_TITLE, maxHeaderWidth, 2, 20, 12);
      const headerH = Math.max(72, fit.lineHeight * fit.lines + 40);

      const Ch = headerH + qrH + gapHrTop + gapText + footerH + padding * 2;

      // ===== สร้าง canvas จริง (รองรับ Retina) =====
      const dpr = window.devicePixelRatio || 1;
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(Cw * dpr);
      canvas.height = Math.round(Ch * dpr);
      const ctx = canvas.getContext('2d');
      ctx.scale(dpr, dpr);

      // bg
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, Cw, Ch);
      ctx.textAlign = 'center';

      // ===== วาดหัวบริษัท =====
      ctx.fillStyle = '#0f766e';
      ctx.font = `bold ${fit.fontSize}px sans-serif`;
      drawWrappedText(
        ctx,
        COMPANY_TITLE,
        Cw / 2,
        padding + 24,
        maxHeaderWidth,
        fit.lineHeight,
        true
      );

      // hr ใต้หัว
      const hrUnderCompanyY = padding + headerH - 22;
      drawHr(ctx, padding, Cw - padding, hrUnderCompanyY);

      // วาด QR
      const qrX = (Cw - qrW) / 2;
      const qrY = padding + headerH;
      ctx.drawImage(img, qrX, qrY, qrW, qrH);

      // hr เหนือข้อความสัญญา
      const hrAboveContractY = qrY + qrH + gapHrTop;
      drawHr(ctx, padding, Cw - padding, hrAboveContractY);

      // ข้อความสัญญา
      ctx.fillStyle = '#0b0f10';
      ctx.font = 'bold 16px sans-serif';
      const bottomY = hrAboveContractY + 32;
      const contractText = contractNo ? `เลขที่สัญญา : ${contractNo}` : '';
      drawWrappedText(
        ctx,
        contractText,
        Cw / 2,
        bottomY,
        Cw - padding * 2,
        26,
        false
      );

      // ดาวน์โหลดไฟล์
      const fileName = `QR_บริษัท_บริหารสินทรัพย์ซีเอฟเอเชีย_จำกัด_${contractNo}`;
      if (canvas.toBlob) {
        canvas.toBlob((blob) => {
          const url = URL.createObjectURL(blob);
          triggerDownload(url, fileName);
        }, 'image/png');
      } else {
        triggerDownload(canvas.toDataURL('image/png'), fileName);
      }
    };

    img.onerror = function () {
      toast({ title: 'โหลดรูป QR ไม่ได้', status: 'error', position: 'top' });
    };

    // ===== helpers =====
    function drawHr(ctx, x1, x2, y) {
      ctx.beginPath();
      ctx.moveTo(x1, y);
      ctx.lineTo(x2, y);
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#e5e7eb';
      ctx.stroke();
    }

    function drawWrappedText(
      ctx,
      text,
      centerX,
      startY,
      maxWidth,
      lineHeight,
      capTwoLines
    ) {
      if (!text) return;
      const words = String(text).split(/\s+/);
      let line = '',
        y = startY,
        lines = 0;
      for (let i = 0; i < words.length; i++) {
        const test = line ? line + ' ' + words[i] : words[i];
        if (ctx.measureText(test).width > maxWidth && i > 0) {
          ctx.fillText(line, centerX, y);
          line = words[i];
          y += lineHeight;
          lines++;
          if (capTwoLines && lines >= 2) {
            let ell = '…';
            while (
              ctx.measureText(line + ell).width > maxWidth &&
              line.length
            ) {
              line = line.slice(0, -1);
            }
            ctx.fillText(line + ell, centerX, y);
            return;
          }
        } else {
          line = test;
        }
      }
      ctx.fillText(line, centerX, y);
    }

    function fitFontSize(
      ctx,
      text,
      maxWidth,
      maxLines = 2,
      maxFont = 24,
      minFont = 12
    ) {
      for (let fs = maxFont; fs >= minFont; fs--) {
        ctx.font = `bold ${fs}px sans-serif`;
        const words = String(text || '')
          .trim()
          .split(/\s+/);
        let line = '',
          lines = 1;
        for (let i = 0; i < words.length; i++) {
          const test = line ? line + ' ' + words[i] : words[i];
          if (ctx.measureText(test).width > maxWidth && i > 0) {
            lines++;
            line = words[i];
            if (lines > maxLines) break;
          } else {
            line = test;
          }
        }
        if (lines <= maxLines) {
          const lineHeight = Math.round(fs * 1.15);
          return { fontSize: fs, lineHeight, lines };
        }
      }
      const lineHeight = Math.round(minFont * 1.15);
      return { fontSize: minFont, lineHeight, lines: maxLines };
    }

    function triggerDownload(url, fileName) {
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL?.(url);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loading) handleSearch();
  };

  const generateQrFromItem = async (rawItem) => {
    const norm = normalizeItem(rawItem);
    if (!norm || !norm.customerId) {
      toast({
        title: 'ข้อมูลสัญญาไม่ครบ',
        status: 'error',
        duration: 2500,
        isClosable: true,
      });
      return;
    }

    const personalId = norm.personalId || nationalId;
    const payload = buildBillBarcodePayload({
      taxId13: norm.companyTaxId,
      customerId: norm.customerId,
      personalId,
      amount: norm.amount || 0,
    });

    const QRCode = (await import('qrcode')).default;
    const dataUrl = await QRCode.toDataURL(payload, {
      errorCorrectionLevel: 'M',
      margin: 1,
      scale: 8,
    });

    setQrString(payload);
    setQrDataUrl(dataUrl);
    setPicked({
      customerId: norm.customerId,
      personalId,
      amount: norm.amount || 0,
    });
  };

  const handleGenerateFromPicked = async () => {
    if (pickedIndex == null) {
      toast({
        title: 'ยังไม่ได้เลือกสัญญา',
        status: 'warning',
        duration: 2500,
        isClosable: true,
      });
      return;
    }
    const raw = results[pickedIndex];
    await generateQrFromItem(raw);
  };

  // ----- UI -----
  return (
    <>
      <Head>
        <link
          rel="alternate"
          hrefLang="th"
          href="https://www.cfasia.co.th/th/blogs"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://www.cfasia.co.th/en/blogs"
        />
        <link rel="canonical" href={`https://www.cfasia.co.th${router}`} />
      </Head>

      {/* Breadcrumb */}
      <Box
        w="100%"
        py={{ base: 2, md: 3 }}
        boxShadow="rgba(0,0,0,0.08) 0px 1px 4px"
      >
        <Container
          maxW={{
            base: 'container.md',
            lg: 'container.lg',
            xl: 'container.xl',
          }}
        >
          <Flex
            w="100%"
            gap={2}
            alignItems="center"
            fontSize={{ base: 'sm', md: 'md' }}
          >
            <Link href="/">{homeManu}</Link>
            <Text>/</Text>
            <Link href="/payment">
              <Text color="#02685C">{paymentText}</Text>
            </Link>
          </Flex>
        </Container>
      </Box>

      {/* Main */}
      <Box bg="gray.50" minH="100vh" py={{ base: 6, md: 10 }}>
        <Container
          maxW={{
            base: 'container.md',
            lg: 'container.lg',
            xl: 'container.xl',
          }}
        >
          <VStack spacing={{ base: 4, md: 6 }} mb={{ base: 6, md: 10 }}>
            <Text
              fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}
              color="gray.800"
              fontWeight="bold"
              textAlign="center"
            >
              ขอแบบฟอร์มชำระเงิน
            </Text>
            <Box w={{ base: '80px', md: '120px' }} h="1" bg="red.500" />
          </VStack>

          {/* 2 คอลัมน์: ซ้าย-ขวา / มือถือเป็น 1 คอลัมน์ */}
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 4, md: 6, lg: 8 }}
          >
            {/* Left */}
            <Box
              bg="white"
              p={{ base: 4, md: 6, lg: 8 }}
              borderRadius="lg"
              shadow="md"
            >
              <VStack spacing={{ base: 4, md: 6 }} align="stretch">
                <Text
                  as="h3"
                  color="gray.700"
                  fontSize={{ base: 'sm', md: 'md' }}
                >
                  บัตรประชาชน 13 หลัก
                </Text>
                <Box as="form" onSubmit={handleSubmit} noValidate w="full">
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    spacing={{ base: 3, md: 4 }}
                    align="stretch"
                  >
                    <InputGroup flex={1}>
                      {/* PREFIX นับอักขระ */}

                      <Input
                        ref={inputRef}
                        placeholder="ระบุบัตรประชาชน 13 หลัก"
                        size={{ base: 'md', md: 'md' }}
                        value={nationalId}
                        onChange={(e) => {
                          const v = e.target.value.replace(/\D/g, '');
                          if (v.length <= 13) setNationalId(v);
                        }}
                        maxLength={13}
                        isDisabled={loading}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        autoComplete="off"
                      />
                      <InputRightElement
                        h="100%"
                        w={{ base: '56px', md: '72px' }} // ← กว้างคงที่ กัน layout กระตุก
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        pointerEvents="none"
                      >
                        <Text
                          fontSize={{ base: 'xs', md: 'sm' }}
                          color="gray.500"
                          fontFamily="mono"
                        >
                          {nationalId.length}/13
                        </Text>
                      </InputRightElement>
                    </InputGroup>

                    <Button
                      type="submit"
                      colorScheme="red"
                      size={{ base: 'md', md: 'md' }}
                      px={{ base: 4, md: 8 }}
                      // onClick={handleSearch}
                      isDisabled={loading}
                      w={{ base: '100%', sm: 'auto' }}
                    >
                      {loading ? <Spinner size="sm" /> : 'ค้นหา'}
                    </Button>
                  </Stack>
                </Box>

                <Flex justify="start" fontSize="sm" color="gray.600">
                  <Text ml={1}>กรุณาระบุหมายเลขบัตรประชาชน 13 หลักของท่าน</Text>
                </Flex>

                {normalizedResults.length > 1 ? (
                  // 👉 กรณีมากกว่า 1: แสดงให้เลือก + ปุ่ม
                  <Box mt={{ base: 2, md: 4 }}>
                    <Text fontWeight="bold" mb={{ base: 2, md: 3 }}>
                      เลือกสัญญาที่ต้องการชำระเงิน
                    </Text>

                    <RadioGroup
                      value={pickedIndex?.toString() ?? ''}
                      onChange={(v) => setPickedIndex(Number(v))}
                    >
                      <VStack align="stretch" spacing={{ base: 2, md: 3 }}>
                        {normalizedResults.map((it, idx) => (
                          <Box
                            key={idx}
                            border="2px"
                            borderColor={
                              pickedIndex === idx ? '#305553' : 'gray.200'
                            }
                            bg={pickedIndex === idx ? '#f8fdfa' : 'white'}
                            rounded="md"
                            p={{ base: 3, md: 4 }}
                            cursor="pointer"
                            transition="all 0.15s ease"
                            _hover={{
                              borderColor: '#305553',
                              bg: '#f2f8f6',
                              transform: 'translateY(-2px)',
                            }}
                            _active={{ transform: 'scale(0.99)' }}
                            onClick={() => setPickedIndex(idx)}
                          >
                            <HStack align="center" spacing={{ base: 3, md: 4 }}>
                              <Radio
                                value={String(idx)}
                                isChecked={pickedIndex === idx}
                                size={{ base: 'sm', md: 'md' }}
                                colorScheme="teal"
                                mt="1px"
                                flexShrink={0}
                              />
                              <Box flex="1" minW={0}>
                                <Text
                                  fontSize={{ base: 'sm', md: 'md' }}
                                  lineHeight="short"
                                  fontWeight="semibold"
                                  noOfLines={1}
                                >
                                  เลขที่สัญญา :{' '}
                                  <b>{it.customerId || it.contractNo}</b>
                                </Text>
                                {it.productName && (
                                  <Text
                                    fontSize={{ base: 'sm', md: 'md' }}
                                    color="gray.700"
                                    lineHeight="short"
                                    noOfLines={1}
                                  >
                                    บัญชี {it.productName}
                                  </Text>
                                )}
                                {it.buyFromName && (
                                  <Text
                                    fontSize={{ base: 'sm', md: 'md' }}
                                    color="gray.600"
                                    lineHeight="short"
                                    noOfLines={2}
                                  >
                                    รับโอนหนี้จาก {it.buyFromName}
                                  </Text>
                                )}
                              </Box>
                            </HStack>
                          </Box>
                        ))}
                      </VStack>
                    </RadioGroup>

                    <Stack
                      mt={{ base: 3, md: 4 }}
                      direction={{ base: 'column', sm: 'row' }}
                      spacing={3}
                    >
                      <Button
                        colorScheme="red"
                        onClick={handleGenerateFromPicked}
                        isDisabled={pickedIndex == null}
                        w={{ base: '100%', sm: 'auto' }}
                      >
                        สร้าง QR Code
                      </Button>
                      <Button
                        bg={'#2F5856'}
                        color={'white'}
                        _hover={'none'}
                        onClick={resetAll}
                        w={{ base: '100%', sm: 'auto' }}
                      >
                        Reset
                      </Button>
                    </Stack>
                  </Box>
                ) : normalizedResults.length === 1 ? (
                  // 👉 กรณีพบ 1 รายการ: โชว์ข้อความสรุป (QR ถูก gen แล้วจาก handleSearch)
                  <Box mt={{ base: 2, md: 4 }}>
                    <VStack
                      align="start"
                      spacing={0}
                      fontSize={{ base: 'sm', md: 'md' }}
                      color="gray.700"
                    >
                      <Text fontSize={{ base: 'xs', md: 'md' }}>
                        เลขที่สัญญา :{' '}
                        <b>
                          {normalizedResults[0].customerId ||
                            normalizedResults[0].contractNo}
                        </b>
                      </Text>
                      {normalizedResults[0].productName && (
                        <Text fontSize={{ base: 'xs', md: 'md' }}>
                          บัญชี {normalizedResults[0].productName}
                        </Text>
                      )}
                      {normalizedResults[0].buyFromName && (
                        <Text
                          color="gray.600"
                          fontSize={{ base: 'xs', md: 'md' }}
                        >
                          รับโอนหนี้จาก {normalizedResults[0].buyFromName}
                        </Text>
                      )}

                      <Box w={'100%'} mt={3} textAlign={'end'}>
                        <Button
                          bg={'#2F5856'}
                          color={'white'}
                          _hover={'none'}
                          onClick={resetAll}
                          w={{ base: '100%', sm: 'auto' }}
                        >
                          Reset
                        </Button>
                      </Box>
                    </VStack>
                  </Box>
                ) : null}
              </VStack>
            </Box>

            {/* Right */}
            <Box
              bg="white"
              p={{ base: 4, md: 6, lg: 8 }}
              borderRadius="lg"
              shadow="md"
            >
              <VStack spacing={{ base: 4, md: 6 }}>
                {picked?.customerId && (
                  <VStack
                    spacing={1}
                    fontSize={{ base: 'sm', md: 'sm' }}
                    color="gray.700"
                  >
                    <Text fontSize={{ base: 'xs', md: 'md' }}>
                      <b>บริษัท บริหารสินทรัพย์ ซีเอฟ เอเชีย จำกัด</b>
                    </Text>
                    <Divider />
                  </VStack>
                )}

                {/* <Divider /> */}

                <Box
                  w={{ base: '180px', md: '220px' }}
                  h={{ base: '180px', md: '220px' }}
                  bg="gray.100"
                  borderRadius="md"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  overflow="hidden"
                >
                  {qrDataUrl ? (
                    <CImage
                      src={qrDataUrl}
                      alt="Payment QR Code"
                      w="100%"
                      h="100%"
                      objectFit="contain"
                    />
                  ) : (
                    <VStack spacing={2}>
                      <Box color="gray.500">
                        <IoQrCodeOutline size={150} />
                      </Box>
                    </VStack>
                  )}
                </Box>

                {picked?.customerId && (
                  <VStack spacing={1} color="gray.700">
                    <Text fontSize={{ base: 'xs', md: 'md' }}>
                      เลขที่สัญญา: <b>{picked.customerId}</b>
                    </Text>
                    <Button
                      bg={'#2F5856'}
                      color={'white'}
                      mt={2}
                      onClick={downloadQrImage}
                      // rounded={'50px'}
                      _hover={'none'}
                    >
                      <IoMdDownload size={22} />
                    </Button>
                  </VStack>
                )}

                {qrString && (
                  <>
                    <Divider />
                    <Box
                      w="100%"
                      bg="gray.50"
                      p={{ base: 2, md: 3 }}
                      borderRadius="md"
                      fontFamily="mono"
                      fontSize={{ base: 'xs', md: 'xs' }}
                      color="gray.600"
                    >
                      <Box
                        fontSize={{ base: 'xs', md: 'md' }}
                        fontFamily={'sans-serif'}
                      >
                        <Text mb={1} fontWeight="bold">
                          วิธีการใช้งาน:
                        </Text>
                        <Text>1. เปิดแอปธนาคารของคุณ</Text>
                        <Text>2. เลือกเมนู "สแกน QR Code" หรือ "จ่ายเงิน"</Text>
                        <Text>3. สแกน QR Code ด้านบน</Text>
                        <Text>4. ระบุจำนวนเงินที่ต้องการชำระ</Text>
                        <Text>5. ยืนยันการทำรายการ</Text>
                      </Box>
                    </Box>
                  </>
                )}

                {/* {!qrDataUrl && (
                  <Text
                    fontSize={{ base: 'xs', md: 'sm' }}
                    color="gray.600"
                    textAlign="center"
                  >
                    กรุณาระบุหมายเลขบัตรประชาชน 13 หลักของท่าน
                  </Text>
                )} */}
              </VStack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}

export default Payment;
