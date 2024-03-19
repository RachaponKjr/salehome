import { Container } from '@chakra-ui/react'
import React from 'react'
import Section1 from './components/Section1'
import Loading from '@/components/Loading'

function HomePage(){
  return (
    <>
      <Container maxW={"container.xl"}>
        <Section1 />
      </Container>
    </>

  )
}

export default HomePage