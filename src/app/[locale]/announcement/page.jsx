'use client';
import { Box, Button, color } from '@chakra-ui/react';
// import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
export default function page() {
  return (
    <>
      <Box display={'flex'}>
        <Box
          flex="1"
          my={{ base: '2rem', md: '2rem' }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          overflow="auto"
        >
          <Box w={{ base: '90%', md: '50%' }}>
            <Box
              p={5}
              bg={'#FFFF'}
              boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}
              rounded={'5px'}
            >
              <Box
                my={3}
                display={'flex'}
                justifyContent={'start'}
                alignItems={'center'}
              >
                <Box>
                  <img src="/ann.png" alt="" width={'35px'} />
                </Box>
                <Box ml={3} fontSize={{ base: '14px' }}>
                  ประกาศอัตราดอกเบี้ย ค่าปรับ ค่าบริการและค่าธรรมเนียม
                </Box>
              </Box>
              <Box>
                <hr style={{ borderColor: 'red', borderWidth: '1px' }} />
              </Box>
              <Box
                display={'flex'}
                justifyContent={'space-between'}
                flexDirection={{ base: 'column', md: 'row' }}
                mt={5}
              >
                <a href="/CFAM_announcement20250201.pdf" target="blank">
                  <Box
                    display={'flex'}
                    justifyContent={'start'}
                    alignItems={'center'}
                  >
                    <Box>
                      <img src="/pdf.png" alt="" width={'30px'} />
                    </Box>
                    <Box color={'#305A58'} ml={3} fontSize={{ base: '14px' }}>
                      มีผลบังคับใช้ตั้งแต่วันที่&nbsp;1 กุมภาพันธ์ 2568
                    </Box>
                  </Box>
                </a>
              </Box>
              <Box
                display={'flex'}
                justifyContent={'space-between'}
                flexDirection={{ base: 'column', md: 'row' }}
                mt={5}
              >
                <a href="/CFAM_announcement20240801.pdf" target="blank">
                  <Box
                    display={'flex'}
                    justifyContent={'start'}
                    alignItems={'center'}
                  >
                    <Box>
                      <img src="/pdf.png" alt="" width={'30px'} />
                    </Box>
                    <Box color={'#305A58'} ml={3} fontSize={{ base: '14px' }}>
                      มีผลบังคับใช้ตั้งแต่วันที่ 1 สิงหาคม 2567
                    </Box>
                  </Box>
                </a>
              </Box>
              {/* //ประกาศอัตราดอกเบี้ย */}
              <br />
              <Box
                my={3}
                display={'flex'}
                justifyContent={'start'}
                alignItems={'center'}
              >
                <Box>
                  <img src="/ann.png" alt="" width={'35px'} />
                </Box>
                <Box ml={3} fontSize={{ base: '14px' }}>
                  การคุ้มครองข้อมูลส่วนบุคคล (PDPA)
                </Box>
              </Box>
              <Box>
                <hr style={{ borderColor: 'red', borderWidth: '1px' }} />
              </Box>
              <Box
                display={'flex'}
                justifyContent={'space-between'}
                flexDirection={{ base: 'column', md: 'row' }}
                mt={5}
              >
                <a
                  href="/policy/20250305-chase-privacy-policy-th.pdf"
                  target="blank"
                >
                  <Box
                    display={'flex'}
                    justifyContent={'start'}
                    alignItems={'center'}
                  >
                    <Box>
                      <img src="/pdf.png" alt="" width={'30px'} />
                    </Box>
                    <Box color={'#305A58'} ml={3} fontSize={{ base: '14px' }}>
                      นโยบายคุ้มครองข้อมูลส่วนบุคคล
                    </Box>
                  </Box>
                </a>
              </Box>
              <Box
                display={'flex'}
                justifyContent={'space-between'}
                flexDirection={{ base: 'column', md: 'row' }}
                mt={5}
              >
                <a
                  href="/policy/20250627-chase-notice-cookies-th.pdf"
                  target="blank"
                >
                  <Box
                    display={'flex'}
                    justifyContent={'start'}
                    alignItems={'center'}
                  >
                    <Box>
                      <img src="/pdf.png" alt="" width={'30px'} />
                    </Box>
                    <Box color={'#305A58'} ml={3} fontSize={{ base: '14px' }}>
                      ประกาศเกี่ยวกับการใช้คุ๊กกี้
                    </Box>
                  </Box>
                </a>
              </Box>
              <Box
                display={'flex'}
                justifyContent={'space-between'}
                flexDirection={{ base: 'column', md: 'row' }}
                mt={5}
              >
                <a
                  href="/policy/chase-privacy-notice-for-debtors-th.pdf"
                  target="blank"
                >
                  <Box
                    display={'flex'}
                    justifyContent={'start'}
                    alignItems={'center'}
                  >
                    <Box>
                      <img src="/pdf.png" alt="" width={'30px'} />
                    </Box>
                    <Box color={'#305A58'} ml={3} fontSize={{ base: '14px' }}>
                      ประกาศความเป็นส่วนตัวสำหรับลูกหนี้
                    </Box>
                  </Box>
                </a>
              </Box>
              <Box
                display={'flex'}
                justifyContent={'space-between'}
                flexDirection={{ base: 'column', md: 'row' }}
                mt={5}
              >
                <a
                  href="/policy/20250627-chase-privacy-notice-for-non-performing-th.pdf"
                  target="blank"
                >
                  <Box
                    display={'flex'}
                    justifyContent={'start'}
                    alignItems={'center'}
                  >
                    <Box>
                      <img src="/pdf.png" alt="" width={'30px'} />
                    </Box>
                    <Box color={'#305A58'} ml={3} fontSize={{ base: '14px' }}>
                      ประกาศความเป็นส่วนตัวสำหรับผู้โอนสินทรัพย์ด้วยคุณภาพ
                    </Box>
                  </Box>
                </a>
              </Box>
              <Box
                display={'flex'}
                justifyContent={'space-between'}
                flexDirection={{ base: 'column', md: 'row' }}
                mt={5}
              >
                <a
                  href="/policy/20250211-chase-privacy-notice-company-th.pdf"
                  target="blank"
                >
                  <Box
                    display={'flex'}
                    justifyContent={'start'}
                    alignItems={'center'}
                  >
                    <Box>
                      <img src="/pdf.png" alt="" width={'30px'} />
                    </Box>
                    <Box color={'#305A58'} ml={3} fontSize={{ base: '14px' }}>
                      ประกาศความเป็นส่วนตัวสำหรับผู้เข้ามาภายในพื้นที่ของกลุ่มบริษัทฯ
                    </Box>
                  </Box>
                </a>
              </Box>
              {/* การคุ้มครองข้อมูลส่วนบุคคล (PDPA) */}
              <br />
              <Box
                my={3}
                display={'flex'}
                justifyContent={'start'}
                alignItems={'center'}
              >
                <Box>
                  <img src="/ann.png" alt="" width={'35px'} />
                </Box>
                <Box ml={3} fontSize={{ base: '14px' }}>
                  งบการเงิน
                </Box>
              </Box>
              <Box>
                <hr style={{ borderColor: 'red', borderWidth: '1px' }} />
              </Box>
              <Box
                display={'flex'}
                justifyContent={'space-between'}
                flexDirection={{ base: 'column', md: 'row' }}
                mt={5}
              >
                <a href="/policy/งบการเงิน_CFAMปี2567.pdf" target="blank">
                  <Box
                    display={'flex'}
                    justifyContent={'start'}
                    alignItems={'center'}
                  >
                    <Box>
                      <img src="/pdf.png" alt="" width={'30px'} />
                    </Box>
                    <Box color={'#305A58'} ml={3} fontSize={{ base: '14px' }}>
                      งบการเงิน 31 ธันวาคม 2567
                    </Box>
                  </Box>
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
