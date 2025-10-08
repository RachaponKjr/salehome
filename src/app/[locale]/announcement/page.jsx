'use client';
import { Box, Button, color } from '@chakra-ui/react';
// import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
export default function page() {
  return (
    <>
      <Box h="calc(100vh - 8rem)" display={'flex'}>
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
                  อัตราดอกเบี้ย ค่าปรับ ค่าบริการและค่าธรรมเนียม
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
                <a href="/cfam_t.pdf" target="blank">
                  <Box
                    display={'flex'}
                    justifyContent={'start'}
                    alignItems={'center'}
                  >
                    <Box>
                      <img src="/pdf.png" alt="" width={'30px'} />
                    </Box>
                    <Box color={'#305A58'} ml={3} fontSize={{ base: '14px' }}>
                      มีผลบังคับใช้ตั้งแต่วันที่ &nbsp;1 กุมภาพันธ์ 2568
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
                <a href="/dokhome.pdf" target="blank">
                  <Box
                    display={'flex'}
                    justifyContent={'start'}
                    alignItems={'center'}
                  >
                    <Box>
                      <img src="/pdf.png" alt="" width={'30px'} />
                    </Box>
                    <Box color={'#305A58'} ml={3} fontSize={{ base: '14px' }}>
                      มีผลบังคับใช้ตั้งแต่วันที่ 31 กรกฎาคม 2567
                    </Box>
                  </Box>
                </a>
              </Box>

              <br />
            </Box>
          </Box>
          {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer fileUrl="/dokhome.pdf" />
          </Worker> */}
        </Box>
      </Box>
    </>
  );
}
