import { Container } from '@chakra-ui/react'
import React from 'react'
import Section1 from './components/Section1'

const HomePage = () => {
  return (
    <>
      <Container maxW={"container.xl"}>
        <Section1 />
      </Container>
    </>

  )
}

export default HomePage