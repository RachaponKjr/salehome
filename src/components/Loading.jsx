import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

import loading from '../imgs/load.svg'
import Image from 'next/image'

function Loading() {
  return (
    <Flex justify={'center'} align={'center'} h={'100vh'} w={'100vw'} position={'fixed'} top={0} left={0} zIndex={100000} bg={'white'}>
      <Image src={loading} alt={loading} width={200} height={200} />
    </Flex>
  )
}

export default Loading