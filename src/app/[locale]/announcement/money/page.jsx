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
              <Box
                display={'flex'}
                justifyContent={'space-between'}
                flexDirection={{ base: 'column', md: 'row' }}
                mt={5}
              >
                <a href="/policy/งบการเงิน_CFAMปี2566.pdf" target="blank">
                  <Box
                    display={'flex'}
                    justifyContent={'start'}
                    alignItems={'center'}
                  >
                    <Box>
                      <img src="/pdf.png" alt="" width={'30px'} />
                    </Box>
                    <Box color={'#305A58'} ml={3} fontSize={{ base: '14px' }}>
                      งบการเงิน 31 ธันวาคม 2566
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
