
import { Flex } from '@chakra-ui/react'
import React from 'react'

import Image from 'next/image'

function Loading() {
  return (
    <Flex justify={'center'} align={'center'} h={'100vh'} w={'100vw'} position={'fixed'} top={0} left={0} zIndex={100000} bg={'white'}>
      <Image src={"/imgs/load.svg"} alt={"loading"} width={100} height={100} />
    </Flex>
  )
}

export default Loading