import { Box, Flex, Text, Image } from "@chakra-ui/react"
import React from "react"
import logo from "../../../public/GoBlockchainImg.png"

import Link from "next/link"

export function Footer() {
  return (
    <Box
      width="100%"
      borderTop="1.5px solid #E2E2E2"
      p="30px"
      as="footer"
    >
      <Flex
        m="0 40px"
        flexWrap="wrap"
        justifyContent="space-around"
        fontSize="14px"
        alignItems="center"
      >
        <Flex mb={{ base: "20px", md: "0" }} alignItems="center">
          <Text mr="10px" fontWeight="300">
          Uma loja de NFT feita pela plataforma de tokenização
          </Text>
          <Flex
          cursor="pointer"
          onClick={() =>
                  window.open(
                    "https://gotokens.netlify.app/",
                    "_blank"
                  )
                }>
            <Text
            color="#FDC921"
            fontWeight="bold"
            fontSize="18px"
            >
              GoTokens
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
