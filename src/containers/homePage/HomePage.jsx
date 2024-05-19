''
import { Container } from '@chakra-ui/react'
import React from 'react'
import Section1 from './components/Section1'

async function HomePage({ allTags, areaTags, homeTags, buildingTags }) {
  const data = await getData()
  const newData = Array.from(data.data)

  return (
    <>
      <Container maxW={"container.xl"} w={"100%"} h={"max-content"}>
        <Section1 datafetch={newData} all={allTags} area={areaTags} home={homeTags} building={buildingTags} />
      </Container>
    </>
  )
}

export async function getData() {
  const res = await fetch('http://18.140.121.108:5500/getsalehome', { method: 'GET', cache: 'no-store' }).then(res => res.json()).catch(err => console.log(err))
  return res
}

export default HomePage