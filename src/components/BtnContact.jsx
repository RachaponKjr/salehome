import { Box, Button, Flex, Input, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger, Text } from '@chakra-ui/react'
import React from 'react'

import { FaPaperPlane,FaUser } from 'react-icons/fa'
import { MdEmail } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";

const BtnContact = () => {
  return (
    <>
      <Popover placement='left-start'>
        <PopoverTrigger>
          <Box
            w={'3.5rem'}
            h={'3.5rem'}
            bg={'blue'}
            rounded={'full'}
            display={'flex'}
            transitionDuration={'.3s'}
            justifyContent={'center'}
            alignItems={'center'}
            cursor={'pointer'}
            color={'white'}
            children={<FaPaperPlane size={20} />}
          />
        </PopoverTrigger>
        <PopoverContent bg={'whitesmoke'} color='black' boxShadow={'lg'}>
          <PopoverHeader fontWeight='semibold' fontSize={'xl'} textAlign={'center'} textTransform={'uppercase'}>Git in touch</PopoverHeader>
          <PopoverArrow bg='whitesmoke' />
          <PopoverBody>
            <Flex flexDirection={'column'} gap={'8px'}>
              <Input variant='unstyled' placeholder='Name' bg={'white'} h={'2rem'} px={2} ring={"1px"} ringColor={"#ccc"}/>
              <Input variant='unstyled' placeholder='Email' bg={'white'} h={'2rem'} px={2} ring={"1px"} ringColor={"#ccc"}/>
              <textarea placeholder='Message' className='textarea_style' />
              <Button w={'100%'}  bg={'blue.500'} color={'white'} _hover={{bg: 'none', color: 'blue.500',borderColor: 'blue.500',borderWidth: '2px',borderStyle: 'solid'}}>Send</Button>
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  )
}

export default BtnContact