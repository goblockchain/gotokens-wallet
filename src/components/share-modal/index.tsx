import { Button } from "@chakra-ui/button"
import { Image } from "@chakra-ui/image"
import { Box, Flex, Text } from "@chakra-ui/layout"
import React, { useEffect, useState } from "react"

import twitter from "../../../public/twitter.png"
import instagran from "../../../public/instagran.png"
import inShare from "../../../public/inShare.png"
import elos from "../../../public/elos.png"
import facebook from "../../../public/facebook.png"

export function sharemodal({ onClose }) {
 
  return (
    <>
     
        <Box w="100%" m="0 auto">
          <Text fontSize="20px" textAlign="center">
              Links Compartilháveis
          </Text>
          <Flex mt="20px" w="100%" justifyContent="space-around">
          <Button
              transition="all 500ms"
              borderRadius="10px"
              bg="0"
              _focus={{
                outline: "0",
                boxShadow: "inherit",
              }}
              _hover={{
                bg: "#f5e9e9",
              }}
              display="block"
            >
              <Box w="25px">
                <Flex mt="7px">
                  <Image src={twitter.src}></Image>
                </Flex>
              </Box>
            </Button>
            <Button
              transition="all 500ms"
              borderRadius="10px"
              bg="0"
              _focus={{
                outline: "0",
                boxShadow: "inherit",
              }}
              _hover={{
                bg: "#f5e9e9",
              }}
              display="block"
            >
              <Box w="25px">
                <Flex mt="7px">
                  <Image src={instagran.src}></Image>
                </Flex>
              </Box>
            </Button>
            <Button
              transition="all 500ms"
              borderRadius="10px"
              bg="0"
              _focus={{
                outline: "0",
                boxShadow: "inherit",
              }}
              _hover={{
                bg: "#f5e9e9",
              }}
              display="block"
            >
              <Box w="25px">
                <Flex mt="7px">
                  <Image src={inShare.src}></Image>
                </Flex>
              </Box>
            </Button>
            <Button
              transition="all 500ms"
              borderRadius="10px"
              bg="0"
              _focus={{
                outline: "0",
                boxShadow: "inherit",
              }}
              _hover={{
                bg: "#f5e9e9",
              }}
              display="block"
            >
              <Box w="25px">
                <Flex mt="7px">
                  <Image src={facebook.src}></Image>
                </Flex>
              </Box>
            </Button>
            <Button
              transition="all 500ms"
              borderRadius="10px"
              bg="0"
              _focus={{
                outline: "0",
                boxShadow: "inherit",
              }}
              _hover={{
                bg: "#f5e9e9",
              }}
              display="block"
            >
              <Box w="25px">
                <Flex mt="7px">
                  <Image src={elos.src}></Image>
                </Flex>
              </Box>
            </Button>
          </Flex>
            <Button
              mt="20px"
              fontWeight= "bold"
              fontSize= "12px"
              lineHeight= "14px"
              color= "#A19D9D"
              bg="#FFFFFF"
              _hover={{ bg: "" }}
              onClick={onClose}
              >
                Fechar
            </Button>
        </Box>
    </>
  )
}
