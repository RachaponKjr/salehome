'use client';
import {
  Box,
  Container,
  Text,
  Flex,
  Grid,
  GridItem,
  Input,
  Textarea,
  Select,
  Image,
  Button,
  Link,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import { FaPhoneAlt, FaLine } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Head from 'next/head';
import { usePathname } from 'next/navigation';

function Contact({ homeManu, contactManu }) {
  const router = usePathname();
  const [formData, setFormData] = useState({
    Topic: '',
    Name: '',
    Phone: '',
    Email: '',
    Detail: '',
  });
  const [acceptPolicy, setAcceptPolicy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/createfrom', {
        method: 'POST',
        cache: 'no-store',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
        alert('บันทึกข้อมูลสำเร็จ!!');

        // รีเซ็ตฟอร์ม
        setFormData({
          Topic: '',
          Name: '',
          Phone: '',
          Email: '',
          Detail: '',
        });
        setAcceptPolicy(false);
      } else {
        const error = await response.json();
        console.error('Error:', error);
        alert('เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้ กรุณาลองใหม่อีกครั้ง');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ตรวจสอบว่ากรอกครบทุกช่องและติก checkbox หรือยัง
  const isFormValid =
    formData.Topic !== '' &&
    formData.Name !== '' &&
    formData.Phone !== '' &&
    formData.Detail !== '' &&
    acceptPolicy;

  return (
    <>
      <Head>
        <link
          rel="alternate"
          hrefLang="th"
          href="https://www.cfasia.co.th/th/contact"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://www.cfasia.co.th/en/contact"
        />
        <link rel="canonical" href={`https://www.cfasia.co.th${router}`} />
      </Head>

      {/* Breadcrumb */}
      <Box
        w={'100%'}
        h={'max-content'}
        py={'8px'}
        boxShadow={'rgba(0, 0, 0, 0.16) 0px 1px 4px'}
      >
        <Container maxW={'container.xl'} h={'100%'}>
          <Flex w={'100%'} gap={2} alignItems={'center'} h={'100%'}>
            <NextLink href={'/'}>
              <Text>{homeManu}</Text>
            </NextLink>
            <Text>/</Text>
            <NextLink href={'/contact'}>
              <Text color={'#02685C'}>{contactManu}</Text>
            </NextLink>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container
        maxW={'container.xl'}
        mb={{ base: '16px', md: '28px', lg: '254px' }}
        mt={'16px'}
        w={'100%'}
        h={'max-content'}
      >
        <Flex h={'100%'} flexDirection={'column'} gap={4}>
          {/* Header */}
          <Box>
            <Text variant={'h2'} fontSize={'24px'} fontWeight={'bold'}>
              ติดต่อเรา
            </Text>
            <Box w={'80px'} h={'3px'} bg={'red.500'} mt={2}></Box>
          </Box>

          {/* Main Card */}
          <Box
            maxW={'100%'}
            bgColor={'white'}
            boxShadow={'rgba(0, 0, 0, 0.16) 0px 1px 4px'}
            rounded={'10px'}
            px={{ base: 4, md: 6, lg: 10 }}
            py={{ base: 6, md: 8 }}
            mx={'auto'}
            w={'100%'}
          >
            <Grid
              templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
              gap={{ base: 8, lg: 12 }}
            >
              {/* Left Side - Form */}
              <GridItem>
                <Flex alignItems={'center'} mb={6}>
                  <Text
                    fontSize={{ base: '16px', md: '18px' }}
                    fontWeight={'bold'}
                    color={'red.500'}
                  >
                    แบบฟอร์มติดต่อเรา
                  </Text>
                </Flex>

                <Box as="form" onSubmit={handleSubmit}>
                  <Flex flexDirection={'column'} gap={5}>
                    {/* Topic Select */}
                    <Box>
                      <Select
                        name="Topic"
                        value={formData.Topic}
                        onChange={handleChange}
                        placeholder="-- กรุณาเลือกหัวข้อที่ต้องการติดต่อ * --"
                        size={{ base: 'sm', md: 'md' }}
                        borderColor={'gray.300'}
                        _focus={{
                          borderColor: 'teal.500',
                          boxShadow: '0 0 0 1px #305A58',
                        }}
                        required
                      >
                        <option value="problem">แจ้งเรื่องร้องเรียน</option>
                        <option value="general">สอบถามข้อมูล</option>
                        <option value="other">อื่นๆ</option>
                      </Select>
                    </Box>

                    {/* Name and Phone */}
                    <Grid
                      templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
                      gap={4}
                    >
                      <GridItem>
                        <Text fontSize={{ base: '14px', md: '16px' }} mb={2}>
                          ชื่อ - นามสกุล *
                        </Text>
                        <Input
                          name="Name"
                          value={formData.Name}
                          onChange={handleChange}
                          size={{ base: 'sm', md: 'md' }}
                          borderColor={'gray.300'}
                          _focus={{
                            borderColor: 'teal.500',
                            boxShadow: '0 0 0 1px #305A58',
                          }}
                          required
                        />
                      </GridItem>
                      <GridItem>
                        <Text fontSize={{ base: '14px', md: '16px' }} mb={2}>
                          เบอร์โทรศัพท์ *
                        </Text>
                        <Input
                          name="Phone"
                          type="tel"
                          value={formData.Phone}
                          onChange={handleChange}
                          size={{ base: 'sm', md: 'md' }}
                          borderColor={'gray.300'}
                          _focus={{
                            borderColor: 'teal.500',
                            boxShadow: '0 0 0 1px #305A58',
                          }}
                          maxLength={10}
                          required
                        />
                      </GridItem>
                    </Grid>

                    {/* Email */}
                    <Box>
                      <Text fontSize={{ base: '14px', md: '16px' }} mb={2}>
                        Email
                      </Text>
                      <Input
                        name="Email"
                        type="email"
                        value={formData.Email}
                        onChange={handleChange}
                        size={{ base: 'sm', md: 'md' }}
                        borderColor={'gray.300'}
                        _focus={{
                          borderColor: 'teal.500',
                          boxShadow: '0 0 0 1px #305A58',
                        }}
                      />
                    </Box>

                    {/* Message */}
                    <Box>
                      <Text fontSize={{ base: '14px', md: '16px' }} mb={2}>
                        แจ้งรายละเอียด *
                      </Text>
                      <Textarea
                        name="Detail"
                        value={formData.Detail}
                        onChange={handleChange}
                        rows={6}
                        borderColor={'gray.300'}
                        _focus={{
                          borderColor: 'teal.500',
                          boxShadow: '0 0 0 1px #305A58',
                        }}
                        required
                      />
                    </Box>

                    {/* Privacy Policy Checkbox */}
                    <Flex alignItems={'flex-start'} gap={2}>
                      <input
                        type="checkbox"
                        checked={acceptPolicy}
                        onChange={(e) => setAcceptPolicy(e.target.checked)}
                        required
                        style={{ marginTop: '4px', flexShrink: 0 }}
                      />
                      <Text
                        fontSize={{ base: '13px', md: '14px' }}
                        lineHeight={'tall'}
                      >
                        ข้าพเจ้าได้อ่านและยอมรับข้อกำหนดและเงื่อนไขที่ระบุไว้ใน{' '}
                        <NextLink
                          href="/policy/20250305-chase-privacy-policy-th.pdf"
                          target="_blank"
                          style={{
                            color: '#3182CE',
                            textDecoration: 'underline',
                          }}
                        >
                          นโยบายคุ้มครองข้อมูลส่วนบุคคล
                        </NextLink>
                      </Text>
                    </Flex>

                    {/* Submit Button */}
                    <Flex justifyContent={'center'} mt={4}>
                      <button
                        type="submit"
                        disabled={!isFormValid || isSubmitting}
                        style={{
                          padding: '12px 48px',
                          backgroundColor:
                            isFormValid && !isSubmitting ? 'white' : '#E2E8F0',
                          border:
                            isFormValid && !isSubmitting
                              ? '2px solid #E53E3E'
                              : '2px solid #CBD5E0',
                          borderRadius: '8px',
                          color:
                            isFormValid && !isSubmitting
                              ? '#E53E3E'
                              : '#A0AEC0',
                          fontSize: '16px',
                          fontWeight: 'bold',
                          cursor:
                            isFormValid && !isSubmitting
                              ? 'pointer'
                              : 'not-allowed',
                          transition: 'all 0.3s ease',
                          opacity: isFormValid && !isSubmitting ? 1 : 0.6,
                        }}
                        onMouseEnter={(e) => {
                          if (isFormValid && !isSubmitting) {
                            e.currentTarget.style.backgroundColor = '#E53E3E';
                            e.currentTarget.style.color = 'white';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (isFormValid && !isSubmitting) {
                            e.currentTarget.style.backgroundColor = 'white';
                            e.currentTarget.style.color = '#E53E3E';
                          }
                        }}
                      >
                        {isSubmitting ? 'กำลังส่ง...' : 'Submit'}
                      </button>
                    </Flex>
                  </Flex>
                </Box>
              </GridItem>

              {/* Right Side - Contact Info */}
              <GridItem>
                <Flex flexDirection={'column'} gap={8}>
                  {/* Head Office */}
                  <Box>
                    <Flex alignItems={'center'} mb={4}>
                      <Text
                        fontSize={{ base: '16px', md: '18px' }}
                        fontWeight={'bold'}
                        color={'red.500'}
                      >
                        สำนักงานใหญ่
                      </Text>
                    </Flex>
                    <Text
                      fontSize={{ base: '13px', md: '16px' }}
                      lineHeight={'tall'}
                    >
                      34/6 หมู่ที่ 1 ถนนแจ้งวัฒนะ ตำบลคลองเกลือ
                      <br />
                      อำเภอปากเกร็ด จังหวัดนนทบุรี 11120
                    </Text>
                  </Box>

                  {/* Contact Channels */}
                  <Box>
                    <Flex alignItems={'center'} mb={4}>
                      <Text
                        fontSize={{ base: '16px', md: '18px' }}
                        fontWeight={'bold'}
                        color={'red.500'}
                      >
                        ช่องทางการติดต่อ
                      </Text>
                    </Flex>

                    <Flex flexDirection={'column'} gap={3}>
                      {/* Phone */}
                      <Flex alignItems={'center'} gap={3}>
                        <Flex
                          w={'40px'}
                          h={'40px'}
                          bg={'#2F5553'}
                          rounded={'full'}
                          alignItems={'center'}
                          justifyContent={'center'}
                        >
                          <FaPhoneAlt color="white" size={18} />
                        </Flex>
                        <Text fontSize={{ base: '14px', md: '16px' }}>
                          02 826 5377
                        </Text>
                      </Flex>

                      {/* Email */}
                      <Flex alignItems={'center'} gap={3}>
                        <Flex
                          w={'40px'}
                          h={'40px'}
                          bg={'#2F5553'}
                          rounded={'full'}
                          alignItems={'center'}
                          justifyContent={'center'}
                        >
                          <MdEmail color="white" size={20} />
                        </Flex>
                        <Text fontSize={{ base: '14px', md: '16px' }}>
                          cfam@cfam.co.th
                        </Text>
                      </Flex>

                      {/* Line */}
                      <Flex alignItems={'center'} gap={3}>
                        <Flex
                          w={'40px'}
                          h={'40px'}
                          bg={'#2F5553'}
                          rounded={'full'}
                          alignItems={'center'}
                          justifyContent={'center'}
                        >
                          <FaLine color="white" size={22} />
                        </Flex>
                        <Text fontSize={{ base: '14px', md: '16px' }}>
                          @CFAM
                        </Text>
                      </Flex>

                      {/* QR Code */}
                      <Flex
                        mt={2}
                        justifyContent={{ base: 'center', md: 'flex-start' }}
                      >
                        <Box
                          border={'2px solid'}
                          borderColor={'gray.200'}
                          p={2}
                          rounded={'md'}
                          textAlign={'center'}
                        >
                          <Image
                            src="/imgs/qrcode.jpg"
                            alt="QR Code Line"
                            width={'150px'}
                            height={'150px'}
                            objectFit="contain"
                          />
                          <Text fontSize={'10px'} mt={1} color={'gray.600'}>
                            Line id : @CFAM
                          </Text>
                        </Box>
                      </Flex>
                    </Flex>
                  </Box>

                  {/* Working Hours */}
                  <Box>
                    <Flex alignItems={'center'} mb={4}>
                      <Text
                        fontSize={{ base: '16px', md: '18px' }}
                        fontWeight={'bold'}
                        color={'red.500'}
                      >
                        วันและเวลาทำการ
                      </Text>
                    </Flex>
                    <Text fontSize={{ base: '13px', md: '16px' }}>
                      วันจันทร์ - วันศุกร์ เวลา 8.30 น. - 17.30 น.
                    </Text>
                  </Box>
                  {/* Google Map Section */}
                  <Box>
                    <Flex
                      justifyContent={{
                        base: 'center',
                        sm: 'center',
                        md: 'start',
                      }}
                      alignItems={'center'}
                      w={'100%'}
                      mt={1}
                    >
                      <NextLink
                        //href="https://www.google.co.th/maps/place/%E0%B8%9A%E0%B8%9A%E0%B8%AA.%E0%B8%8B%E0%B8%B5%E0%B9%80%E0%B8%AD%E0%B8%9F+%E0%B9%80%E0%B8%AD%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2+%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94/@13.938895,100.6252457,17z/data=!3m1!4b1!4m6!3m5!1s0x311d7df48272c2f5:0x4b183062bf5a0965!8m2!3d13.938895!4d100.6252457!16s%2Fg%2F11dxf0mvc1?hl=th&entry=ttu"
                        href={'/googlemap.jpg'}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Box
                          position={'relative'}
                          maxW={'100%'}
                          w={{ base: '250px', sm: '350px', md: '450px' }}
                          aspectRatio={'1/1'}
                          boxShadow={'rgba(0, 0, 0, 0.16) 0px 1px 4px'}
                          rounded={'md'}
                          overflow={'hidden'}
                          cursor={'pointer'}
                          transition={'transform 0.3s ease'}
                          _hover={{
                            transform: 'scale(1.02)',
                          }}
                        >
                          <NextImage
                            src="/googlemap.jpg"
                            alt="Google Map - CF Asia Location"
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        </Box>
                      </NextLink>
                    </Flex>
                  </Box>
                </Flex>
              </GridItem>
            </Grid>
          </Box>
        </Flex>
      </Container>
      <br />
    </>
  );
}

export default Contact;
