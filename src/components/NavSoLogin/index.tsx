import { Button } from "@chakra-ui/button"
import { Flex, Text } from "@chakra-ui/layout"
import router from "next/router"

import Link from "next/link"

export default function Nav() {
  return (
    <Flex
      p="30px"
      background="0"
      alignItems="center"
      justifyContent="flex-end"
      flexDir={{ base: "column", sm: "row" }}
      w="100%"
      m="0 auto 20px"
      maxW="1367px"
      style={{ gap: "41px" }}
      position="relative"
      zIndex="1"
    >
      <Button
        _hover={{
          transform: "translateY(-4px)",
        }}
        fontSize="14px"
        height="35px"
        w="100%"
        maxW="100px"
        background="#fff"
        boxShadow="0px 1px 4px rgba(0, 0, 0, 0.19)"
        borderRadius="45px"
        onClick={() => router.push("../signin")}
      >
        Logar
      </Button>
    </Flex>
  )
}
