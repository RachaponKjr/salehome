import { Box } from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'

import { RiLineFill } from "react-icons/ri";

const BtnContact = () => {
  return (
    <>  <Box w={'3.5rem'}
      h={'3.5rem'} bg={"#02685C"} _hover={{ bg: '#02685C' }} cursor={'pointer'} color={'white'} rounded={'full'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Link href={'https://line.me/ti/p/%40wqrxr8w0'} target='_blank' style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}} children={<RiLineFill size={30} />} />
    </Box>
    </>
  )
}

export default BtnContact