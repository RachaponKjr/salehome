'use client'
import {  Flex } from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'

import { RiLineFill } from "react-icons/ri";

const BtnContact = () => {
  return (
    <>  
    <Flex w={'56px'}
      h={'56px'} bg={"#305553"} _hover={{ bg: '#305553' }} cursor={'pointer'} color={'white'} rounded={'full'} justifyContent={'center'} alignItems={'center'}>
      <Link href={'https://line.me/ti/p/8DryyAJLo5'} target='_blank' style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}} children={<RiLineFill size={30} />} />
    </Flex>
    </>
  )
}

export default BtnContact