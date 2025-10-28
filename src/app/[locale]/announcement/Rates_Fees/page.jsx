// 'use client';
// import { Box, Button, color } from '@chakra-ui/react';
// // import { Viewer, Worker } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// export default function page() {
//   return (
//     <>
//       <Box display={'flex'} h={'80vh'}>
//         <Box
//           flex="1"
//           my={{ base: '2rem', md: '2rem' }}
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           overflow="auto"
//         >
//           <Box w={{ base: '90%', md: '50%' }}>
//             <Box
//               p={5}
//               bg={'#FFFF'}
//               boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}
//               rounded={'5px'}
//             >
//               <Box
//                 my={3}
//                 display={'flex'}
//                 justifyContent={'start'}
//                 alignItems={'center'}
//               >
//                 <Box>
//                   <img src="/ann.png" alt="" width={'35px'} />
//                 </Box>
//                 <Box ml={3} fontSize={{ base: '14px' }}>
//                   ประกาศอัตราดอกเบี้ย ค่าปรับ ค่าบริการและค่าธรรมเนียม
//                 </Box>
//               </Box>
//               <Box>
//                 <hr style={{ borderColor: 'red', borderWidth: '1px' }} />
//               </Box>
//               <Box
//                 display={'flex'}
//                 justifyContent={'space-between'}
//                 flexDirection={{ base: 'column', md: 'row' }}
//                 mt={5}
//               >
//                 <a href="/CFAM_announcement20250201.pdf" target="blank">
//                   <Box
//                     display={'flex'}
//                     justifyContent={'start'}
//                     alignItems={'center'}
//                   >
//                     <Box>
//                       <img src="/pdf.png" alt="" width={'30px'} />
//                     </Box>
//                     <Box color={'#305A58'} ml={3} fontSize={{ base: '14px' }}>
//                       มีผลบังคับใช้ตั้งแต่วันที่&nbsp;1 กุมภาพันธ์ 2568
//                     </Box>
//                   </Box>
//                 </a>
//               </Box>
//               <Box
//                 display={'flex'}
//                 justifyContent={'space-between'}
//                 flexDirection={{ base: 'column', md: 'row' }}
//                 mt={5}
//               >
//                 <a href="/CFAM_announcement20240801.pdf" target="blank">
//                   <Box
//                     display={'flex'}
//                     justifyContent={'start'}
//                     alignItems={'center'}
//                   >
//                     <Box>
//                       <img src="/pdf.png" alt="" width={'30px'} />
//                     </Box>
//                     <Box color={'#305A58'} ml={3} fontSize={{ base: '14px' }}>
//                       มีผลบังคับใช้ตั้งแต่วันที่ 1 สิงหาคม 2567
//                     </Box>
//                   </Box>
//                 </a>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// }

'use client';
import { Box } from '@chakra-ui/react';
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function page() {
  const pdfLinks = [
    {
      href: '/CFAM_announcement20250201.pdf',
      text: 'มีผลบังคับใช้ตั้งแต่วันที่ 1 กุมภาพันธ์ 2568',
    },
    {
      href: '/CFAM_announcement20240801.pdf',
      text: 'มีผลบังคับใช้ตั้งแต่วันที่ 1 สิงหาคม 2567',
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
                ประกาศอัตราดอกเบี้ย ค่าปรับ ค่าบริการและค่าธรรมเนียม
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
