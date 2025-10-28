'use client';
import { Box } from '@chakra-ui/react';
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function page() {
  const pdfLinks = [
    {
      href: '/policy/20250305-chase-privacy-policy-th.pdf',
      text: 'นโยบายคุ้มครองข้อมูลส่วนบุคคล',
    },
    {
      href: '/policy/20250627-chase-notice-cookies-th.pdf',
      text: 'ประกาศเกี่ยวกับการใช้คุ๊กกี้',
    },
    {
      href: '/policy/chase-privacy-notice-for-debtors-th.pdf',
      text: 'ประกาศความเป็นส่วนตัวสำหรับลูกหนี้',
    },
    {
      href: '/policy/20250627-chase-privacy-notice-for-non-performing-th.pdf',
      text: 'ประกาศความเป็นส่วนตัวสำหรับผู้โอนสินทรัพย์ด้อยคุณภาพ',
    },
    {
      href: '/policy/20250211-chase-privacy-notice-company-th.pdf',
      text: 'ประกาศความเป็นส่วนตัวสำหรับผู้เข้ามาภายในพื้นที่ของกลุ่มบริษัทฯ',
    },
  ];

  return (
    <>
      <Box display={'flex'} minH={'80vh'} py={{ base: '2rem', md: '3rem' }}>
        <Box
          flex="1"
          display="flex"
          justifyContent="center"
          alignItems="start"
          px={{ base: '1rem', md: '2rem' }}
        >
          <Box w={'100%'} maxW={'1200px'}>
            {/* Header */}
            <Box textAlign={'center'} mb={8}>
              <Box
                as="h1"
                fontSize={{ base: '24px', md: '32px' }}
                fontWeight={'bold'}
                color={'#2D3748'}
              >
                การคุ้มครองข้อมูลส่วนบุคคล
              </Box>
              <Box w={'80px'} h={'3px'} bg={'red.500'} mx={'auto'} mt={2}></Box>
            </Box>

            {/* List Layout */}
            <Box maxW={'600px'} mx={'auto'}>
              {pdfLinks.map((link, index) => (
                <Box key={index} mb={4}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <Box
                      p={5}
                      bg={'white'}
                      boxShadow={'0 2px 8px rgba(0, 0, 0, 0.1)'}
                      rounded={'8px'}
                      border={'1px solid'}
                      borderColor={'gray.200'}
                      transition={'all 0.3s'}
                      position={'relative'}
                      overflow={'hidden'}
                      _hover={{
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        '&::after': {
                          opacity: 1,
                        },
                      }}
                      _after={{
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '3px',
                        bg: 'red.500',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      }}
                    >
                      <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                      >
                        <Box
                          color={'#0066CC'}
                          fontSize={{ base: '14px', md: '15px' }}
                          fontWeight={'500'}
                          flex={1}
                        >
                          {link.text}
                        </Box>
                        <Box ml={4} flexShrink={0}>
                          <img src="/pdf.png" alt="PDF icon" width={'35px'} />
                        </Box>
                      </Box>
                    </Box>
                  </a>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
