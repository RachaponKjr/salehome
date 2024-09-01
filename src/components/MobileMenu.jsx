import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';

import Image from 'next/image';
import { Link } from '../navigation';

const MobileMenu = ({ homeManu, blogsManu, contactManu, docHome }) => {
  return (
    <>
      <Flex
        bgColor={'#2F5553'}
        w={'100%'}
        display={{ base: 'flex', md: 'none' }}
        h={'72px'}
        position={'fixed'}
        bottom={0}
        zIndex={1000}
        color={'white'}
      >
        <Grid templateColumns={'repeat(4, 1fr)'} w={'100%'}>
          <GridItem
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            gap={0.5}
            pt={2}
            position={'relative'}
          >
            <Link
              href={'/'}
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Image
                src={'/icons/nav_icons/home.png'}
                alt="service"
                width={30}
                height={30}
              />
              {/* กล่องเเสดงว่ามีอะไรใหม่ */}
              {/* <Box position={'absolute'} top={0} right={-2} bg={'red'} w={'16px'} h={'16px'} color={'white'} fontSize={'10px'} textAlign={'center'} rounded={'full'}>N</Box> */}
              <Text fontSize={'10px'} mt={1.5}>
                {homeManu}
              </Text>
            </Link>
          </GridItem>
          <GridItem
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            _active={{ bg: 'gray.500' }}
            gap={0.5}
            pt={2}
            position={'relative'}
          >
            <Link
              href="/blogs"
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Image
                src={'/icons/nav_icons/edit.png'}
                alt="service"
                width={30}
                height={30}
              />
              <Text fontSize={'10px'} mt={1.5}>
                {blogsManu}
              </Text>
            </Link>
          </GridItem>
          <GridItem
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            _active={{ bg: 'gray.500' }}
            gap={0.5}
            pt={2}
            position={'relative'}
          >
            <Link
              href={'/contact'}
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Image
                src={'/icons/nav_icons/headphone.png'}
                alt="service"
                width={30}
                height={30}
              />
              <Text fontSize={'10px'} mt={1.5}>
                {contactManu}
              </Text>
            </Link>
          </GridItem>
          <GridItem
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            _active={{ bg: 'gray.500' }}
            gap={0.5}
            pt={2}
            position={'relative'}
          >
            <Link
              href={'/dokhome'}
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Image
                src={'/icons/nav_icons/headphone.png'}
                alt="service"
                width={30}
                height={30}
              />
              <Text fontSize={'10px'} mt={1.5}>
                {docHome}
              </Text>
            </Link>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
};

export default MobileMenu;
