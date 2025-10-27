'use client';
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

export default HomePage;
