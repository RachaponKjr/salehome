import { Container } from '@chakra-ui/react'
import React from 'react'

import Section1 from './components/Section1'
import Card from '@/components/Card'



async function HomePage(){
  const data = await getData() 
  const newData = Array.from(data.data)

  return (
    <>
      <Container maxW={"container.xl"}>
        <Section1 datafetch={newData}/>
      </Container>
    </>

  )
}

export async function getData() {
  const res = await fetch('http://18.140.121.108:5500/getsalehome', { method: 'GET', cache: 'force-cache'})
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default HomePage