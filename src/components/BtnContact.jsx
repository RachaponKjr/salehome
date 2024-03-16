import { Box } from '@chakra-ui/react'
import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

const BtnContact = () => {
  return (
    <Box w={'3.5rem'} h={'3.5rem'} bg={'blue'} rounded={'full'} display={'flex'} transitionDuration={'.3s'} justifyContent={'center'} alignItems={'center'} cursor={'pointer'} color={'white'}><FaPaperPlane size={20}/></Box>
  )
}

export default BtnContact