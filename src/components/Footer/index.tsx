import { Box, Flex, Text, Image } from "@chakra-ui/react"
import React from "react"
import logo from "../../../public/GoBlockchainImg.png"

import Link from "next/link"

export function Footer() {
  return (
    <Box
      width="100%"
      borderTop="1.5px solid #E2E2E2"
      height="80px"
      p="20px"
      as="footer"
      bg="white"
    >
      <Flex
        m="0 40px"
        flexWrap="wrap"
        justifyContent="space-between"
        fontSize="14px"
        alignItems="center"
      >
        <Text fontWeight="normal" mb={{ base: "20px", md: "0" }}>
          © GoTokens. Todos os direitos reservados.
        </Text>
        <Flex mb={{ base: "20px", md: "0" }} alignItems="center">
          <Text mr="12px" fontWeight="normal">
            Um produto feito com carinho pela
          </Text>
          <Flex
          cursor="pointer"
          onClick={() =>
                  window.open(
                    "https://goblockchain.io/",
                    "_blank"
                  )
                }>
            <Image src={logo.src}></Image>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
