"use client"
import { Box} from '@chakra-ui/react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
export default function page() {
  return (
    <>
      <Box
        h="calc(100vh - 8rem)"
        display="flex"
      >
        <Box
          flex="1"
          my={{base:'2rem', md:'0'}}
          display="flex"
          justifyContent="center"
          alignItems="center"
          overflow="auto"
        >
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer fileUrl="/Test.pdf" />
          </Worker>
        </Box>
      </Box>
    </>
  );
}
