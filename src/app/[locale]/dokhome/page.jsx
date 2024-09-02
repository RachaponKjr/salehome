'use client';
import { Box, Button } from '@chakra-ui/react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
export default function page() {
  return (
    <>
      <Box h="calc(100vh - 8rem)" display={'flex'} mt={3}>
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
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer fileUrl="/dokhome.pdf" />
          </Worker>
        </Box>
      </Box>
    </>
  );
}
