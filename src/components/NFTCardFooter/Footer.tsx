import { Box, Flex, Text, Image } from "@chakra-ui/react"
import React from "react"
import logo from "../../../public/GoBlockchainImg.png"

import Link from "next/link"

export function Footer() {
  return (
    <Box
      mt="30px"
      width="100%"
      p="20px"
      as="footer"
      bg="#0A03AB"
    >
      <Flex
        m="0 40px"
        flexWrap="wrap"
        justifyContent="space-around"
        fontSize="14px"
        alignItems="center"
      >
        <Flex mb={{ base: '20px', md: '0' }} alignItems="center">
          <Text
            fontWeight="300"
            color="#FFFFFF"
            fontFamily= "Roboto"
            fontStyle= "Bold"
            fontSize= "10px"
            lineHeight= "12px"
          >
            Terms & Conditions
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}
