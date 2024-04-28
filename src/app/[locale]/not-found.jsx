import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Box gap={8} w={"100%"} h={"90vh"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
      <Box textAlign={"center"}>
      <Text variant={"h4"} fontWeight={"bold"} fontSize={"32px"}>Not Found Page...</Text>
      <p>Could not find requested resource</p>
      </Box>
      <Box fontSize={"16px"} fontWeight={"bold"}>
      <Link href="/">Return Home</Link>
      </Box>
    </Box>
  )
}