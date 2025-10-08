'';
import { Container } from '@chakra-ui/react';
import React from 'react';
import Section1 from './components/Section1';

async function HomePage() {
  return (
    <>
      <Container maxW="100%" p={0} m={0}>
        <Section1 />
      </Container>
    </>
  );
}

// export async function getData() {
//   const res = await fetch('http://18.140.121.108:5500/getsalehome', { method: 'GET', cache: 'no-store' }).then(res => res.json()).catch(err => console.log(err))
//   return res
// }

export default HomePage;
