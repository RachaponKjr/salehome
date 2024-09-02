'use client';
import { Box, Button, color } from '@chakra-ui/react';
// import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
export default function page() {
  return (
    <>
      <Box h="calc(100vh - 8rem)" display={'flex'}>
        {/* <Box w={'100%'}>
          <Box display={'flex'} justifyContent={'end'}>
            <Box style={{ margin: '20px' }}>
              <a href="/dokhome.pdf" download>
                <Button
                  mr={10}
                  display={'flex'}
                  bg={'gray.200'}
                  color={'#2f5553'}
                >
                  <Box>
                    <img
                      src="/icons/nav_icons/download.png"
                      alt=""
                      width={'25px'}
                    />
                  </Box>
                  <Box ml={2}>DOWLOAD</Box>
                </Button>
              </a>
            </Box>
          </Box>
        </Box> */}

        <Box
          flex="1"
          my={{ base: '2rem', md: '0' }}
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
                <Box ml={3}>ประกาศอัตราดอกเบี้ย</Box>
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
                <Box>
                  อัตราดอกเบี้ย ค่าบริการ ค่าธรรมเนียม และค่าใช้จ่ายต่างๆ
                </Box>
                <a href="/dokhome.pdf" target="blank">
                  <Button display={'flex'} p={5} mt={{ base: 3, md: 0 }}>
                    <Box>
                      <img src="/pdf.png" alt="" width={'30px'} />
                    </Box>
                    <Box ml={3} color={'#305A58'}>
                      View File
                    </Box>
                  </Button>
                </a>
              </Box>
              <br />
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
