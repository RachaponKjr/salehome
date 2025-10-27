'use client';
import { Box, Button, color } from '@chakra-ui/react';
// import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
export default function page() {
  return (
    <>
      <Box display={'flex'} h={'80vh'}>
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
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
