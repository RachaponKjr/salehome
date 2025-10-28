'use client';
import {
  Box,
  VStack,
  HStack,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  IconButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Divider,
} from '@chakra-ui/react';
import Image from 'next/image';
import { Link } from '../navigation';
import { FiX } from 'react-icons/fi';
import FlagSelect from './FlagSelect';

export default function MobileDrawer({
  isOpen,
  onClose,
  manu,
  hrefOf,
  current,
}) {
  const isItemActive = (item) => {
    if (!item.children) return current === item.link;
    const inChild = item.children?.some(
      (c) => current === c.link || current.startsWith(`${c.link}/`)
    );
    return (
      current === item.link || inChild || current.startsWith(`${item.link}/`)
    );
  };

  const Item = ({ item }) => {
    const active = isItemActive(item);

    if (!item.children) {
      return (
        <Box
          as={Link}
          href={hrefOf(item.link)}
          onClick={onClose}
          px={3}
          py={2.5}
          rounded="lg"
          bg={active ? 'teal.600' : 'transparent'}
          color={active ? 'white' : 'whiteAlpha.900'}
          _hover={{ bg: active ? 'teal.700' : 'whiteAlpha.200' }}
          transition="all 0.15s ease"
        >
          {item.title}
        </Box>
      );
    }

    return (
      <Accordion allowToggle reduceMotion>
        <AccordionItem border="none">
          <h2>
            <AccordionButton
              px={3}
              py={2.5}
              rounded="lg"
              bg={active ? 'teal.600' : 'transparent'}
              color={active ? 'white' : 'whiteAlpha.900'}
              _hover={{ bg: active ? 'teal.700' : 'whiteAlpha.200' }}
            >
              <Box as="span" flex="1" textAlign="left">
                {item.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            px={2}
            pt={2}
            pb={1}
            bg="white"
            color="gray.800"
            rounded="md"
          >
            <VStack align="stretch" spacing={1}>
              {item.children.map((c) => (
                <Box
                  as={Link}
                  href={hrefOf(c.link)}
                  key={c.key}
                  onClick={onClose}
                  px={3}
                  py={2}
                  rounded="md"
                  _hover={{ bg: 'teal.50', color: 'teal.700' }}
                >
                  {c.label}
                </Box>
              ))}
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  };

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
      <DrawerOverlay />
      <DrawerContent bg="#2F5553" color="white">
        <DrawerHeader borderBottomWidth="0" pb={2}>
          <HStack justify="space-between" align="center">
            <HStack>
              <Image src="/imgs/logo.png" alt="logo" width={90} height={30} />
            </HStack>
            <IconButton
              aria-label="Close"
              icon={<FiX />}
              onClick={onClose}
              variant="ghost"
              color="white"
              _hover={{ bg: 'whiteAlpha.200' }}
            />
          </HStack>
        </DrawerHeader>

        <DrawerBody>
          <VStack align="stretch" spacing={1.5} mt={2}>
            {manu.map((item) => (
              <Item key={item.link || 'home'} item={item} />
            ))}
          </VStack>
        </DrawerBody>

        <DrawerFooter borderTopWidth="0" pt={0} pb={4}>
          <VStack w="100%" spacing={3}>
            <Divider borderColor="whiteAlpha.300" />
            <HStack w="100%" justify="space-between">
              <Text fontSize="sm" opacity={0.9}>
                Language
              </Text>
              <FlagSelect />
            </HStack>
          </VStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
